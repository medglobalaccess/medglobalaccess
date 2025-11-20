import { Award, Users, Globe, Heart, CheckCircle2, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: Heart,
    title: "Patient-Centered Care",
    description: "Your health and comfort are our top priorities throughout your medical journey",
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description: "We partner only with JCI-accredited hospitals and experienced medical professionals",
  },
  {
    icon: Globe,
    title: "International Standards",
    description: "World-class medical care meeting and exceeding international healthcare standards",
  },
  {
    icon: Users,
    title: "Comprehensive Support",
    description: "From initial consultation to post-treatment follow-up, we're with you every step",
  },
];

const milestones = [
  { year: "2018", title: "Founded", description: "Started with a vision to make healthcare accessible" },
  { year: "2020", title: "1000+ Patients", description: "Successfully treated over 1000 patients" },
  { year: "2022", title: "Expanded Network", description: "Partnered with 20+ JCI-accredited hospitals" },
  { year: "2024", title: "Excellence Award", description: "Recognized as top medical tourism facilitator" },
];

const whyChooseUs = [
  "Personalized treatment plans tailored to your needs",
  "24/7 dedicated support throughout your journey",
  "Transparent pricing with no hidden costs",
  "Seamless coordination of travel and accommodation",
  "Post-treatment follow-up care",
  "Language interpretation services available",
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Your Healthcare Journey Starts Here</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 gradient-text">
              About MedGlobalAccess
            </h1>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
              Bridging continents to deliver world-class healthcare from African countries and Middle East to India
            </p>
          </div>

          {/* Mission Section with Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
            <Card className="glass hover-lift group animate-slide-up">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-6 group-hover:scale-110 transition-transform">
                  <Heart className="h-7 w-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  MedGlobalAccess connects patients from African countries and Middle East to world-class medical care in India. 
                  We believe everyone deserves access to high-quality, affordable healthcare, and we're committed to making that a reality.
                </p>
              </CardContent>
            </Card>

            <Card className="glass hover-lift group animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/10 mb-6 group-hover:scale-110 transition-transform">
                  <Globe className="h-7 w-7 text-accent" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Promise</h2>
                <p className="text-muted-foreground leading-relaxed">
                  With comprehensive packages that include medical treatment and accommodation, we handle every aspect of your medical journey 
                  so you can focus on what matters most - your recovery.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">Our Core Values</h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              These principles guide everything we do
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="hover-lift hover-glow group animate-fade-in-scale" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent mb-4 group-hover:scale-110 transition-transform shadow-lg">
                        <Icon className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-3">{value.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">Why Choose Us</h2>
              <p className="text-muted-foreground text-center mb-12">
                Experience healthcare excellence with comprehensive support
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {whyChooseUs.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-3 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">Our Journey</h2>
            <p className="text-muted-foreground text-center mb-12">
              Milestones that shaped our story
            </p>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-4 gap-6">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative animate-fade-in-scale" style={{ animationDelay: `${index * 0.15}s` }}>
                    <Card className="hover-lift group">
                      <CardContent className="p-6 text-center">
                        <div className="text-4xl font-bold gradient-text mb-3 group-hover:scale-110 transition-transform">
                          {milestone.year}
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-2">{milestone.title}</h3>
                        <p className="text-sm text-muted-foreground">{milestone.description}</p>
                      </CardContent>
                    </Card>
                    {index < milestones.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary to-accent" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-accent" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-20" />
            
            <div className="relative p-8 md:p-12 text-center text-primary-foreground">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose India for Medical Treatment?</h2>
              <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Discover world-class healthcare at a fraction of the cost
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div className="group hover-lift">
                  <div className="text-5xl md:text-6xl font-bold mb-3 group-hover:scale-110 transition-transform">60-80%</div>
                  <div className="text-primary-foreground/90 text-lg">Cost Savings Compared to Western Countries</div>
                </div>
                <div className="group hover-lift">
                  <div className="text-5xl md:text-6xl font-bold mb-3 group-hover:scale-110 transition-transform">45+</div>
                  <div className="text-primary-foreground/90 text-lg">JCI Accredited Hospitals</div>
                </div>
                <div className="group hover-lift">
                  <div className="text-5xl md:text-6xl font-bold mb-3 group-hover:scale-110 transition-transform">#1</div>
                  <div className="text-primary-foreground/90 text-lg">Medical Tourism Destination</div>
                </div>
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

export default About;
