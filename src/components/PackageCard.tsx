import { Check } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface PackageCardProps {
  title: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

const PackageCard = ({ title, description, features, highlighted }: PackageCardProps) => {
  return (
    <Card className={`relative hover:-translate-y-2 transition-all duration-500 ${highlighted ? "border-primary/50 shadow-2xl scale-105 bg-gradient-to-br from-primary/5 to-accent/5" : "border-border/50 hover:shadow-xl"}`}>
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <span className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
            Most Popular
          </span>
        </div>
      )}
      <CardHeader className="text-center pb-8 pt-10">
        <h3 className="text-2xl font-bold text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-3 group/feature">
            <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-full p-1.5 mt-0.5 group-hover/feature:scale-110 transition-transform duration-300">
              <Check className="h-4 w-4 text-accent" />
            </div>
            <span className="text-sm text-foreground leading-relaxed">{feature}</span>
          </div>
        ))}
      </CardContent>
      <CardFooter className="pt-6">
        <Link to="/contact" className="w-full">
          <Button className={`w-full ${highlighted ? "bg-gradient-to-r from-primary to-accent hover:shadow-xl hover:scale-105" : ""}`}>
            Request Quote
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default PackageCard;
