
import { useState } from "react";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { toast } from "sonner";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success("Your message has been sent! We'll get back to you soon.");
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for subscribing to our newsletter!");
  };

  return (
    <div>
      <PageHeader 
        title="Contact Us" 
        description="Get in touch with the UBC Tennis Club team."
      />
      
      {/* Contact Information */}
      <Section
        title="Contact Information"
        description="Reach out to us with any questions, feedback, or inquiries."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">For general inquiries:</p>
              <a href="mailto:info@ubctennisclub.com" className="font-medium hover:text-primary">
                info@ubctennisclub.com
              </a>
              
              <p className="text-muted-foreground mt-2">For membership questions:</p>
              <a href="mailto:membership@ubctennisclub.com" className="font-medium hover:text-primary">
                membership@ubctennisclub.com
              </a>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                Phone
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Club President:</p>
              <a href="tel:6041234567" className="font-medium hover:text-primary">
                (604) 123-4567
              </a>
              
              <p className="text-muted-foreground mt-2">Tennis Centre:</p>
              <a href="tel:6049876543" className="font-medium hover:text-primary">
                (604) 987-6543
              </a>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Location
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">UBC Tennis Centre</p>
              <p className="font-medium">6160 Thunderbird Blvd</p>
              <p className="font-medium">Vancouver, BC V6T 1Z3</p>
            </CardContent>
          </Card>
        </div>
      </Section>
      
      {/* Map */}
      <Section className="bg-muted/50 py-16 -mx-4 sm:-mx-6 px-4 sm:px-6">
        <div className="w-full h-[400px] rounded-lg overflow-hidden border">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.0044121970384!2d-123.24547492308467!3d49.26048237150319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548672cc2fd41e03%3A0x5770c8cf0c2ebfec!2sUBC%20Tennis%20Centre!5e0!3m2!1sen!2sca!4v1695673698388!5m2!1sen!2sca" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="UBC Tennis Centre Location"
          ></iframe>
        </div>
      </Section>
      
      {/* Contact Form */}
      <Section
        title="Send Us a Message"
        description="Fill out the form below and we'll get back to you as soon as possible."
      >
        <Card>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    placeholder="John Doe" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="john.doe@example.com" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input 
                  id="subject" 
                  name="subject" 
                  placeholder="Membership Inquiry" 
                  value={formData.subject} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={6} 
                  className="w-full p-2 border rounded-md" 
                  placeholder="Enter your message here..." 
                  value={formData.message} 
                  onChange={handleChange} 
                  required
                ></textarea>
              </div>
              
              <Separator />
              
              <div className="flex justify-end">
                <Button type="submit">Send Message</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </Section>
      
      {/* Social Media */}
      <Section
        title="Connect With Us"
        description="Follow us on social media for the latest updates and announcements."
        className="bg-muted/50 py-16 -mx-4 sm:-mx-6 px-4 sm:px-6"
      >
        <div className="flex flex-col items-center">
          <div className="flex gap-4 mb-6">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-shadow"
              aria-label="Facebook"
            >
              <Facebook className="h-6 w-6 text-[#1877F2]" />
            </a>
            
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-shadow"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6 text-[#E4405F]" />
            </a>
            
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-3 rounded-full shadow-md hover:shadow-lg transition-shadow"
              aria-label="Twitter"
            >
              <Twitter className="h-6 w-6 text-[#1DA1F2]" />
            </a>
          </div>
          
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Subscribe to Our Newsletter</CardTitle>
              <CardDescription>Get the latest news and updates delivered to your inbox.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <Input 
                  placeholder="your.email@example.com" 
                  type="email" 
                  required 
                  className="flex-1"
                />
                <Button type="submit">Subscribe</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </Section>
    </div>
  );
};

export default ContactPage;
