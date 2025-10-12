import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { CircleDecoration } from "@/components/CircleDecoration";
import { ContactFormDialog } from "@/components/ContactFormDialog";
import { useState } from "react";

export const ContactCTA = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const openContactForm = () => {
    setIsContactFormOpen(true);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-accent/30 relative overflow-hidden">
      <CircleDecoration className="top-10 -left-20" size="lg" opacity={0.1} />
      <CircleDecoration className="bottom-10 right-10" size="md" opacity={0.12} />
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Gotowy na markę, o której się mówi?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Umów krótką rozmowę i zobacz, jak połączenie strategii i AI może odmienić Twoją komunikację.
          </p>
          <div className="space-y-4">
            <Button
              onClick={openContactForm}
              size="lg"
              className="text-lg px-8 py-6 h-auto bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300"
              style={{ boxShadow: 'var(--shadow-glow-strong)' }}
            >
              <Mail className="mr-2" />
              Zacznijmy współpracę
            </Button>
            <p className="text-white/70 text-sm">Bez zobowiązań • Pierwsza konsultacja</p>
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
