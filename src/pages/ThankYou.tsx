import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const ThankYou = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-6 flex justify-center">
              <CheckCircle className="h-20 w-20 text-primary" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Thank You!
            </h1>
            
            <p className="text-muted-foreground text-xl mb-8 leading-relaxed">
              We have received your details. Our team will contact you shortly with a personalized treatment plan and cost estimate.
            </p>
            
            <div className="bg-primary/10 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-foreground mb-3">What Happens Next?</h3>
              <ul className="text-sm text-muted-foreground space-y-2 text-left max-w-md mx-auto">
                <li>✓ We'll review your case within 24 hours</li>
                <li>✓ You'll receive a detailed treatment plan</li>
                <li>✓ Get a personalized cost estimate</li>
                <li>✓ Our medical coordinator will reach out to you</li>
                <li>✓ We'll help you plan your medical journey</li>
              </ul>
            </div>
            
            <Link to="/">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Go Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ThankYou;
