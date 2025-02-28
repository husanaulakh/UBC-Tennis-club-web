
import { Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface EventProps {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image?: string;
  type: "match" | "training" | "social";
  isOpen?: boolean;
  onClick?: () => void;
}

export function EventCard({
  title,
  date,
  time,
  location,
  description,
  image,
  type,
  isOpen = true,
  onClick,
}: EventProps) {
  // Badge color based on event type
  const getBadgeColor = () => {
    switch (type) {
      case "match":
        return "bg-red-100 text-red-800 hover:bg-red-200";
      case "training":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200";
      case "social":
        return "bg-green-100 text-green-800 hover:bg-green-200";
      default:
        return "";
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      {image && (
        <div className="aspect-video w-full overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="h-full w-full object-cover transition-transform hover:scale-105 duration-300" 
          />
        </div>
      )}
      <CardHeader className="p-4">
        <div className="flex justify-between items-start">
          <Badge className={cn("text-xs font-medium capitalize", getBadgeColor())}>
            {type}
          </Badge>
          {!isOpen && (
            <Badge variant="outline" className="text-xs bg-gray-100 border-gray-200">
              Full
            </Badge>
          )}
        </div>
        <h3 className="text-lg font-semibold mt-2">{title}</h3>
      </CardHeader>
      <CardContent className="p-4 pt-0 space-y-2">
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="mr-2 h-4 w-4" />
          <span>{date}</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Clock className="mr-2 h-4 w-4" />
          <span>{time}</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="mr-2 h-4 w-4" />
          <span>{location}</span>
        </div>
        <p className="text-sm mt-3">{description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={onClick} 
          disabled={!isOpen}
          className="w-full"
        >
          {isOpen ? "Register Now" : "Registration Closed"}
        </Button>
      </CardFooter>
    </Card>
  );
}
