
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { SponsorGrid } from "@/components/sponsors/SponsorGrid";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

// Mock data for sponsors
const sponsors = [
  {
    id: "1",
    name: "Wilson",
    logo: "https://logowik.com/content/uploads/images/wilson-sporting-goods5196.jpg",
    websiteUrl: "https://www.wilson.com/",
  },
  {
    id: "2",
    name: "UBC Recreation",
    logo: "https://recreation.ubc.ca/wp-content/uploads/2019/01/UBCRec-stack-blue-1030x405.png",
    websiteUrl: "https://recreation.ubc.ca/",
  },
  {
    id: "3",
    name: "Tennis BC",
    logo: "https://www.tennisbc.org/wp-content/uploads/2021/02/TBC_Primary_RGB-1024x436.jpg",
    websiteUrl: "https://www.tennisbc.org/",
  },
  {
    id: "4",
    name: "Yonex",
    logo: "https://logowik.com/content/uploads/images/yonex4830.jpg",
    websiteUrl: "https://www.yonex.com/",
  },
  {
    id: "5",
    name: "AMS UBC",
    logo: "https://www.ams.ubc.ca/wp-content/uploads/2018/09/ams-full-logo-1030x533.jpg",
    websiteUrl: "https://www.ams.ubc.ca/",
  },
  {
    id: "6",
    name: "Head",
    logo: "https://logowik.com/content/uploads/images/head-sport1174.jpg",
    websiteUrl: "https://www.head.com/",
  },
];

// Mock data for sponsor testimonials
const sponsorTestimonials = [
  {
    name: "John Smith",
    position: "Marketing Director",
    company: "Wilson",
    testimonial: "Working with the UBC Tennis Club has been a fantastic opportunity to connect with young, passionate tennis players. The club's commitment to excellence and community aligns perfectly with our brand values.",
  },
  {
    name: "Emily Chen",
    position: "Community Outreach Manager",
    company: "Tennis BC",
    testimonial: "Our partnership with the UBC Tennis Club has helped us extend our reach to the university community. The club's well-organized events and engaged membership make them an ideal partner.",
  },
];

const SponsorsPage = () => {
  const handleSponsorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your interest in sponsoring the UBC Tennis Club! We'll be in touch soon.");
  };

  return (
    <div>
      <PageHeader 
        title="Our Sponsors" 
        description="We are grateful for the support of our sponsors and partners."
      />
      
      {/* Current Sponsors */}
      <Section
        title="Current Sponsors"
        description="The organizations and businesses that make our club activities possible."
      >
        <SponsorGrid 
          sponsors={sponsors} 
          columns={3}
        />
      </Section>
      
      {/* Sponsor Benefits */}
      <Section
        title="Sponsorship Benefits"
        description="Why partnering with the UBC Tennis Club is a smart investment."
        className="bg-muted/50 py-16 -mx-4 sm:-mx-6 px-4 sm:px-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Brand Visibility</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Logo placement on club jerseys and equipment</li>
                <li>Prominent display on our website and social media</li>
                <li>Recognition in all event promotions</li>
                <li>Banner placement at tournaments and events</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Community Engagement</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Direct access to UBC's active student community</li>
                <li>Opportunities to distribute promotional materials</li>
                <li>Product demonstration at club events</li>
                <li>Networking with club members and alumni</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Corporate Social Responsibility</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>Support student athletic development</li>
                <li>Promote health and wellness in the community</li>
                <li>Contribute to youth sports development</li>
                <li>Association with UBC's prestigious brand</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>
      
      {/* Sponsor Testimonials */}
      <Section
        title="What Our Sponsors Say"
        description="Hear from some of our valued partners."
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {sponsorTestimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16">
                <div className="absolute transform rotate-45 bg-primary text-primary-foreground font-medium py-1 right-[-35px] top-[32px] w-[170px] text-center text-xs">
                  Sponsor
                </div>
              </div>
              <CardContent className="p-6">
                <div className="relative z-10">
                  <p className="text-muted-foreground italic mb-6">"{testimonial.testimonial}"</p>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
      
      {/* Become a Sponsor */}
      <Section
        title="Become a Sponsor"
        description="Interested in supporting the UBC Tennis Club? Fill out the form below to learn more about our sponsorship opportunities."
        className="bg-muted/50 py-16 -mx-4 sm:-mx-6 px-4 sm:px-6"
      >
        <Card>
          <CardContent className="p-6">
            <form onSubmit={handleSponsorSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="companyName">Company Name</Label>
                  <Input id="companyName" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input id="website" type="url" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="contactName">Contact Name</Label>
                  <Input id="contactName" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="position">Position</Label>
                  <Input id="position" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" />
                </div>
                
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="sponsorshipLevel">Interested Sponsorship Level</Label>
                  <select id="sponsorshipLevel" className="w-full p-2 border rounded-md">
                    <option value="">Select a level</option>
                    <option value="platinum">Platinum ($2000+)</option>
                    <option value="gold">Gold ($1000-$1999)</option>
                    <option value="silver">Silver ($500-$999)</option>
                    <option value="bronze">Bronze ($100-$499)</option>
                    <option value="custom">Custom Arrangement</option>
                  </select>
                </div>
                
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="message">Additional Information</Label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full p-2 border rounded-md"
                    placeholder="Tell us about your company and what you're looking for in a sponsorship partnership."
                  ></textarea>
                </div>
              </div>
              
              <Separator />
              
              <div className="flex justify-end">
                <Button type="submit">Submit Inquiry</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </Section>
    </div>
  );
};

export default SponsorsPage;
