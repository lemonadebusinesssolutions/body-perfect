import { Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const footerSections = [
    {
      title: "Healthcare Resources",
      links: [
        "Clinical Guidelines",
        "Prescribing Information", 
        "Patient Materials",
        "Training Modules"
      ]
    },
    {
      title: "Support",
      links: [
        "Medical Affairs",
        "Patient Support",
        "Adverse Event Reporting",
        "Contact Us"
      ]
    },
    {
      title: "Legal",
      links: [
        "Privacy Policy",
        "Terms of Use",
        "Accessibility",
        "Regulatory Information"
      ]
    }
  ];

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Mounjaro</h3>
            <p className="text-sm text-background/80">
              Professional healthcare information portal for tirzepatide education and resources.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-background/60 hover:text-background transition-colors duration-200"
                data-testid="link-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-background/60 hover:text-background transition-colors duration-200"
                data-testid="link-twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2 text-sm text-background/80">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="hover:text-background transition-colors duration-200"
                      data-testid={`footer-link-${link.toLowerCase().replace(' ', '-')}`}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/60">
          <p>&copy; 2025 Mounjaro Healthcare Portal. All rights reserved. This site is intended for healthcare professionals only.</p>
        </div>
      </div>
    </footer>
  );
}
