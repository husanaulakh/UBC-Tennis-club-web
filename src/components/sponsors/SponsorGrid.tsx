
import { cn } from "@/lib/utils";

export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  websiteUrl: string;
}

interface SponsorGridProps {
  sponsors: Sponsor[];
  columns?: number;
  className?: string;
}

export function SponsorGrid({ 
  sponsors, 
  columns = 3,
  className 
}: SponsorGridProps) {
  // Calculate column class based on columns prop
  const getColumnClass = () => {
    switch (columns) {
      case 1:
        return "grid-cols-1";
      case 2:
        return "grid-cols-1 sm:grid-cols-2";
      case 3:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
      case 4:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
      default:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
    }
  };

  return (
    <div className={cn(`grid ${getColumnClass()} gap-6`, className)}>
      {sponsors.map((sponsor) => (
        <a
          key={sponsor.id}
          href={sponsor.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
          <div className="h-full border rounded-lg p-6 flex flex-col items-center justify-center hover:shadow-md transition-shadow">
            <div className="w-full h-24 flex items-center justify-center p-4">
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-h-full max-w-full object-contain transition-transform group-hover:scale-105"
              />
            </div>
            <div className="mt-4 text-center">
              <p className="font-medium">{sponsor.name}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
