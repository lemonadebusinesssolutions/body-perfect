import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "What makes Mounjaro different from other diabetes medications?",
      answer: "Mounjaro is the first and only FDA-approved dual GIP and GLP-1 receptor agonist. This dual-action mechanism provides superior efficacy in both blood sugar control and weight management compared to single-receptor medications."
    },
    {
      question: "How long does it take to see results with Mounjaro?",
      answer: "Studies show that it can take 8 weeks to reach an A1C target of ≤7% and 12 weeks to reach an A1C ≤6.5%. Significant weight loss can occur as early as 28 weeks of treatment."
    },
    {
      question: "What are the most common side effects?",
      answer: "The most common side effects include nausea, diarrhea, decreased appetite, vomiting, constipation, indigestion, and stomach pain. Most side effects are mild to moderate and tend to decrease over time."
    },
    {
      question: "Can Mounjaro be used with other diabetes medications?",
      answer: "Yes, Mounjaro may be used alone or in combination with other FDA-approved diabetes medications such as metformin, sulfonylureas, SGLT2 inhibitors, and insulin. Healthcare providers should determine the appropriate combination based on individual patient needs."
    },
    {
      question: "Is Mounjaro approved for weight loss?",
      answer: "Mounjaro is specifically FDA-approved for type 2 diabetes management, not as a weight loss medication. However, significant weight loss is a common benefit observed in clinical studies as part of comprehensive diabetes care."
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Common questions about Mounjaro from healthcare professionals and patients.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg shadow-sm"
              data-testid={`faq-item-${index}`}
            >
              <AccordionTrigger className="px-6 py-4 text-left hover:bg-muted/50 transition-colors duration-200 font-semibold text-foreground">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
