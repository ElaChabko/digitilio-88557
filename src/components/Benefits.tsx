import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { CircleDecoration } from "@/components/CircleDecoration";
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
    <section id="benefits" className="py-20 bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden">
      <CircleDecoration className="-top-5 right-1/4" size="xl" opacity={0.06} />
      <CircleDecoration className="bottom-10 -left-16" size="lg" opacity={0.07} />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Co zyskujesz?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Współpraca ze mną to nie tylko profesjonalna obsługa social mediów, ale przede
            wszystkim realne korzyści dla Twojego biznesu.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut"
              }}
            >
              <Card className="h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-border/50 bg-gradient-to-br from-card to-secondary/20 group">
                <CardContent className="p-6 flex gap-4">
                  <motion.div 
                    className="flex-shrink-0"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};