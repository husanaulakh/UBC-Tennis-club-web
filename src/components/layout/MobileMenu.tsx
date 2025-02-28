
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { 
  Calendar, Home, Info, Users, BookOpen, 
  Image, Award, Mail, DollarSign, X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Info },
  { name: "Membership", href: "/membership", icon: Users },
  { name: "Events", href: "/events", icon: Calendar },
  { name: "Coaching", href: "/coaching", icon: Users },
  { name: "Gallery", href: "/gallery", icon: Image },
  { name: "Resources", href: "/resources", icon: BookOpen },
  { name: "Sponsors", href: "/sponsors", icon: Award },
  { name: "Contact", href: "/contact", icon: Mail },
];

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const location = useLocation();
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm md:hidden animate-fade-in">
      <div className="fixed top-0 right-0 p-4">
        <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close menu">
          <X className="h-5 w-5" />
        </Button>
      </div>
      
      <nav className="container flex flex-col items-center justify-center h-full gap-6 p-4">
        {navigation.map((item) => {
          const isActive = 
            (item.href === "/" && location.pathname === "/") || 
            (item.href !== "/" && location.pathname.startsWith(item.href));
          
          return (
            <Link
              key={item.name}
              to={item.href}
              onClick={onClose}
              className={cn(
                "flex items-center gap-2 text-lg font-medium w-full justify-center p-3 rounded-md transition-all",
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-foreground/80 hover:bg-muted"
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          );
        })}
        
        <div className="flex flex-col gap-3 w-full mt-4">
          <Button asChild variant="outline" className="w-full">
            <Link to="/membership">Join Now</Link>
          </Button>
          <Button asChild className="w-full">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default MobileMenu;
