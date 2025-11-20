import { FileText, Calendar, Plane, Heart } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Submit Records",
    description: "Share your medical reports and let us review your case",
  },
  {
    icon: Calendar,
    title: "Get Your Plan",
    description: "Receive a personalized treatment and travel plan",
  },
  {
    icon: Plane,
    title: "Travel & Stay",
    description: "We arrange everything from flights to accommodation",
  },
  {
    icon: Heart,
    title: "Treatment & Recovery",
    description: "Receive world-class care and comprehensive support",
  },
];

const ProcessSteps = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Your journey to better health in four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative group animate-fade-in-scale" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-center">
                  <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 mb-6 group-hover:scale-110 transition-all duration-500 group-hover:shadow-xl">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Icon className="h-10 w-10 text-primary group-hover:text-white relative z-10 transition-colors duration-500" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute top-10 h-0.5 bg-gradient-to-r from-primary/40 via-accent/40 to-primary/40 -z-10 hidden lg:block" style={{ left: 'calc(50% + 2.5rem)', width: '16.6rem' }} />
                  )}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
