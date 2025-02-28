
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

const Breadcrumb = () => {
  const location = useLocation();
  
  // Skip breadcrumb on home page
  if (location.pathname === "/") {
    return null;
  }
  
  // Create breadcrumb items from the current path
  const pathSegments = location.pathname.split('/').filter(Boolean);
  
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center space-x-1 text-sm text-muted-foreground">
        <li>
          <Link 
            to="/"
            className="flex items-center hover:text-foreground transition-colors"
            aria-label="Home"
          >
            <Home className="h-4 w-4" />
          </Link>
        </li>
        
        {pathSegments.map((segment, index) => {
          const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
          const isLast = index === pathSegments.length - 1;
          
          return (
            <li key={path} className="flex items-center">
              <ChevronRight className="h-4 w-4 mx-1" />
              {isLast ? (
                <span className="capitalize font-medium">
                  {segment.replace(/-/g, ' ')}
                </span>
              ) : (
                <Link 
                  to={path}
                  className="capitalize hover:text-foreground transition-colors"
                >
                  {segment.replace(/-/g, ' ')}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
