
import { useState } from "react";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { CoachCard } from "@/components/coaches/CoachCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

// Mock data for coaches
const coaches = [
  {
    id: "1",
    name: "David Williams",
    title: "Head Coach",
    bio: "David has over 15 years of coaching experience and has worked with players of all levels, from beginners to professionals. He specializes in developing strong technical foundations and mental toughness.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    specialties: ["Technical Development", "Match Strategy", "Mental Toughness"],
  },
  {
    id: "2",
    name: "Emma Chen",
    title: "Youth Development Coach",
    bio: "Emma specializes in working with young players and has a talent for making tennis fun and engaging. She focuses on developing proper technique and fostering a love for the game in her students.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    specialties: ["Youth Development", "Technical Fundamentals", "Fun Drills"],
  },
  {
    id: "3",
    name: "Michael Patel",
    title: "Performance Coach",
    bio: "Michael works with competitive players looking to take their game to the next level. His coaching focuses on advanced techniques, strategic thinking, and physical conditioning.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    specialties: ["Advanced Techniques", "Tournament Preparation", "Physical Conditioning"],
  },
  {
    id: "4",
    name: "Sophia Rodriguez",
    title: "Adult Development Coach",
    bio: "Sophia specializes in working with adult beginners and intermediates. She is patient, supportive, and skilled at breaking down complex techniques into manageable steps.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
    specialties: ["Adult Beginners", "Doubles Strategy", "Technique Correction"],
  },
];

// Mock data for coaching programs
const coachingPrograms = [
  {
    id: "1",
    title: "Beginner Group Lessons",
    description: "Introduction to tennis fundamentals in a supportive group environment.",
    details: "Our beginner group lessons are perfect for those new to the sport. Covering basic strokes, court positioning, and rules of the game, these sessions provide a solid foundation for your tennis journey.",
    schedule: "Tuesdays & Thursdays, 6:00 PM - 7:30 PM",
    price: "$120 for 6 sessions",
    image: "https://images.unsplash.com/photo-1551773188-0801da12ddae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    id: "2",
    title: "Intermediate Group Lessons",
    description: "Refine your skills and develop more advanced techniques and strategies.",
    details: "For players who have mastered the basics, our intermediate lessons focus on improving consistency, developing spin, and introducing more advanced tactical concepts.",
    schedule: "Mondays & Wednesdays, 7:00 PM - 8:30 PM",
    price: "$150 for 6 sessions",
    image: "https://images.unsplash.com/photo-1545809074-59472b3f5ecc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  },
  {
    id: "3",
    title: "Private Coaching",
    description: "One-on-one coaching tailored to your specific needs and goals.",
    details: "Our private coaching sessions offer personalized attention and feedback, allowing for rapid improvement. Ideal for players of all levels who want focused development on specific aspects of their game.",
    schedule: "Flexible scheduling, 1-hour sessions",
    price: "$60 per hour (members), $75 per hour (non-members)",
    image: "https://images.unsplash.com/photo-1599171248364-652d6e4937f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  },
  {
    id: "4",
    title: "Junior Development Program",
    description: "Comprehensive training for young players (ages 8-16).",
    details: "Our junior program combines technical training, physical development, and fun activities to nurture young tennis talents. Players are grouped by age and ability level to ensure appropriate progression.",
    schedule: "Saturdays, 10:00 AM - 12:00 PM",
    price: "$180 for 8 sessions",
    image: "https://images.unsplash.com/photo-1573497620429-29206ba99087?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  },
];

const CoachingPage = () => {
  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    phone: "",
    coach: "",
    sessionType: "",
    date: "",
    time: "",
    notes: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBookingForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking form submitted:", bookingForm);
    toast.success("Your coaching session has been booked! We'll confirm the details via email.");
    // Reset form
    setBookingForm({
      name: "",
      email: "",
      phone: "",
      coach: "",
      sessionType: "",
      date: "",
      time: "",
      notes: "",
    });
  };

  const handleCoachClick = () => {
    toast.info("You can book a session with this coach using the booking form below.");
    // Scroll to booking form
    document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <PageHeader 
        title="Tennis Coaching" 
        description="Improve your skills with our experienced coaches and comprehensive training programs."
      />
      
      {/* Coaching Programs */}
      <Section
        title="Our Coaching Programs"
        description="We offer a range of coaching options for players of all ages and abilities."
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {coachingPrograms.map((program) => (
            <Card key={program.id} className="overflow-hidden">
              <div className="aspect-[2/1] w-full overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{program.title}</CardTitle>
                <CardDescription>{program.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>{program.details}</p>
                <div className="space-y-1">
                  <p className="font-medium">Schedule:</p>
                  <p className="text-sm text-muted-foreground">{program.schedule}</p>
                </div>
                <div className="space-y-1">
                  <p className="font-medium">Price:</p>
                  <p className="text-sm text-muted-foreground">{program.price}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
      
      {/* Our Coaches */}
      <Section
        title="Meet Our Coaches"
        description="Our team of certified and experienced tennis professionals."
        className="bg-muted/50 py-16 -mx-4 sm:-mx-6 px-4 sm:px-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coaches.map((coach) => (
            <CoachCard
              key={coach.id}
              {...coach}
              onClick={handleCoachClick}
            />
          ))}
        </div>
      </Section>
      
      {/* Booking Form */}
      <Section
        id="booking-form"
        title="Book a Coaching Session"
        description="Fill out the form below to book a coaching session with one of our pros."
      >
        <Card>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={bookingForm.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={bookingForm.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={bookingForm.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="coach">Preferred Coach</Label>
                  <select
                    id="coach"
                    name="coach"
                    value={bookingForm.coach}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md"
                    required
                  >
                    <option value="">Select a coach</option>
                    {coaches.map((coach) => (
                      <option key={coach.id} value={coach.name}>
                        {coach.name}
                      </option>
                    ))}
                    <option value="any">Any Available Coach</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="sessionType">Session Type</Label>
                  <select
                    id="sessionType"
                    name="sessionType"
                    value={bookingForm.sessionType}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded-md"
                    required
                  >
                    <option value="">Select session type</option>
                    <option value="private">Private Lesson</option>
                    <option value="beginner">Beginner Group Lesson</option>
                    <option value="intermediate">Intermediate Group Lesson</option>
                    <option value="junior">Junior Development</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="date">Preferred Date</Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={bookingForm.date}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="time">Preferred Time</Label>
                  <Input
                    id="time"
                    name="time"
                    type="time"
                    value={bookingForm.time}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="notes">Additional Notes</Label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    className="w-full p-2 border rounded-md"
                    value={bookingForm.notes}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
              </div>
              
              <Separator />
              
              <div className="flex justify-end">
                <Button type="submit">Book Session</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </Section>
    </div>
  );
};

export default CoachingPage;
