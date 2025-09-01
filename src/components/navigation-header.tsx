import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function NavigationHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary" data-testid="logo-mounjaro">Mounjaro</h1>
              <p className="text-xs text-muted-foreground">Professional Healthcare Portal</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors duration-200"
              data-testid="nav-about"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("benefits")}
              className="text-foreground hover:text-primary transition-colors duration-200"
              data-testid="nav-benefits"
            >
              Benefits
            </button>
            <button 
              onClick={() => scrollToSection("resources")}
              className="text-foreground hover:text-primary transition-colors duration-200"
              data-testid="nav-resources"
            >
              Resources
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors duration-200"
              data-testid="nav-contact"
            >
              Contact
            </button>
            <Button 
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              data-testid="button-healthcare-login"
            >
              Healthcare Login
            </Button>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-primary transition-colors duration-200 text-left"
                data-testid="mobile-nav-about"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("benefits")}
                className="text-foreground hover:text-primary transition-colors duration-200 text-left"
                data-testid="mobile-nav-benefits"
              >
                Benefits
              </button>
              <button 
                onClick={() => scrollToSection("resources")}
                className="text-foreground hover:text-primary transition-colors duration-200 text-left"
                data-testid="mobile-nav-resources"
              >
                Resources
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary transition-colors duration-200 text-left"
                data-testid="mobile-nav-contact"
              >
                Contact
              </button>
              <Button 
                className="bg-primary text-primary-foreground hover:bg-primary/90 w-full"
                data-testid="mobile-button-healthcare-login"
              >
                Healthcare Login
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
