import { Card, CardContent } from "@/components/ui/card";

export default function DisclaimerSection() {
  return (
    <section className="py-12 bg-muted/20 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-card border border-border">
          <CardContent className="p-8">
            <h3 className="text-lg font-bold text-foreground mb-4">Important Safety Information & Medical Disclaimer</h3>
            
            <div className="space-y-4 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">PRESCRIPTION MEDICATION - For Healthcare Professional Use Only</p>
              
              <p>
                <strong>Indication:</strong> Mounjaro (tirzepatide) injection is indicated as an adjunct to diet and exercise to improve blood sugar (glucose) control in adults with type 2 diabetes mellitus.
              </p>
              
              <p>
                <strong>Important Safety Information:</strong> Mounjaro is not known if it is safe and effective for use in children under 18 years of age. The most common side effects include nausea, diarrhea, decreased appetite, vomiting, constipation, indigestion, and stomach pain. Serious side effects may include inflammation of the pancreas, low blood sugar, allergic reactions, kidney problems, severe stomach problems, and complications of diabetes-related eye disease.
              </p>
              
              <p>
                <strong>Contraindications:</strong> Mounjaro is contraindicated in patients with a personal or family history of medullary thyroid carcinoma or in patients with Multiple Endocrine Neoplasia syndrome type 2.
              </p>
              
              <p>
                This information is for educational purposes only and is not intended to replace professional medical advice, diagnosis, or treatment. Healthcare professionals should refer to the full prescribing information before prescribing Mounjaro. Patients should be advised to speak with their healthcare provider about their individual medical condition and treatment options.
              </p>
              
              <p className="text-xs">
                For full prescribing information, visit: <a href="https://www.accessdata.fda.gov/drugsatfda_docs/label/2022/215866s000lbl.pdf" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer" data-testid="link-prescribing-info">https://www.accessdata.fda.gov/drugsatfda_docs/label/2022/215866s000lbl.pdf</a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
