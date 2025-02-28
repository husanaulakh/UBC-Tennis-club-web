
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-tennis-gray-dark text-white">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="relative h-8 w-8 overflow-hidden rounded-full bg-tennis-blue">
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
                  T
                </div>
              </div>
              <span className="font-bold text-lg">UBC Tennis Club</span>
            </div>
            
            <p className="mt-4 text-sm text-gray-300 max-w-xs">
              Bringing tennis enthusiasts together at the University of British Columbia since 1953.
            </p>
            
            <div className="flex mt-6 space-x-4">
              <a href="#" className="text-gray-300 hover:text-tennis-blue transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-tennis-blue transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-tennis-blue transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-tennis-blue transition-colors" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-2">
            <div>
              <h3 className="text-sm font-semibold tracking-wider uppercase">
                Navigation
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link to="/" className="text-sm text-gray-300 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-sm text-gray-300 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/membership" className="text-sm text-gray-300 hover:text-white transition-colors">
                    Membership
                  </Link>
                </li>
                <li>
                  <Link to="/events" className="text-sm text-gray-300 hover:text-white transition-colors">
                    Events
                  </Link>
                </li>
                <li>
                  <Link to="/coaching" className="text-sm text-gray-300 hover:text-white transition-colors">
                    Coaching
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold tracking-wider uppercase">
                Resources
              </h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <Link to="/gallery" className="text-sm text-gray-300 hover:text-white transition-colors">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/resources" className="text-sm text-gray-300 hover:text-white transition-colors">
                    Resources
                  </Link>
                </li>
                <li>
                  <Link to="/sponsors" className="text-sm text-gray-300 hover:text-white transition-colors">
                    Sponsors
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-sm text-gray-300 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="sm:col-span-2 md:col-span-1">
              <h3 className="text-sm font-semibold tracking-wider uppercase">
                Subscribe to our newsletter
              </h3>
              <p className="mt-4 text-sm text-gray-300">
                Get the latest updates on events and announcements.
              </p>
              <form className="mt-4 sm:flex sm:max-w-md">
                <div className="w-full">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-tennis-gray-dark border-gray-600 text-white"
                  />
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Button type="submit" className="w-full sm:w-auto">
                    Subscribe
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>© {currentYear} UBC Tennis Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
