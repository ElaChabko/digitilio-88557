import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ContactFormDialog } from "@/components/ContactFormDialog";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import heroVisual from "@/assets/hero-visual.jpg";
import heroPortrait from "@/assets/hero-portrait.png";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return isMobile;
};

export const Hero = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const isMobile = useIsMobile();

  const openContactForm = () => {
    setIsContactFormOpen(true);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-secondary/10 to-background"
    >
      {/* Hero background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroVisual} 
          alt="" 
          className="w-full h-full object-cover"
          loading="lazy"
          style={{ opacity: 0.35 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
      </div>
      
      {/* Modern mesh gradient background - static on mobile */}
      <div 
        className="absolute inset-0 z-[1]"
        style={{
          background: "radial-gradient(at 40% 20%, hsl(var(--primary) / 0.5) 0px, transparent 50%), radial-gradient(at 80% 0%, hsl(var(--accent) / 0.45) 0px, transparent 50%), radial-gradient(at 0% 50%, hsl(var(--secondary) / 0.4) 0px, transparent 50%), radial-gradient(at 80% 50%, hsl(var(--primary) / 0.4) 0px, transparent 50%), radial-gradient(at 0% 100%, hsl(var(--accent) / 0.45) 0px, transparent 50%), radial-gradient(at 80% 100%, hsl(var(--primary) / 0.5) 0px, transparent 50%), radial-gradient(at 0% 0%, hsl(var(--accent) / 0.4) 0px, transparent 50%)",
          opacity: 0.8
        }}
      />

      {/* Floating particles - only 8 on mobile */}
      {!isMobile && [...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-primary/40 rounded-full z-[2]"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Simplified gradient orbs - static on mobile */}
      {!isMobile ? (
        <>
          <div 
            className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full z-[1]"
            style={{
              background: "radial-gradient(circle, hsl(var(--primary) / 0.4) 0%, transparent 70%)",
              filter: "blur(40px)",
              opacity: 0.5
            }}
          />
          
          <div 
            className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full z-[1]"
            style={{
              background: "radial-gradient(circle, hsl(var(--accent) / 0.4) 0%, transparent 70%)",
              filter: "blur(40px)",
              opacity: 0.45
            }}
          />
        </>
      ) : (
        <div 
          className="absolute inset-0 z-[1]"
          style={{
            background: "radial-gradient(circle at 30% 30%, hsl(var(--primary) / 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 70%, hsl(var(--accent) / 0.3) 0%, transparent 50%)",
            filter: "blur(30px)",
            opacity: 0.4
          }}
        />
      )}

      {/* Simple grid - no animation on mobile */}
      <div 
        className="absolute inset-0 z-[3] hidden md:block"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--primary) / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary) / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 75%)',
          opacity: 0.7
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-24 lg:py-32 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-14 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
            <h1 className="text-[2.5rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground tracking-tight animate-fade-in">
              <span className="block">Strategia.</span>
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">AI.</span>
              <span className="block">Emocje.</span>
            </h1>
            
            <p className="text-base leading-relaxed sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl font-light">
              Tworzę komunikację, która przyciąga uwagę i działa. Łączę analityczne podejście z kreatywnością, by Twoja marka była widoczna, zapamiętana i skuteczna.
            </p>
            
            <div className="flex flex-col gap-4 items-start">
              <Button
                size="lg"
                onClick={openContactForm}
                className="text-sm sm:text-base md:text-lg px-6 py-5 sm:px-7 sm:py-6 md:px-9 md:py-7 h-auto bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Porozmawiajmy o Twojej marce
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-muted-foreground text-sm sm:text-base">
                Bez zobowiązań • 15 min rozmowy
              </p>
            </div>
          </div>

          {/* Portrait Image */}
          <div className="relative group mt-10 sm:mt-12 lg:mt-0">
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden max-w-md md:max-w-lg lg:max-w-none mx-auto lg:mx-0 hover-scale">
              {/* Glowing border effect - static on mobile */}
              <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-br from-primary/30 via-accent/20 to-secondary/30 blur-xl opacity-50 md:group-hover:opacity-80 transition-opacity duration-500" />
              
              {/* Image container */}
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:group-hover:shadow-2xl transition-shadow duration-500">
                <img 
                  src={heroPortrait} 
                  alt="Ela Chabko - Digitilio" 
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/15 via-transparent to-accent/5 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactFormDialog 
        isOpen={isContactFormOpen} 
        onClose={() => setIsContactFormOpen(false)} 
      />
    </section>
  );
};