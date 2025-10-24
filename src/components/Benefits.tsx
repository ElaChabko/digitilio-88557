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
    <section id="benefits" className="py-32 bg-gradient-to-b from-background via-secondary/5 to-background relative overflow-hidden">
      {/* Decorative light */}
      <motion.div 
        className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-primary/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.25, 1],
          opacity: [0.12, 0.2, 0.12]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div 
          className="mb-24 max-w-5xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 leading-tight tracking-tight">
            Co<br />zyskujesz?
          </h2>
          <motion.p 
            className="text-2xl md:text-3xl text-muted-foreground font-light leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Współpraca ze mną to nie tylko profesjonalna obsługa social mediów, ale przede
            wszystkim realne korzyści dla Twojego biznesu.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="group relative space-y-4 p-8 rounded-3xl transition-all duration-500 hover:bg-gradient-to-br hover:from-secondary/30 hover:to-accent/10 hover:shadow-[0_20px_60px_hsl(263_33%_35%/0.15)]"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.12,
                ease: "easeOut"
              }}
              whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.4 } }}
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 blur transition-opacity duration-500 -z-10" />
              
              <motion.div 
                className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-accent group-hover:shadow-[0_0_30px_hsl(263_33%_35%/0.4)]"
                whileHover={{ scale: 1.15, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <CheckCircle2 className="w-6 h-6 text-primary transition-colors duration-500 group-hover:text-white" />
              </motion.div>
              <h3 className="text-3xl font-bold text-foreground tracking-tight transition-colors duration-300 group-hover:text-primary">
                {benefit.title}
              </h3>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};