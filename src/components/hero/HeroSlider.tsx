
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle?: string;
  cta?: {
    text: string;
    link: string;
  };
}

interface HeroSliderProps {
  slides: Slide[];
  autoPlayInterval?: number;
  className?: string;
}

export function HeroSlider({ slides, autoPlayInterval = 5000, className }: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

  const goToSlide = (index: number) => {
    let newIndex = index;
    if (newIndex < 0) {
      newIndex = slides.length - 1;
    } else if (newIndex >= slides.length) {
      newIndex = 0;
    }
    setCurrentIndex(newIndex);
  };

  const goToPrevious = () => {
    goToSlide(currentIndex - 1);
  };

  const goToNext = () => {
    goToSlide(currentIndex + 1);
  };

  // Preload all images
  useEffect(() => {
    // Create an array to hold all promises
    const imagePromises = slides.map(slide => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = slide.image;
        img.onload = () => {
          setLoadedImages(prev => ({ ...prev, [slide.id]: true }));
          resolve(true);
        };
        img.onerror = () => {
          // Even if there's an error, we consider it "loaded"
          setLoadedImages(prev => ({ ...prev, [slide.id]: true }));
          resolve(false);
        };
      });
    });

    // Hide loading indicator after a reasonable timeout even if images fail
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    // Wait for all images to load
    Promise.all(imagePromises).then(() => {
      clearTimeout(loadingTimeout);
      setIsLoading(false);
    });

    return () => clearTimeout(loadingTimeout);
  }, [slides]);

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [currentIndex, autoPlayInterval]);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Loading indicator */}
      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-background/80 backdrop-blur-sm">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
        </div>
      )}

      {/* Slides container */}
      <div className="relative h-[400px] sm:h-[500px] md:h-[600px] w-full overflow-hidden">
        {slides.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={slide.id}
              className={cn(
                "absolute inset-0 transition-all duration-700 ease-in-out",
                isActive ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
              )}
              aria-hidden={!isActive}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="h-full w-full object-cover"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30"></div>
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                <div 
                  className={cn(
                    "max-w-3xl text-white transition-all duration-700 delay-300",
                    isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  )}
                >
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                    {slide.title}
                  </h2>
                  {slide.subtitle && (
                    <p className="text-lg sm:text-xl md:text-2xl mb-6 max-w-xl mx-auto">
                      {slide.subtitle}
                    </p>
                  )}
                  {slide.cta && (
                    <Button asChild size="lg" className="mt-4">
                      <a href={slide.cta.link}>{slide.cta.text}</a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation buttons */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/30 text-white hover:bg-black/50"
        onClick={goToPrevious}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/30 text-white hover:bg-black/50"
        onClick={goToNext}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={cn(
              "h-2 w-2 rounded-full transition-all",
              index === currentIndex ? "bg-white w-6" : "bg-white/50 hover:bg-white/80"
            )}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
