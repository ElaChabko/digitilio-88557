import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(27, 165, 165, 0.95), rgba(27, 165, 165, 0.90)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Social media z planem.
            <br />
            Treści z celem.
            <br />
            Komunikacja z charakterem.
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Pomagam firmom budować silną obecność w social mediach i wykorzystywać potencjał AI w
            komunikacji z klientami.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button
              variant="hero"
              size="lg"
              onClick={scrollToContact}
              className="text-lg px-8 py-6 h-auto"
            >
              Skontaktuj się <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
