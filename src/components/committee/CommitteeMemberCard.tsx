
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface CommitteeMemberProps {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
  email?: string;
  linkedin?: string;
}

export function CommitteeMemberCard({
  name,
  position,
  bio,
  image,
  email,
  linkedin,
}: CommitteeMemberProps) {
  return (
    <Card className="overflow-hidden h-full hover:shadow-md transition-shadow">
      <div className="aspect-square w-full overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover"
        />
      </div>
      <CardHeader className="p-4">
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <CardDescription>{position}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0 space-y-4">
        <p className="text-sm text-muted-foreground">{bio}</p>
        
        <div className="flex gap-2">
          {email && (
            <Button variant="outline" size="icon" asChild>
              <a href={`mailto:${email}`} aria-label={`Email ${name}`}>
                <Mail className="h-4 w-4" />
              </a>
            </Button>
          )}
          {linkedin && (
            <Button variant="outline" size="icon" asChild>
              <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${name}'s LinkedIn profile`}>
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
