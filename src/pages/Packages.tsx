import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PackageCard from "@/components/PackageCard";
import accommodationImage from "@/assets/accommodation.jpg";

const packages = [
  {
    title: "Essential Care",
    description: "Perfect for straightforward procedures",
    features: [
      "3-star hotel accommodation",
      "7 nights stay",
      "Airport pickup and drop-off",
      "Hospital transfers",
      "Basic meals included",
      "24/7 phone support",
    ],
  },
  {
    title: "Comfort Plus",
    description: "Enhanced comfort and support",
    features: [
      "4-star hotel accommodation",
      "14 nights stay",
      "Airport pickup and drop-off",
      "All hospital transfers",
      "All meals included",
      "Dedicated care coordinator",
      "Local SIM card",
      "24/7 emergency support",
    ],
    highlighted: true,
  },
  {
    title: "Premium Recovery",
    description: "Ultimate care and luxury",
    features: [
      "5-star hotel accommodation",
      "21 nights stay",
      "VIP airport services",
      "Private vehicle transfers",
      "Gourmet meals included",
      "Personal care attendant",
      "Medical translator",
      "Post-discharge home visits",
      "Travel companion support",
      "24/7 concierge service",
    ],
  },
];

const Packages = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-12 bg-gradient-to-b from-secondary/20 to-background relative overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 gradient-text">
              Accommodation Packages
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Comfortable, recovery-focused accommodation packages designed specifically for international medical patients
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20 relative">
        <div className="container mx-auto px-4">
          <div className="mb-16 animate-fade-in-scale">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl hover-lift">
              <img
                src={accommodationImage}
                alt="Patient accommodation"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-3xl font-bold mb-2">Premium Accommodation</h3>
                <p className="text-white/90">Comfort and care during your recovery journey</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-stretch">
            {packages.map((pkg, index) => (
              <div key={index} className="animate-fade-in-scale h-full" style={{ animationDelay: `${index * 0.1}s` }}>
                <PackageCard {...pkg} />
              </div>
            ))}
          </div>

          <div className="glass rounded-2xl p-8 md:p-12 text-center animate-fade-in-scale backdrop-blur-xl border border-border/50">
            <h3 className="text-3xl font-bold text-foreground mb-6 gradient-text">
              All Packages Include
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 text-left">
              <div className="group hover-lift p-6 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border/30">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-hover mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-foreground mb-3 text-lg">Medical Support</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>Pre-treatment consultation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>Post-operative care coordination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>Medical records management</span>
                  </li>
                </ul>
              </div>
              <div className="group hover-lift p-6 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border/30">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent-hover mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-foreground mb-3 text-lg">Travel Assistance</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>Visa documentation support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>Flight booking assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>Travel insurance guidance</span>
                  </li>
                </ul>
              </div>
              <div className="group hover-lift p-6 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border/30">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-foreground mb-3 text-lg">Local Support</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>English-speaking staff</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>Local currency exchange</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">✓</span>
                    <span>Tourist information</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Packages;
