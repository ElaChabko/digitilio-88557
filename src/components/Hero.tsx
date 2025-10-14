import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Target } from "lucide-react";
import { CircleDecoration } from "@/components/CircleDecoration";
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'var(--gradient-hero)' }}
    >
      {/* Dekoracyjne fioletowe koła */}
      <CircleDecoration className="top-10 -left-20" size="xl" opacity={0.1} />
      <CircleDecoration className="top-1/4 right-10" size="lg" opacity={0.08} />
      <CircleDecoration className="bottom-20 left-1/4" size="md" opacity={0.09} />
      <CircleDecoration className="bottom-10 -right-10" size="xl" opacity={0.07} />
      
      {/* Floating animated icons with parallax */}
      <motion.div 
        className="absolute top-1/4 left-20 opacity-20"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Sparkles className="w-8 h-8 text-white" />
      </motion.div>
      
      <motion.div 
        className="absolute top-1/3 right-24 opacity-15"
        animate={{ 
          y: [0, 30, 0],
          rotate: [0, -10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 4,
          delay: 0.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Zap className="w-10 h-10 text-accent" />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-1/3 left-1/3 opacity-20"
        animate={{ 
          y: [0, -15, 0],
          x: [0, 10, 0]
        }}
        transition={{ 
          duration: 3.5,
          delay: 1,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Target className="w-7 h-7 text-white" />
      </motion.div>
      
      {/* Gradient overlay orbs with scale animation */}
      <motion.div 
        className="absolute top-20 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 left-1/4 w-80 h-80 bg-primary/30 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.4, 0.3]
        }}
        transition={{ 
          duration: 5,
          delay: 1,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.span 
              className="inline-block"
              whileHover={{ scale: 1.05, color: "hsl(var(--accent))" }}
              transition={{ duration: 0.3 }}
            >
              Strategia.
            </motion.span>{" "}
            <motion.span 
              className="inline-block"
              whileHover={{ scale: 1.05, color: "hsl(var(--accent))" }}
              transition={{ duration: 0.3 }}
            >
              AI.
            </motion.span>{" "}
            <motion.span 
              className="inline-block"
              whileHover={{ scale: 1.05, color: "hsl(var(--accent))" }}
              transition={{ duration: 0.3 }}
            >
              Emocje.
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Tworzę komunikację, która przyciąga uwagę i działa. Łączę analityczne podejście z kreatywnością, by Twoja marka była widoczna, zapamiętana i skuteczna.
          </motion.p>
          
          <motion.div 
            className="flex flex-col gap-3 justify-center items-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="hero"
                size="lg"
                onClick={openContactForm}
                className="group text-lg px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Porozmawiajmy o Twojej marce 
                <motion.div
                  className="inline-block ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight />
                </motion.div>
              </Button>
            </motion.div>
            <p className="text-white/70 text-sm">Bez zobowiązań • 15 min rozmowy</p>
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