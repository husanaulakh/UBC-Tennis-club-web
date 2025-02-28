
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export interface CoachProps {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  specialties?: string[];
  onClick?: () => void;
}

export function CoachCard({
  name,
  title,
  bio,
  image,
  specialties = [],
  onClick
}: CoachProps) {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
      <div className="aspect-square w-full overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <CardHeader className="p-4">
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <CardDescription>{title}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0 flex-grow">
        <p className="text-sm text-muted-foreground">{bio}</p>
        
        {specialties.length > 0 && (
          <div className="mt-4">
            <h4 className="text-sm font-medium mb-2">Specialties</h4>
            <div className="flex flex-wrap gap-1">
              {specialties.map((specialty, index) => (
                <span
                  key={index}
                  className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button onClick={onClick} variant="outline" className="w-full">
          Book a Session
        </Button>
      </CardFooter>
    </Card>
  );
}
