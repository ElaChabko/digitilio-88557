import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ContactFormDialog } from "@/components/ContactFormDialog";
import { useState } from "react";
import { motion } from "framer-motion";
import heroVisual from "@/assets/hero-visual.jpg";

export const Hero = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const openContactForm = () => {
    setIsContactFormOpen(true);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-secondary/10 to-background"
    >
      {/* Hero background image */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.35, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img 
          src={heroVisual} 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
      </motion.div>
      
      {/* Dynamic animated gradient orbs - Multiple layers */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/25 rounded-full blur-3xl z-[1]"
        animate={{ 
          scale: [1, 1.4, 1.1, 1],
          opacity: [0.25, 0.4, 0.3, 0.25],
          x: [0, 60, -30, 0],
          y: [0, 40, -20, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/25 rounded-full blur-3xl z-[1]"
        animate={{ 
          scale: [1, 1.3, 0.9, 1],
          opacity: [0.2, 0.35, 0.25, 0.2],
          x: [0, -50, 40, 0],
          y: [0, -30, 20, 0],
          rotate: [0, -180, -360]
        }}
        transition={{ 
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div 
        className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-3xl z-[1]"
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.15, 0.3, 0.15],
          x: [0, 70, 0],
          y: [0, -50, 0]
        }}
        transition={{ 
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      <motion.div 
        className="absolute bottom-1/3 left-1/3 w-[450px] h-[450px] bg-primary/15 rounded-full blur-3xl z-[1]"
        animate={{ 
          scale: [1, 1.2, 1.4, 1],
          opacity: [0.1, 0.25, 0.15, 0.1],
          x: [0, -60, 30, 0],
          y: [0, 40, -30, 0]
        }}
        transition={{ 
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
      <motion.div 
        className="absolute top-1/3 left-1/2 w-[350px] h-[350px] bg-accent/15 rounded-full blur-3xl z-[1]"
        animate={{ 
          scale: [1, 1.6, 1],
          opacity: [0.1, 0.3, 0.1],
          x: [0, 40, 0],
          y: [0, 60, 0],
          rotate: [0, 90, 0]
        }}
        transition={{ 
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
      />
      
      {/* Animated gradient overlay */}
      <motion.div 
        className="absolute inset-0 z-[2]"
        style={{
          background: "radial-gradient(circle at 50% 50%, transparent 0%, hsl(var(--background)/0.3) 100%)"
        }}
        animate={{
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Subtle animated grid pattern */}
      <motion.div 
        className="absolute inset-0 bg-[linear-gradient(to_right,hsl(270_13%_90%/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(270_13%_90%/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] z-[3]"
        animate={{
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-4 py-32 relative z-10">
        <motion.div 
          className="max-w-7xl mx-auto space-y-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-foreground leading-[0.95] tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span 
              className="block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ x: 10, transition: { duration: 0.3 } }}
            >
              Strategia.
            </motion.span>
            <motion.span 
              className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ x: 10, transition: { duration: 0.3 } }}
            >
              AI.
            </motion.span>
            <motion.span 
              className="block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ x: 10, transition: { duration: 0.3 } }}
            >
              Emocje.
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-2xl md:text-3xl text-muted-foreground max-w-4xl font-light leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Tworzę komunikację, która przyciąga uwagę i działa. Łączę analityczne podejście z kreatywnością, by Twoja marka była widoczna, zapamiętana i skuteczna.
          </motion.p>
          
          <motion.div 
            className="flex flex-col gap-4 items-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                onClick={openContactForm}
                className="text-xl px-10 py-8 h-auto bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-[0_0_40px_hsl(263_33%_35%/0.3)] hover:shadow-[0_0_60px_hsl(263_33%_35%/0.5)] transition-all duration-500"
              >
                Porozmawiajmy o Twojej marce
                <motion.div
                  className="inline-block ml-3"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
              </Button>
            </motion.div>
            <motion.p 
              className="text-muted-foreground text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              Bez zobowiązań • 15 min rozmowy
            </motion.p>
          </motion.div>
        </motion.div>
      </div>

      <ContactFormDialog 
        isOpen={isContactFormOpen} 
        onClose={() => setIsContactFormOpen(false)} 
      />
    </section>
  );
};