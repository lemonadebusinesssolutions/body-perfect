import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { UserCheck, Download, CheckCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Professional Healthcare Information for
                <span className="text-primary"> Mounjaro</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Comprehensive educational resources about tirzepatide, the first FDA-approved dual GIP and GLP-1 receptor agonist for type 2 diabetes management.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 transform hover:scale-105 transition-all duration-200"
                data-testid="button-healthcare-access"
              >
                <UserCheck className="mr-2 h-5 w-5" />
                Healthcare Provider Access
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-border text-foreground hover:bg-muted"
                data-testid="button-download-resources"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resources
              </Button>
            </div>

            <Card className="bg-card border border-border shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <h3 className="font-semibold text-foreground">FDA Approved</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Mounjaro is FDA-approved as an adjunct to diet and exercise to improve blood sugar control in adults with type 2 diabetes mellitus.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Healthcare professional consulting with patient" 
              className="rounded-2xl shadow-2xl w-full h-auto"
              data-testid="img-healthcare-consultation"
            />
            <Card className="absolute -bottom-6 -left-6 bg-card border border-border shadow-lg">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                    <CheckCircle className="text-accent h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm" data-testid="text-success-rate">75-90% Success Rate</p>
                    <p className="text-xs text-muted-foreground">A1C target achievement</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
