
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}

export function PageHeader({ 
  title, 
  description, 
  className,
  children
}: PageHeaderProps) {
  return (
    <div className={cn("mb-10", className)}>
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-3">
        {title}
      </h1>
      {description && (
        <p className="text-xl text-muted-foreground max-w-3xl">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
