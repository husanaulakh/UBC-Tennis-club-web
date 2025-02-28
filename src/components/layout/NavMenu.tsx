
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Membership", href: "/membership" },
  { name: "Events", href: "/events" },
  { name: "Coaching", href: "/coaching" },
  { name: "Gallery", href: "/gallery" },
  { name: "Resources", href: "/resources" },
  { name: "Sponsors", href: "/sponsors" },
  { name: "Contact", href: "/contact" },
];

const NavMenu = () => {
  const location = useLocation();
  
  return (
    <nav className="flex items-center gap-1">
      {navigation.map((item) => {
        const isActive = 
          (item.href === "/" && location.pathname === "/") || 
          (item.href !== "/" && location.pathname.startsWith(item.href));
          
        return (
          <Link
            key={item.name}
            to={item.href}
            className={cn(
              "relative px-3 py-2 text-sm font-medium transition-colors hover:text-foreground/80",
              isActive
                ? "text-foreground after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-primary"
                : "text-foreground/60"
            )}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavMenu;
