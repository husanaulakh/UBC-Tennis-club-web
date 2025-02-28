
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
}

export function Section({
  id,
  title,
  description,
  children,
  className,
  titleClassName,
}: SectionProps) {
  return (
    <section id={id} className={cn("py-12", className)}>
      {(title || description) && (
        <div className="mb-8">
          {title && (
            <h2 className={cn("text-2xl sm:text-3xl font-bold tracking-tight", titleClassName)}>
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-2 text-lg text-muted-foreground">
              {description}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
