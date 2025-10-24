import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { ContactFormDialog } from "@/components/ContactFormDialog";
import { useState } from "react";
import { motion } from "framer-motion";

export const ContactCTA = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const openContactForm = () => {
    setIsContactFormOpen(true);
  };

  return (
    <section className="py-32 relative overflow-hidden bg-card">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl">
          <motion.h2 
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-12 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Gotowy na markę,<br />o której się mówi?
          </motion.h2>
          <motion.p 
            className="text-2xl md:text-3xl text-muted-foreground mb-16 font-light leading-relaxed max-w-4xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Umów krótką rozmowę i zobacz, jak połączenie strategii i AI może odmienić Twoją komunikację.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button
              onClick={openContactForm}
              size="lg"
              className="text-xl px-10 py-8 h-auto bg-primary text-primary-foreground hover:bg-primary/90 rounded-full group"
            >
              <Mail className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              Zacznijmy współpracę
            </Button>
            <p className="text-muted-foreground text-base mt-6">Bez zobowiązań • Pierwsza konsultacja</p>
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