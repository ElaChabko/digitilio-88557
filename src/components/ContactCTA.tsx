import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { ContactFormDialog } from "@/components/ContactFormDialog";
import { useState } from "react";
import { motion } from "framer-motion";
import contactBottomImage from "@/assets/contact-bottom-image.webp";

export const ContactCTA = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const openContactForm = () => {
    setIsContactFormOpen(true);
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent/10 to-background">
      {/* Animated gradient orbs */}
      <motion.div 
        className="absolute top-20 left-20 w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ 
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-accent/25 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.25, 1],
          opacity: [0.2, 0.35, 0.2]
        }}
        transition={{ 
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl flex flex-col lg:flex-row items-start lg:items-center gap-8 md:gap-10 lg:gap-16">
          <div className="flex-1">
            <motion.h2 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 md:mb-10 lg:mb-12 leading-tight tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              Gotowy na markę,<br />o której się mówi?
            </motion.h2>
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 md:mb-12 lg:mb-16 font-light leading-relaxed max-w-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              Umów krótką rozmowę i zobacz, jak połączenie strategii i AI może odmienić Twoją komunikację.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  onClick={openContactForm}
                  size="lg"
                  className="text-base md:text-lg lg:text-xl px-6 py-6 md:px-8 md:py-7 lg:px-10 lg:py-8 h-auto bg-primary text-primary-foreground hover:bg-primary/90 rounded-full group shadow-[0_0_40px_hsl(263_33%_35%/0.3)] hover:shadow-[0_0_60px_hsl(263_33%_35%/0.5)] transition-all duration-500"
                >
                  <Mail className="mr-3 w-6 h-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                  Zacznijmy współpracę
                </Button>
              </motion.div>
              <motion.p 
                className="text-muted-foreground text-base mt-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                Bez zobowiązań • Pierwsza konsultacja
              </motion.p>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div 
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <img 
              src={contactBottomImage} 
              alt="Contact visual" 
              className="w-full max-w-sm aspect-square object-cover rounded-2xl shadow-2xl"
            />
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
