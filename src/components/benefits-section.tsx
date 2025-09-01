import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Weight, Clock } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: TrendingUp,
      title: "A1C Reduction",
      percentage: "75-90%",
      description: "of people reached A1C target of less than 7%",
      detail: "Average starting A1C: 7.9% to 8.6%",
      color: "primary"
    },
    {
      icon: Weight,
      title: "Weight Loss", 
      percentage: "12-25 lbs",
      description: "Average weight loss across dose ranges",
      detail: "5mg dose: 12 lbs | 15mg dose: 25 lbs",
      color: "accent"
    },
    {
      icon: Clock,
      title: "Timeline",
      percentage: "8-12",
      description: "weeks to reach A1C targets",
      detail: "8 weeks: ≤7% | 12 weeks: ≤6.5%",
      color: "secondary"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Clinical Benefits & Outcomes
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Evidence-based results from clinical studies demonstrate Mounjaro's effectiveness in blood sugar control and weight management.
          </p>
        </div>

        {/* Clinical Results Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            const colorClass = benefit.color;
            
            return (
              <Card key={index} className="bg-card border border-border shadow-sm hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-12 h-12 bg-${colorClass}/10 rounded-full flex items-center justify-center`}>
                      <IconComponent className={`text-${colorClass} h-6 w-6`} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{benefit.title}</h3>
                  </div>
                  <div className="space-y-3">
                    <div className={`text-3xl font-bold text-${colorClass}`} data-testid={`text-${benefit.title.toLowerCase().replace(' ', '-')}-value`}>
                      {benefit.percentage}
                    </div>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    <div className="text-xs text-muted-foreground">
                      {benefit.detail}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Comparison Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Superior Efficacy</h3>
            <p className="text-muted-foreground leading-relaxed">
              According to FDA regulators, patients taking the maximum recommended dose of Mounjaro lost 12 pounds more on average than those who used semaglutide, demonstrating superior weight management outcomes.
            </p>
            
            <Card className="bg-card border border-border">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-3">Recent 2025 FDA Approval</h4>
                <p className="text-sm text-muted-foreground">
                  The FDA recently approved tirzepatide for treatment of obstructive sleep apnea, representing an expanded use beyond diabetes management.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border border-border">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-3">Combination Therapy</h4>
                <p className="text-sm text-muted-foreground">
                  May be used alone or in combination with other FDA-approved diabetes medications such as metformin, sulfonylureas, SGLT2 inhibitors, and insulin.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Healthcare professional discussing diabetes treatment options with patient" 
              className="rounded-xl shadow-lg w-full h-auto"
              data-testid="img-treatment-discussion"
            />
            
            <Card className="absolute -top-4 -right-4 bg-card border border-border shadow-lg">
              <CardContent className="p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary" data-testid="text-dual-action">Dual Action</div>
                  <div className="text-xs text-muted-foreground">GIP + GLP-1</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
