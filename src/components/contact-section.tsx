import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, Mail, AlertTriangle, ArrowRight } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { InsertHealthcareInquiry } from "@shared/schema";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<InsertHealthcareInquiry>({
    firstName: "",
    lastName: "",
    title: "",
    email: "",
    phone: "",
    institution: "",
    inquiryType: "",
    message: ""
  });
  const [consent, setConsent] = useState(false);

  const submitInquiry = useMutation({
    mutationFn: async (data: InsertHealthcareInquiry) => {
      return apiRequest("POST", "/api/healthcare-inquiries", data);
    },
    onSuccess: () => {
      toast({
        title: "Inquiry Submitted",
        description: "Thank you for your inquiry. A medical affairs representative will contact you within 24-48 hours.",
      });
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        title: "",
        email: "",
        phone: "",
        institution: "",
        inquiryType: "",
        message: ""
      });
      setConsent(false);
    },
    onError: (error) => {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your inquiry. Please try again or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) {
      toast({
        title: "Consent Required",
        description: "Please consent to being contacted before submitting your inquiry.",
        variant: "destructive",
      });
      return;
    }
    submitInquiry.mutate(formData);
  };

  const handleInputChange = (field: keyof InsertHealthcareInquiry, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Medical Affairs Hotline",
      value: "1-800-MOUNJARO (1-800-668-6527)",
      detail: "Monday-Friday, 8 AM - 8 PM EST",
      color: "primary"
    },
    {
      icon: Mail,
      title: "Email Support",
      value: "medinfo@mounjaro.com",
      detail: "Response within 24-48 hours",
      color: "secondary"
    },
    {
      icon: AlertTriangle,
      title: "Adverse Event Reporting",
      value: "1-800-LLY-RX01 (1-800-559-7901)",
      detail: "24/7 reporting available",
      color: "accent"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Healthcare Professional Contact
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Connect with our medical affairs team for clinical questions, educational resources, or healthcare provider support.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card border border-border shadow-sm">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Healthcare Inquiry Form</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-sm font-medium text-foreground">First Name *</Label>
                    <Input
                      id="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      required
                      data-testid="input-first-name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-sm font-medium text-foreground">Last Name *</Label>
                    <Input
                      id="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      required
                      data-testid="input-last-name"
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="title" className="text-sm font-medium text-foreground">Professional Title *</Label>
                  <Select value={formData.title} onValueChange={(value) => handleInputChange("title", value)} required>
                    <SelectTrigger data-testid="select-title">
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="physician">Physician</SelectItem>
                      <SelectItem value="nurse-practitioner">Nurse Practitioner</SelectItem>
                      <SelectItem value="physician-assistant">Physician Assistant</SelectItem>
                      <SelectItem value="pharmacist">Pharmacist</SelectItem>
                      <SelectItem value="diabetes-educator">Diabetes Educator</SelectItem>
                      <SelectItem value="other">Other Healthcare Professional</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-foreground">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                    data-testid="input-email"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-foreground">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone || ""}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    data-testid="input-phone"
                  />
                </div>
                
                <div>
                  <Label htmlFor="institution" className="text-sm font-medium text-foreground">Practice/Institution</Label>
                  <Input
                    id="institution"
                    type="text"
                    value={formData.institution || ""}
                    onChange={(e) => handleInputChange("institution", e.target.value)}
                    data-testid="input-institution"
                  />
                </div>
                
                <div>
                  <Label htmlFor="inquiryType" className="text-sm font-medium text-foreground">Inquiry Type</Label>
                  <Select value={formData.inquiryType || ""} onValueChange={(value) => handleInputChange("inquiryType", value)}>
                    <SelectTrigger data-testid="select-inquiry-type">
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="clinical-information">Clinical Information</SelectItem>
                      <SelectItem value="prescribing-guidance">Prescribing Guidance</SelectItem>
                      <SelectItem value="patient-resources">Patient Resources</SelectItem>
                      <SelectItem value="educational-materials">Educational Materials</SelectItem>
                      <SelectItem value="adverse-event">Adverse Event Reporting</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-foreground">Message</Label>
                  <Textarea
                    id="message"
                    rows={4}
                    value={formData.message || ""}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Please provide details about your inquiry..."
                    data-testid="textarea-message"
                  />
                </div>
                
                <div className="flex items-start space-x-3">
                  <Checkbox 
                    id="consent" 
                    checked={consent}
                    onCheckedChange={(checked) => setConsent(checked as boolean)}
                    required
                    data-testid="checkbox-consent"
                  />
                  <Label htmlFor="consent" className="text-sm text-muted-foreground">
                    I consent to being contacted by the medical affairs team regarding my inquiry. I understand this information will be used in accordance with applicable privacy policies. *
                  </Label>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  disabled={submitInquiry.isPending}
                  data-testid="button-submit-inquiry"
                >
                  {submitInquiry.isPending ? "Submitting..." : "Submit Inquiry"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Medical team in consultation discussing patient care" 
                className="rounded-xl shadow-lg w-full h-auto mb-8"
                data-testid="img-medical-team"
              />
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-foreground">Contact Information</h3>
              
              <div className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  const colorClass = contact.color;
                  
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <div className={`w-8 h-8 bg-${colorClass}/10 rounded-full flex items-center justify-center mt-1`}>
                        <IconComponent className={`text-${colorClass} h-4 w-4`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{contact.title}</h4>
                        <p className="text-muted-foreground" data-testid={`text-${contact.title.toLowerCase().replace(' ', '-')}`}>
                          {contact.value}
                        </p>
                        <p className="text-sm text-muted-foreground">{contact.detail}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <Card className="bg-muted/30 border-0">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-3">Emergency Medical Information</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  For urgent medical questions outside business hours, healthcare professionals can access 24/7 medical information services.
                </p>
                <button 
                  className="text-primary text-sm font-semibold hover:underline flex items-center"
                  data-testid="button-emergency-protocols"
                >
                  Access Emergency Protocols <ArrowRight className="ml-1 h-3 w-3" />
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
