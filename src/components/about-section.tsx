import { Card, CardContent } from "@/components/ui/card";
import { Check, Syringe, Calendar, Pill } from "lucide-react";

export default function AboutSection() {
  const mechanisms = [
    {
      title: "Stimulates insulin release",
      description: "When glucose levels are high"
    },
    {
      title: "Reduces liver glucagon production",
      description: "Helping control glucose output"
    },
    {
      title: "Slows stomach emptying",
      description: "Controls post-meal sugar spikes"
    },
    {
      title: "Increases fullness",
      description: "Reduces appetite and food intake"
    }
  ];

  const dosingFeatures = [
    {
      icon: Syringe,
      title: "Injectable Medication",
      description: "Prefilled pen, injected once weekly under the skin",
      color: "primary"
    },
    {
      icon: Calendar,
      title: "Weekly Dosing",
      description: "Convenient once-weekly administration schedule",
      color: "secondary"
    },
    {
      icon: Pill,
      title: "Six Available Doses",
      description: "2.5mg, 5mg, 7.5mg, 10mg, 12.5mg, 15mg",
      color: "accent"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Understanding Mounjaro (Tirzepatide)
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The first and only FDA-approved dual GIP and GLP-1 receptor agonist, designed to help adults with type 2 diabetes achieve better blood sugar control.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">How Mounjaro Works</h3>
            <p className="text-muted-foreground leading-relaxed">
              Mounjaro works by activating two gut hormone receptors, GIP and GLP-1, to manage blood sugar through multiple mechanisms that work together for comprehensive diabetes management.
            </p>
            
            <div className="space-y-4">
              {mechanisms.map((mechanism, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <Check className="text-primary h-3 w-3" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{mechanism.title}</h4>
                    <p className="text-sm text-muted-foreground">{mechanism.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://pixabay.com/get/ge5724ae3d3663f1339a662bd8b791be7aad47f19ba0b2fc164a8ff2d7515efd8032361d36a6dfcde2e879f3440173d6e70845a2c4c3901cb3b5d7476461dd08c_1280.jpg" 
              alt="Modern healthcare technology and medical monitoring equipment" 
              className="rounded-xl shadow-lg w-full h-auto"
              data-testid="img-healthcare-technology"
            />
          </div>
        </div>

        {/* Dosing Information */}
        <Card className="bg-muted/30 border-0">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Administration & Dosing</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {dosingFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                const colorClass = feature.color === 'primary' ? 'primary' : 
                                 feature.color === 'secondary' ? 'secondary' : 'accent';
                
                return (
                  <div key={index} className="text-center">
                    <div className={`w-16 h-16 bg-${colorClass}/10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className={`text-${colorClass} h-6 w-6`} />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
