
import { useState } from "react";
import { Calendar as CalendarIcon, Filter } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { EventCard } from "@/components/events/EventCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { toast } from "sonner";

// Mock data for events
const events = [
  {
    id: "1",
    title: "Summer Tournament",
    date: "July 15, 2023",
    time: "9:00 AM - 5:00 PM",
    location: "UBC Tennis Centre",
    description: "Annual summer championship for all skill levels with prizes for winners.",
    image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    type: "match" as const,
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
    type: "training" as const,
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
    type: "social" as const,
    isOpen: true,
  },
  {
    id: "4",
    title: "Intermediate Coaching",
    date: "June 15, 2023",
    time: "2:00 PM - 4:00 PM",
    location: "UBC Tennis Centre",
    description: "Coaching session for intermediate players focusing on technique and strategy.",
    image: "https://images.unsplash.com/photo-1545809074-59472b3f5ecc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    type: "training" as const,
    isOpen: true,
  },
  {
    id: "5",
    title: "Club Championship",
    date: "July 1, 2023",
    time: "9:00 AM - 6:00 PM",
    location: "UBC Tennis Centre",
    description: "Annual club championship tournament for all members. Multiple categories available.",
    image: "https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    type: "match" as const,
    isOpen: false,
  },
  {
    id: "6",
    title: "Tennis Movie Night",
    date: "June 25, 2023",
    time: "7:00 PM - 10:00 PM",
    location: "UBC Theatre",
    description: "Join us for a screening of a classic tennis movie followed by discussion and socializing.",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    type: "social" as const,
    isOpen: true,
  },
];

// Mock data for past events results
const pastEvents = [
  {
    id: "p1",
    title: "Spring Tournament 2023",
    date: "April 15, 2023",
    winner: "Michael Chang",
    runnerUp: "Sarah Lee",
    description: "Our annual spring tournament was a great success with over 32 participants.",
    image: "https://images.unsplash.com/photo-1595435934847-5ec0dcdead01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80",
  },
  {
    id: "p2",
    title: "Winter Social 2022",
    date: "December 10, 2022",
    description: "Our winter social event brought together over 50 members for an evening of fun and games.",
    image: "https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1839&q=80",
  },
];

const EventsPage = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [filter, setFilter] = useState<"all" | "match" | "training" | "social">("all");

  const handleEventRegister = () => {
    toast.success("Registration form will open in a separate modal");
  };

  // Filter events based on selected type
  const filteredEvents = filter === "all" 
    ? events 
    : events.filter(event => event.type === filter);

  return (
    <div>
      <PageHeader 
        title="Events" 
        description="Join us for these upcoming events and activities."
      />
      
      {/* Filter and Calendar */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div className="flex items-center space-x-2 mb-4 sm:mb-0">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("all")}
          >
            All
          </Button>
          <Button
            variant={filter === "match" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("match")}
          >
            Matches
          </Button>
          <Button
            variant={filter === "training" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("training")}
          >
            Training
          </Button>
          <Button
            variant={filter === "social" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("social")}
          >
            Social
          </Button>
        </div>
        
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className={cn(
                "justify-start text-left font-normal w-[240px]",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : "Filter by date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="end">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Upcoming Events */}
      <Section
        title="Upcoming Events"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <EventCard
                key={event.id}
                {...event}
                onClick={handleEventRegister}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-8">
              <p className="text-muted-foreground">No events found matching your criteria.</p>
            </div>
          )}
        </div>
      </Section>
      
      {/* Past Events */}
      <Section
        title="Past Events"
        description="Results and recaps from our previous events."
        className="bg-muted/50 py-16 -mx-4 sm:-mx-6 px-4 sm:px-6"
      >
        <div className="space-y-8">
          {pastEvents.map((event) => (
            <div key={event.id} className="flex flex-col md:flex-row gap-6 bg-background rounded-lg overflow-hidden shadow-sm">
              <div className="md:w-1/3 h-48 md:h-auto">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="p-6 md:w-2/3">
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{event.date}</p>
                
                {event.winner && (
                  <div className="mb-4">
                    <p className="font-medium">Results:</p>
                    <p className="text-sm">Winner: {event.winner}</p>
                    <p className="text-sm">Runner-up: {event.runnerUp}</p>
                  </div>
                )}
                
                <p className="text-muted-foreground">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default EventsPage;
