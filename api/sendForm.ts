import type { VercelRequest, VercelResponse } from '@vercel/node';
import sgMail from '@sendgrid/mail';
import Busboy from 'busboy';

// Configure SendGrid
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

interface FormFields {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  country?: string;
  service?: string;
  travel_date?: string;
}

interface FileData {
  buffer: Buffer;
  filename: string;
  mimetype: string;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(200).end();
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    console.error(`Method not allowed: ${req.method}`);
    return res.status(405).json({ success: false, error: `Method not allowed. Received: ${req.method}` });
  }

  // Set CORS headers for POST requests
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Check for required environment variables
  if (!process.env.SENDGRID_API_KEY) {
    console.error('SENDGRID_API_KEY is not set');
    return res.status(500).json({ success: false, error: 'Server configuration error' });
  }

  if (!process.env.EMAIL_TO || !process.env.EMAIL_FROM) {
    console.error('EMAIL_TO or EMAIL_FROM is not set');
    return res.status(500).json({ success: false, error: 'Server configuration error' });
  }

  try {
    const formFields: FormFields = {};
    const files: FileData[] = [];

    // Parse multipart/form-data using busboy
    const busboy = Busboy({ 
      headers: req.headers as Record<string, string>,
    });

    // Handle form fields
    busboy.on('field', (fieldname: string, value: string) => {
      if (fieldname === 'name') formFields.name = value;
      else if (fieldname === 'email') formFields.email = value;
      else if (fieldname === 'phone') formFields.phone = value;
      else if (fieldname === 'message') formFields.message = value;
      else if (fieldname === 'country') formFields.country = value;
      else if (fieldname === 'service') formFields.service = value;
      else if (fieldname === 'travel_date') formFields.travel_date = value;
    });

    // Handle file uploads
    const filePromises: Promise<void>[] = [];
    
    busboy.on('file', (fieldname: string, file: NodeJS.ReadableStream, info: { filename: string; encoding: string; mimeType: string }) => {
      const { filename, mimeType } = info;
      
      if (fieldname === 'files') {
        const filePromise = new Promise<void>((resolve) => {
          const chunks: Buffer[] = [];
          
          file.on('data', (chunk: Buffer) => {
            chunks.push(chunk);
          });

          file.on('end', () => {
            files.push({
              buffer: Buffer.concat(chunks),
              filename: filename || 'unnamed-file',
              mimetype: mimeType || 'application/octet-stream',
            });
            resolve();
          });

          file.on('error', (err) => {
            console.error('File stream error:', err);
            resolve(); // Continue even if one file fails
          });
        });
        
        filePromises.push(filePromise);
      } else {
        // Ignore other file fields
        (file as any).resume();
      }
    });

    // Wait for busboy to finish parsing
    await new Promise<void>((resolve, reject) => {
      busboy.on('finish', async () => {
        // Wait for all file streams to finish
        await Promise.all(filePromises);
        resolve();
      });
      busboy.on('error', (err) => {
        console.error('Busboy error:', err);
        reject(err);
      });
      
      // Pipe the request to busboy
      // Vercel serverless functions provide req as a readable stream
      // Cast to any to access stream methods
      const requestStream = req as any;
      
      if (requestStream.readable || typeof requestStream.pipe === 'function') {
        requestStream.pipe(busboy);
      } else if (requestStream.body) {
        // Fallback: if body is already parsed
        const body = requestStream.body;
        if (Buffer.isBuffer(body)) {
          busboy.end(body);
        } else if (typeof body === 'string') {
          busboy.end(Buffer.from(body, 'utf8'));
        } else {
          reject(new Error('Unable to parse request body - body is not a buffer or string'));
        }
      } else {
        // Try to read the raw body
        const chunks: Buffer[] = [];
        requestStream.on('data', (chunk: Buffer) => chunks.push(chunk));
        requestStream.on('end', () => {
          const buffer = Buffer.concat(chunks);
          busboy.end(buffer);
        });
        requestStream.on('error', reject);
      }
    });

    // Validate required fields
    if (!formFields.name || !formFields.email || !formFields.phone || !formFields.message) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: name, email, phone, and message are required',
      });
    }

    // Prepare email content
    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${formFields.name}</p>
      <p><strong>Email:</strong> ${formFields.email}</p>
      <p><strong>Phone:</strong> ${formFields.phone}</p>
      ${formFields.country ? `<p><strong>Country:</strong> ${formFields.country}</p>` : ''}
      ${formFields.service ? `<p><strong>Medical Service:</strong> ${formFields.service}</p>` : ''}
      ${formFields.travel_date ? `<p><strong>Preferred Travel Date:</strong> ${formFields.travel_date}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p>${formFields.message.replace(/\n/g, '<br>')}</p>
      ${files.length > 0 ? `<p><strong>Attachments:</strong> ${files.length} file(s)</p>` : ''}
    `;

    // Prepare email attachments
    const attachments = files.map((file) => ({
      content: file.buffer.toString('base64'),
      filename: file.filename,
      type: file.mimetype,
      disposition: 'attachment' as const,
    }));

    // Send email using SendGrid
    const msg = {
      to: process.env.EMAIL_TO,
      from: process.env.EMAIL_FROM,
      subject: `New Contact Form Submission from ${formFields.name}`,
      html: emailContent,
      attachments: attachments.length > 0 ? attachments : undefined,
    };

    await sgMail.send(msg);

    // Return success response
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error processing form submission:', error);
    
    // Return error response
    return res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'An unknown error occurred',
    });
  }
}
