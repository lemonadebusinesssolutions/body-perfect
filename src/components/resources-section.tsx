import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Users, BarChart3, GraduationCap, Headphones, Smartphone, CheckCircle, ArrowRight } from "lucide-react";

export default function ResourcesSection() {
  const resources = [
    {
      icon: FileText,
      title: "Clinical Guidelines",
      description: "Comprehensive prescribing information, dosing guidelines, and clinical protocols for optimal patient care.",
      buttonText: "Download PDF",
      color: "primary"
    },
    {
      icon: Users,
      title: "Patient Materials",
      description: "Educational brochures, injection guides, and lifestyle resources to support patient understanding and adherence.",
      buttonText: "View Materials",
      color: "secondary"
    },
    {
      icon: BarChart3,
      title: "Clinical Data",
      description: "Latest clinical trial results, real-world evidence, and comparative effectiveness data for informed decisions.",
      buttonText: "Access Data",
      color: "accent"
    },
    {
      icon: GraduationCap,
      title: "Training Modules",
      description: "Interactive training programs and continuing education modules for healthcare professionals.",
      buttonText: "Start Training",
      color: "primary"
    },
    {
      icon: Headphones,
      title: "Support Services",
      description: "24/7 healthcare professional support line and patient assistance program information.",
      buttonText: "Contact Support",
      color: "secondary"
    },
    {
      icon: Smartphone,
      title: "Digital Tools",
      description: "Mobile apps and digital resources for patient monitoring and healthcare provider tools.",
      buttonText: "Explore Tools",
      color: "accent"
    }
  ];

  const supportFeatures = [
    "Financial assistance programs",
    "Injection training and support",
    "Lifestyle counseling resources",
    "24/7 patient support hotline"
  ];

  return (
    <section id="resources" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Healthcare Provider Resources
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive educational materials and patient support resources for healthcare professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {resources.map((resource, index) => {
            const IconComponent = resource.icon;
            const colorClass = resource.color;
            
            return (
              <Card key={index} className="bg-card border border-border shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-12 h-12 bg-${colorClass}/10 rounded-full flex items-center justify-center group-hover:bg-${colorClass}/20 transition-colors duration-200`}>
                      <IconComponent className={`text-${colorClass} h-6 w-6`} />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{resource.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {resource.description}
                  </p>
                  <button 
                    className={`text-${colorClass} text-sm font-semibold hover:underline flex items-center`}
                    data-testid={`button-${resource.title.toLowerCase().replace(' ', '-')}`}
                  >
                    {resource.buttonText} <ArrowRight className="ml-1 h-3 w-3" />
                  </button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Patient Support Section */}
        <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-0">
          <CardContent className="p-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Patient Support Programs</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Comprehensive support programs designed to help patients succeed with their Mounjaro therapy, including financial assistance and educational resources.
                </p>
                
                <div className="space-y-4">
                  {supportFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="text-accent h-5 w-5" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  data-testid="button-patient-support"
                >
                  Access Patient Support
                </Button>
              </div>
              
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Diabetes care consultation with healthcare professional" 
                  className="rounded-xl shadow-lg w-full h-auto"
                  data-testid="img-diabetes-consultation"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
