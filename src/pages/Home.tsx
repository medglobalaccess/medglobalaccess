import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ServiceCard from "@/components/ServiceCard";
import ProcessSteps from "@/components/ProcessSteps";
import heroImage from "@/assets/hero-medical.jpg";
import cardiologyImage from "@/assets/cardiology.jpg";
import orthopedicsImage from "@/assets/orthopedics.jpg";
import oncologyImage from "@/assets/oncology.jpg";
const services = [{
  id: "cardiology",
  title: "Cardiology",
  description: "Advanced heart care with state-of-the-art facilities and experienced cardiologists",
  image: cardiologyImage
}, {
  id: "orthopedics",
  title: "Orthopedics",
  description: "Comprehensive joint replacement and orthopedic surgery solutions",
  image: orthopedicsImage
}, {
  id: "oncology",
  title: "Oncology",
  description: "World-class cancer treatment with cutting-edge technology",
  image: oncologyImage
}];
const Home = () => {
  return <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[650px] md:h-[750px] flex items-center mt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Medical facility" className="w-full h-full object-cover scale-105 animate-slow-zoom" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/60" />
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{
          animationDelay: '2s'
        }} />
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl text-background animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              World-Class Medical Care in <span className="text-primary">India</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-background/95 leading-relaxed">
              Your Bridge to Better Health - Comprehensive treatment and accommodation packages for patients from African countries and Middle East
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" variant="gradient" className="shadow-2xl">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="bg-background/10 hover:bg-background/20 text-background border-background/40 backdrop-blur-sm hover:border-background/60">
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Process Steps */}
      <ProcessSteps />

      {/* Featured Services */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Medical Services
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Expert care across multiple specialties with internationally accredited hospitals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => <div key={service.id} className="animate-fade-in-scale" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <ServiceCard {...service} />
              </div>)}
          </div>

          <div className="text-center">
            <Link to="/services">
              <Button size="lg" variant="outline" className="hover:border-primary hover:text-primary hover:shadow-lg">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-animate text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl md:text-2xl mb-10 opacity-95 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{
          animationDelay: '0.1s'
        }}>
            Get a personalized treatment plan and quote today
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-background text-foreground hover:bg-background/90 hover:scale-105 shadow-2xl animate-slide-up" style={{
            animationDelay: '0.2s'
          }}>
              Request Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>;
};
export default Home;