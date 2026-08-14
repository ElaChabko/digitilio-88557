import { Button } from "@/components/ui/button";
import { ContactFormDialog } from "@/components/ContactFormDialog";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const ContactCTA = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const openContactForm = () => {
    setIsContactFormOpen(true);
  };

  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-20 lg:py-28">
      {/* subtelne tło */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      <div
        className="pointer-events-none absolute -left-24 top-0 h-[320px] w-[320px] rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.45 }}
            className="mb-4 text-sm font-medium text-primary sm:text-base"
          >
            Następny krok
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.55 }}
            className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Nie wiesz, co powinno być kolejnym krokiem w marketingu?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
          >
            Nie musisz mieć gotowego briefu ani listy działań. Na krótkiej
            rozmowie przyjrzymy się sytuacji i sprawdzimy, gdzie mogę realnie
            pomóc.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-8 sm:mt-10"
          >
            <Button
              onClick={openContactForm}
              className="
                group inline-flex h-auto w-full items-center justify-center gap-3
                rounded-full bg-primary px-6 py-4 text-base font-medium text-primary-foreground
                transition-all duration-300 hover:bg-primary/90
                sm:w-auto sm:px-8 sm:py-5 sm:text-lg
              "
            >
              <span>Porozmawiajmy o Twoim marketingu</span>
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>

            <p className="mt-5 text-sm text-muted-foreground sm:text-base">
              15 min • bez zobowiązań
            </p>
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
