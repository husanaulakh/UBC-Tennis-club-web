
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import SearchBar from "./SearchBar";
import NavMenu from "./NavMenu";

interface HeaderProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

const Header = ({ isMobileMenuOpen, setIsMobileMenuOpen }: HeaderProps) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-2">
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-full bg-tennis-blue">
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
                T
              </div>
            </div>
            <span className="font-bold text-lg hidden sm:inline-block">UBC Tennis Club</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <NavMenu />
        </div>

        {/* Search and Actions */}
        <div className="flex items-center gap-1">
          {isSearchOpen ? (
            <div className="absolute inset-0 z-50 flex items-center justify-center bg-background px-4 md:relative md:inset-auto">
              <SearchBar onClose={() => setIsSearchOpen(false)} />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-4 md:relative md:right-auto md:top-auto"
                onClick={() => setIsSearchOpen(false)}
                aria-label="Close search"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Open search"
            >
              <Search className="h-5 w-5" />
            </Button>
          )}

          <div className="hidden sm:flex items-center gap-2">
            <Button asChild variant="outline" className="hidden sm:flex">
              <Link to="/membership">Join Now</Link>
            </Button>
            <Button asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
