import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const benefits = [
  {
    title: "Widoczność, która się opłaca",
    description: "Treści zaprojektowane tak, by przyciągały i konwertowały.",
  },
  {
    title: "Oszczędność czasu",
    description: "Automatyzacje i planowanie, które działają za Ciebie.",
  },
  {
    title: "Większe zasięgi, lepsze wyniki",
    description: "Realne dane, nie obietnice.",
  },
  {
    title: "Partner, nie wykonawca",
    description: "Transparentna współpraca i stały kontakt.",
  },
];

export const Benefits = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="benefits" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div 
          className="mb-24 max-w-5xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 leading-tight">
            Co<br />zyskujesz?
          </h2>
          <p className="text-2xl md:text-3xl text-muted-foreground font-light leading-relaxed">
            Współpraca ze mną to nie tylko profesjonalna obsługa social mediów, ale przede
            wszystkim realne korzyści dla Twojego biznesu.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="space-y-4"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.15
              }}
              whileHover={{ y: -8 }}
            >
              <motion.div 
                className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"
                whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary) / 0.15)" }}
                transition={{ duration: 0.3 }}
              >
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </motion.div>
              <h3 className="text-3xl font-bold text-foreground">{benefit.title}</h3>
              <p className="text-xl text-muted-foreground leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};