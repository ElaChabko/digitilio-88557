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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-accent/30"
    >
      {/* Dekoracyjne fioletowe koła */}
      <CircleDecoration className="top-10 -left-20" size="xl" opacity={0.15} />
      <CircleDecoration className="top-1/3 right-10" size="lg" opacity={0.1} />
      <CircleDecoration className="bottom-20 left-1/4" size="md" opacity={0.12} />
      <CircleDecoration className="-bottom-10 -right-10" size="xl" opacity={0.08} />
      
      {/* Floating social media icons */}
      <div className="absolute top-1/4 left-10 animate-bounce" style={{ animationDuration: '3s' }}>
        <Instagram className="w-8 h-8 text-white/20" />
      </div>
      <div className="absolute top-1/3 right-20 animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }}>
        <Facebook className="w-8 h-8 text-white/20" />
      </div>
      <div className="absolute bottom-1/3 left-1/4 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '1s' }}>
        <Linkedin className="w-8 h-8 text-white/20" />
      </div>
      <div className="absolute bottom-1/4 right-1/3 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1.5s' }}>
        <Youtube className="w-8 h-8 text-white/20" />
      </div>

      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Strategia. AI. Emocje. Tworzę komunikację, która przyciąga uwagę i działa. Łączę analityczne podejście z kreatywnością, by Twoja marka była widoczna, zapamiętana i skuteczna.
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-light">
            Pomagam firmom budować silną obecność w social mediach i wykorzystywać potencjał AI w
            komunikacji z klientami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button
              variant="hero"
              size="lg"
              onClick={openContactForm}
              className="text-lg px-8 py-6 h-auto"
            >
              Skontaktuj się <ArrowRight className="ml-2" />
            </Button>
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
