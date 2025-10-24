import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ContactFormDialog } from "@/components/ContactFormDialog";
import { useState } from "react";
import { motion } from "framer-motion";

export const Hero = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const openContactForm = () => {
    setIsContactFormOpen(true);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Minimal gradient orb */}
      <motion.div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ 
          duration: 8,
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
            >
              Strategia.
            </motion.span>
            <motion.span 
              className="block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              AI.
            </motion.span>
            <motion.span 
              className="block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
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
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                onClick={openContactForm}
                className="text-xl px-10 py-8 h-auto bg-primary text-primary-foreground hover:bg-primary/90 rounded-full"
              >
                Porozmawiajmy o Twojej marce
                <motion.div
                  className="inline-block ml-3"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
              </Button>
            </motion.div>
            <p className="text-muted-foreground text-base">Bez zobowiązań • 15 min rozmowy</p>
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