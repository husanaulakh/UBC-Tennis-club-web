
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export interface MembershipProps {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  onClick?: () => void;
}

export function MembershipCard({
  name,
  price,
  description,
  features,
  popular = false,
  onClick
}: MembershipProps) {
  return (
    <Card className={`flex flex-col h-full relative overflow-hidden ${popular ? 'border-primary shadow-md' : ''}`}>
      {popular && (
        <div className="absolute top-0 right-0">
          <div className="bg-primary text-primary-foreground px-3 py-1 text-xs font-semibold">
            Popular
          </div>
        </div>
      )}
      
      <CardHeader className="p-6">
        <CardTitle className="text-2xl">{name}</CardTitle>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardHeader>
      
      <CardContent className="p-6 pt-0 flex-grow">
        <div className="mb-6">
          <span className="text-3xl font-bold">{price}</span>
          {price !== "Contact Us" && <span className="text-muted-foreground"> / year</span>}
        </div>
        
        <ul className="space-y-2">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <div className="mr-2 mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary/10">
                <Check className="h-3 w-3 text-primary" />
              </div>
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <Button 
          onClick={onClick} 
          className="w-full" 
          variant={popular ? "default" : "outline"}
        >
          Sign Up Now
        </Button>
      </CardFooter>
    </Card>
  );
}
