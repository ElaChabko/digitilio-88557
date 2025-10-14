import { Button } from "@/components/ui/button";
import { ArrowRight, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import { CircleDecoration } from "@/components/CircleDecoration";
import { ContactFormDialog } from "@/components/ContactFormDialog";
import { useState } from "react";

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
      <CircleDecoration className="top-10 -left-20" size="xl" opacity={0.08} />
      <CircleDecoration className="bottom-20 right-10" size="lg" opacity={0.06} />

      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight animate-fade-in">
            <span className="inline-block hover:scale-105 transition-transform duration-300">Strategia.</span>{" "}
            <span className="inline-block hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.1s' }}>AI.</span>{" "}
            <span className="inline-block hover:scale-105 transition-transform duration-300" style={{ animationDelay: '0.2s' }}>Emocje.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Tworzę komunikację, która przyciąga uwagę i działa. Łączę analityczne podejście z kreatywnością, by Twoja marka była widoczna, zapamiętana i skuteczna.
          </p>
          <div className="flex flex-col gap-3 justify-center items-center mt-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <Button
              variant="hero"
              size="lg"
              onClick={openContactForm}
              className="group text-lg px-8 py-6 h-auto shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Porozmawiajmy o Twojej marce 
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <p className="text-white/70 text-sm">Bez zobowiązań • 15 min rozmowy</p>
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
