
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface TestimonialProps {
  id: string;
  content: string;
  author: {
    name: string;
    title?: string;
    image?: string;
  };
  className?: string;
}

export function TestimonialCard({
  content,
  author,
  className,
}: TestimonialProps) {
  return (
    <Card className={cn("h-full flex flex-col", className)}>
      <CardContent className="p-6 flex flex-col flex-grow">
        <div className="mb-4 flex-grow">
          <p className="text-muted-foreground italic">"{content}"</p>
        </div>
        
        <div className="flex items-center">
          {author.image ? (
            <div className="mr-4 h-10 w-10 overflow-hidden rounded-full bg-muted">
              <img
                src={author.image}
                alt={author.name}
                className="h-full w-full object-cover"
              />
            </div>
          ) : (
            <div className="mr-4 h-10 w-10 flex items-center justify-center rounded-full bg-primary">
              <span className="text-primary-foreground font-semibold">
                {author.name.charAt(0)}
              </span>
            </div>
          )}
          
          <div>
            <p className="font-medium">{author.name}</p>
            {author.title && (
              <p className="text-sm text-muted-foreground">{author.title}</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
