import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Clock, Globe, Shield } from "lucide-react";
import heroImage from "@/assets/hero-medical.jpg";

const Contact = () => {
  useEffect(() => {
    // Load Tally embed script
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white pt-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Get Your Free Quote
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 max-w-2xl animate-fade-in-up delay-100">
            Expert medical care is just a click away. Tell us your needs, and we'll handle the rest.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-20 relative z-10 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
              <div className="p-1">
                <iframe
                  data-tally-src="https://tally.so/embed/vGG85g?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                  loading="lazy"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  style={{ minHeight: "800px" }}
                  title="MedGlobalAccess – Medical Treatment Inquiry Form"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Sidebar / Info Section */}
          <div className="lg:col-span-1 space-y-6">
            {/* Benefits Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Why Choose Us?</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Fast Response</h4>
                    <p className="text-sm text-slate-600 mt-1">We review your case and respond within 24 hours.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Verified Hospitals</h4>
                    <p className="text-sm text-slate-600 mt-1">Partnered with JCI & NABH accredited hospitals.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <Globe className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Global Support</h4>
                    <p className="text-sm text-slate-600 mt-1">End-to-end assistance from arrival to departure.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Process Card */}
            <div className="bg-slate-900 rounded-2xl shadow-lg p-8 text-white">
              <h3 className="text-xl font-bold mb-6">How It Works</h3>
              <div className="space-y-6 relative">
                {/* Connecting Line */}
                <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-slate-700" />

                {[
                  "Submit your details",
                  "Get a treatment plan",
                  "Travel & Treatment",
                  "Recovery & Return"
                ].map((step, index) => (
                  <div key={index} className="flex items-center space-x-4 relative">
                    <div className="bg-primary h-10 w-10 rounded-full flex items-center justify-center font-bold text-white shrink-0 z-10 border-4 border-slate-900">
                      {index + 1}
                    </div>
                    <span className="font-medium">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
