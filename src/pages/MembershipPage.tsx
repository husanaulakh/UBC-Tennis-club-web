
import { useState } from "react";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { MembershipCard } from "@/components/membership/MembershipCard";
import { TestimonialCard } from "@/components/testimonials/TestimonialCard";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

// Mock data for membership plans
const membershipPlans = [
  {
    id: "1",
    name: "Student Membership",
    price: "$50",
    description: "Perfect for UBC students looking to join the tennis community.",
    features: [
      "Access to all club events and socials",
      "Discounted coaching sessions",
      "Participation in intramural competitions",
      "Free equipment rental",
      "Access to members-only resources",
    ],
    popular: true,
  },
  {
    id: "2",
    name: "Faculty & Staff",
    price: "$80",
    description: "Designed for UBC faculty and staff members.",
    features: [
      "Access to all club events and socials",
      "Discounted coaching sessions",
      "Participation in competitions",
      "Free equipment rental",
      "Access to members-only resources",
      "Priority court booking",
    ],
  },
  {
    id: "3",
    name: "Alumni & Community",
    price: "$100",
    description: "For UBC alumni and community members.",
    features: [
      "Access to select club events and socials",
      "Discounted coaching sessions",
      "Participation in open competitions",
      "Equipment rental at reduced rates",
      "Access to members-only resources",
    ],
  },
];

// Mock data for testimonials
const testimonials = [
  {
    id: "1",
    content: "I joined the UBC Tennis Club in my first year, and it completely transformed my university experience. I've made lifelong friends and improved my game tremendously.",
    author: {
      name: "Jason Kwok",
      title: "Member since 2019",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    },
  },
  {
    id: "2",
    content: "The coaching sessions are excellent value for money. I went from barely being able to hit the ball to competing in tournaments within a year.",
    author: {
      name: "Leila Patel",
      title: "Member since 2020",
      image: "https://images.unsplash.com/photo-1554727242-741c14fa561c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    },
  },
];

const MembershipPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    studentId: "",
    membershipType: "student",
    skillLevel: "beginner",
    hearAboutUs: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success("Membership application submitted successfully! We'll be in touch soon.");
    // Reset form after submission
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      studentId: "",
      membershipType: "student",
      skillLevel: "beginner",
      hearAboutUs: "",
    });
  };

  const handleMembershipClick = (plan: string) => {
    toast.info(`You've selected the ${plan} plan. Please fill out the registration form below.`);
    // Scroll to registration form
    document.getElementById("registration-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <PageHeader 
        title="Membership" 
        description="Join the UBC Tennis Club and become part of our community."
      />
      
      {/* Membership Plans */}
      <Section
        title="Membership Plans"
        description="Choose the membership that's right for you."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {membershipPlans.map((plan) => (
            <MembershipCard 
              key={plan.id} 
              {...plan} 
              onClick={() => handleMembershipClick(plan.name)}
            />
          ))}
        </div>
      </Section>
      
      {/* Registration Form */}
      <Section
        id="registration-form"
        title="Membership Registration"
        description="Fill out the form below to join the UBC Tennis Club."
        className="bg-muted/50 py-16 -mx-4 sm:-mx-6 px-4 sm:px-6"
      >
        <Card>
          <CardContent className="p-6">
            <Tabs defaultValue="new" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="new">New Member</TabsTrigger>
                <TabsTrigger value="renewal">Membership Renewal</TabsTrigger>
              </TabsList>
              
              <TabsContent value="new">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input 
                        id="firstName" 
                        name="firstName" 
                        value={formData.firstName} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input 
                        id="lastName" 
                        name="lastName" 
                        value={formData.lastName} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="studentId">UBC Student ID (if applicable)</Label>
                      <Input 
                        id="studentId" 
                        name="studentId" 
                        value={formData.studentId} 
                        onChange={handleChange} 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="membershipType">Membership Type</Label>
                      <select 
                        id="membershipType" 
                        name="membershipType" 
                        value={formData.membershipType} 
                        onChange={handleChange} 
                        className="w-full p-2 border rounded-md"
                        required
                      >
                        <option value="student">Student ($50/year)</option>
                        <option value="faculty">Faculty & Staff ($80/year)</option>
                        <option value="alumni">Alumni & Community ($100/year)</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="skillLevel">Tennis Skill Level</Label>
                      <select 
                        id="skillLevel" 
                        name="skillLevel" 
                        value={formData.skillLevel} 
                        onChange={handleChange} 
                        className="w-full p-2 border rounded-md"
                        required
                      >
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="hearAboutUs">How did you hear about us?</Label>
                      <Input 
                        id="hearAboutUs" 
                        name="hearAboutUs" 
                        value={formData.hearAboutUs} 
                        onChange={handleChange} 
                      />
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-end">
                    <Button type="submit">Submit Application</Button>
                  </div>
                </form>
              </TabsContent>
              
              <TabsContent value="renewal">
                <div className="text-center py-8">
                  <h3 className="text-lg font-medium mb-4">Existing Member?</h3>
                  <p className="text-muted-foreground mb-6">
                    Please log in to your account to renew your membership. If you've forgotten your login details, contact us for assistance.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="outline">Log In</Button>
                    <Button variant="default">Contact Support</Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </Section>
      
      {/* Testimonials */}
      <Section
        title="What Our Members Say"
        description="Hear from current members of the UBC Tennis Club."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default MembershipPage;
