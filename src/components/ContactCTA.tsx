import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ContactFormDialog } from "@/components/ContactFormDialog";
import { useState } from "react";
import { motion } from "framer-motion";
import contactBottomImage from "@/assets/contact-bottom-image.webp";

export const ContactCTA = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-28">
      
      {/* Delikatne tło */}
      <motion.div
        className="pointer-events-none absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-primary/[0.08] blur-[130px]"
        animate={{
          x: [0, 35, 0],
          y: [0, 20, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-hidden="true"
      />

      <motion.div
        className="pointer-events-none absolute -bottom-40 right-0 h-[480px] w-[480px] rounded-full bg-accent/[0.08] blur-[130px]"
        animate={{
          x: [0, -25, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">

          {/* TEXT */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              className="mb-4 text-sm font-medium tracking-wide text-primary sm:text-base"
            >
              Następny krok
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-3xl text-3xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-4xl md:text-5xl"
            >
              Nie wiesz, co powinno być kolejnym krokiem w marketingu?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
              className="mt-7 max-w-2xl text-lg font-light leading-relaxed text-muted-foreground sm:text-xl"
            >
              Nie musisz mieć gotowego briefu ani listy działań. Na krótkiej
              rozmowie przyjrzymy się sytuacji i sprawdzimy, gdzie mogę realnie
              pomóc.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.55,
                delay: 0.2,
              }}
              className="mt-9"
            >
              <motion.div
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <Button
                  onClick={() => setIsContactFormOpen(true)}
                  size="lg"
                  className="group h-auto rounded-full bg-primary px-7 py-5 text-base text-primary-foreground shadow-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-xl sm:px-8 sm:text-lg"
                >
                  Porozmawiajmy o Twoim marketingu

                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </motion.div>

              <p className="mt-5 text-sm text-muted-foreground sm:text-base">
                15 min • bez zobowiązań
              </p>
            </motion.div>
          </div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md overflow-hidden rounded-2xl sm:rounded-3xl lg:mx-0 lg:ml-auto">
              <img
                src={contactBottomImage}
                alt="Ela Chabko - Digitilio"
                width={768}
                height={768}
                className="aspect-square w-full object-cover"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-primary/15 via-transparent to-transparent" />
            </div>

            {/* mały editorial accent */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.45,
              }}
              className="absolute -bottom-5 -left-5 hidden rounded-xl border border-border bg-background px-5 py-4 shadow-lg sm:block"
            >
              <p className="text-sm font-medium text-foreground">
                Najpierw problem.
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Potem właściwe działania.
              </p>
            </motion.div>
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
