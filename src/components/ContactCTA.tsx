import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { CircleDecoration } from "@/components/CircleDecoration";

export const ContactCTA = () => {
  const GOOGLE_FORM_URL = "https://forms.gle/bPNf6bg2DYdy7qDb8";

  const openContactForm = () => {
    window.open(GOOGLE_FORM_URL, "_blank");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-accent/30 relative overflow-hidden">
      <CircleDecoration className="top-10 -left-20" size="lg" opacity={0.1} />
      <CircleDecoration className="bottom-10 right-10" size="md" opacity={0.12} />
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Gotowy do transformacji cyfrowej?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Skontaktuj się ze mną i omówmy, jak mogę pomóc Twojej firmie
            osiągnąć sukces w mediach społecznościowych.
          </p>
          <Button
            onClick={openContactForm}
            size="lg"
            variant="secondary"
            className="text-lg px-8 py-6 h-auto"
          >
            <Mail className="mr-2" />
            Skontaktuj się ze mną
          </Button>
        </div>
      </div>
    </section>
  );
};
