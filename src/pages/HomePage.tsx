
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { HeroSlider } from "@/components/hero/HeroSlider";
import { EventCard } from "@/components/events/EventCard";
import { TestimonialCard } from "@/components/testimonials/TestimonialCard";
import { toast } from "sonner";

// Mock data - would be replaced with API calls in a real implementation
const heroSlides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1529926706528-db9e5010cd3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Welcome to UBC Tennis Club",
    subtitle: "Join our community of tennis enthusiasts at the University of British Columbia",
    cta: {
      text: "Join Now",
      link: "/membership",
    },
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1622279457486-53d2f999766c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Upcoming Summer Tournament",
    subtitle: "Register now for our annual summer championship starting July 15th",
    cta: {
      text: "Register",
      link: "/events",
    },
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1626162987518-4fee900a9c7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    title: "Tennis Coaching for All Levels",
    subtitle: "From beginners to advanced players, our experienced coaches are here to help",
    cta: {
      text: "Learn More",
      link: "/coaching",
    },
  },
];

const upcomingEvents = [
  {
    id: "1",
    title: "Summer Tournament",
    date: "July 15, 2023",
    time: "9:00 AM - 5:00 PM",
    location: "UBC Tennis Centre",
    description: "Annual summer championship for all skill levels with prizes for winners.",
    image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    type: "match",
    isOpen: true,
  },
  {
    id: "2",
    title: "Beginner's Workshop",
    date: "June 10, 2023",
    time: "10:00 AM - 12:00 PM",
    location: "UBC Tennis Courts",
    description: "Learn the basics of tennis with our experienced coaches. Equipment provided.",
    image: "https://images.unsplash.com/photo-1551773188-0801da12ddae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    type: "training",
    isOpen: true,
  },
  {
    id: "3",
    title: "End of Term Social",
    date: "August 20, 2023",
    time: "6:00 PM - 9:00 PM",
    location: "UBC Student Union Building",
    description: "Join us for a casual social gathering to celebrate the end of the term.",
    image: "https://images.unsplash.com/photo-1511886929837-354d827aae26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
    type: "social",
    isOpen: true,
  },
];

const testimonials = [
  {
    id: "1",
    content: "Joining the UBC Tennis Club was one of the best decisions I made in my first year. I've improved my skills and made amazing friends through the club events.",
    author: {
      name: "Sarah Chen",
      title: "3rd Year Economics",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1361&q=80",
    },
  },
  {
    id: "2",
    content: "The coaching staff are incredible. I went from being a complete beginner to competing in tournaments within a year thanks to their guidance.",
    author: {
      name: "Michael Wong",
      title: "Grad Student, Engineering",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    },
  },
  {
    id: "3",
    content: "I love the social aspect of the club. The tournaments and social events are really well organized and a great way to meet new people.",
    author: {
      name: "Emma Johnson",
      title: "4th Year Psychology",
      image: "https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=768&q=80",
    },
  },
];

const HomePage = () => {
  const handleEventRegister = () => {
    toast.success("Registration form will open in a separate modal");
  };

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Thank you for subscribing to our newsletter!");
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative -mx-4 sm:-mx-6 -mt-6">
        <HeroSlider slides={heroSlides} />
      </div>

      {/* Mission Statement */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Mission</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The UBC Tennis Club is dedicated to fostering a community of tennis enthusiasts, providing opportunities for players of all levels to improve their skills, compete in tournaments, and build lasting connections through the sport we love.
          </p>
          
          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <Card>
              <CardHeader className="p-4 pb-2">
                <div className="flex justify-center mb-2">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-center">Regular Events</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-2 text-center text-sm text-muted-foreground">
                Weekly practice sessions, monthly tournaments, and social gatherings throughout the year.
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="p-4 pb-2">
                <div className="flex justify-center mb-2">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-center">Inclusive Community</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-2 text-center text-sm text-muted-foreground">
                Players of all skill levels are welcome, from beginners to advanced competitors.
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="p-4 pb-2">
                <div className="flex justify-center mb-2">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-center">Professional Coaching</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-2 text-center text-sm text-muted-foreground">
                Access to certified coaches who provide personalized training and guidance.
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Upcoming Events */}
      <Section
        title="Upcoming Events"
        description="Join us for these exciting events coming up soon."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingEvents.map((event) => (
            <EventCard
              key={event.id}
              {...event}
              onClick={handleEventRegister}
            />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild>
            <Link to="/events" className="flex items-center">
              View All Events
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>

      {/* Testimonials */}
      <Section
        title="What Our Members Say"
        description="Hear from the UBC Tennis Club community."
        className="bg-muted/50 py-16 -mx-4 sm:-mx-6 px-4 sm:px-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </Section>

      {/* Call to Action */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Join?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Become a member of the UBC Tennis Club today and start your tennis journey with us.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/membership">Join Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Newsletter */}
      <Section
        className="bg-primary text-primary-foreground -mx-4 sm:-mx-6 px-4 sm:px-6 py-16"
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">Stay Updated</h2>
          <p className="mt-4">
            Subscribe to our newsletter to get the latest updates on events, tournaments, and club news.
          </p>
          <form onSubmit={handleSubscribe} className="mt-6 sm:flex sm:max-w-md sm:mx-auto">
            <div className="min-w-0 flex-1">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="block w-full rounded-md border-0 px-4 py-2 text-foreground shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white"
                required
              />
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-4 sm:flex-shrink-0">
              <Button type="submit" className="w-full bg-white text-primary hover:bg-gray-100">
                Subscribe
              </Button>
            </div>
          </form>
        </div>
      </Section>
    </div>
  );
};

export default HomePage;
