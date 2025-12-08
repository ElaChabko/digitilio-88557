import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ContactFormDialog } from "@/components/ContactFormDialog";
import { useState } from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import heroVisual from "@/assets/hero-visual.jpg";
import heroPortrait from "@/assets/hero-portrait.webp";

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

      {/* Floating particles - optimized for performance */}
      {[...Array(isMobile ? 8 : 30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/60 rounded-full z-[5]"
          style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
          initial={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Animated gradient orbs - GPU accelerated */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full z-[1]"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary) / 0.4) 0%, transparent 70%)",
          filter: isMobile ? "blur(30px)" : "blur(40px)",
          opacity: 0.5,
          willChange: "transform, opacity",
          transform: "translateZ(0)"
        }}
        animate={isMobile ? {} : {
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full z-[1]"
        style={{
          background: "radial-gradient(circle, hsl(var(--accent) / 0.4) 0%, transparent 70%)",
          filter: isMobile ? "blur(30px)" : "blur(40px)",
          opacity: 0.45,
          willChange: "transform, opacity",
          transform: "translateZ(0)"
        }}
        animate={isMobile ? {} : {
          scale: [1, 1.3, 1],
          opacity: [0.45, 0.65, 0.45],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
          delay: 1
        }}
      />

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

<div className="container mx-auto px-4 sm:px-6 pt-32 pb-20 sm:py-24 md:py-24 lg:py-32 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-14 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div 
            className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12"
            style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tight leading-[1.1]">
              <motion.span 
                className="block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Strategia.
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                AI.
              </motion.span>
              <motion.span 
                className="block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Emocje.
              </motion.span>
            </h1>
            
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl font-light leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Tworzę komunikację, która przyciąga uwagę i działa. Łączę analityczne podejście z kreatywnością, by Twoja marka była widoczna, zapamiętana i skuteczna.
            </motion.p>
            
            <motion.div 
              className="flex flex-col gap-4 items-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
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
            </motion.div>
          </motion.div>

          {/* Portrait Image */}
          <motion.div 
            className="relative group mt-10 sm:mt-12 lg:mt-0"
            style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden max-w-md md:max-w-lg lg:max-w-none mx-auto lg:mx-0">
              {/* Glowing border effect */}
              <motion.div 
                className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-br from-primary/30 via-accent/20 to-secondary/30 blur-xl opacity-50"
                whileHover={isMobile ? {} : { opacity: 0.8 }}
                transition={{ duration: 0.5 }}
              />
              
              {/* Image container */}
              <motion.div 
                className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl"
                whileHover={isMobile ? {} : { scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                <img 
                  src={heroPortrait} 
                  alt="Ela Chabko - Digitilio" 
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
                
                {/* Gradient overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-primary/15 via-transparent to-accent/5 opacity-0"
                  whileHover={isMobile ? {} : { opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <ContactFormDialog 
        isOpen={isContactFormOpen} 
        onClose={() => setIsContactFormOpen(false)} 
      />
    </section>
  );
};
