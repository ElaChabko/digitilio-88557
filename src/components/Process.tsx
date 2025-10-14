import { Target, FileText, LineChart } from "lucide-react";
import { CircleDecoration } from "@/components/CircleDecoration";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    icon: Target,
    title: "Strategia",
    description: "Audyt marki, analiza konkurencji i dopasowanie kanałów.",
  },
  {
    icon: FileText,
    title: "Kreacja",
    description: "Projektuję treści, które angażują, uczą lub inspirują.",
  },
  {
    icon: LineChart,
    title: "Optymalizacja",
    description: "Badam wyniki, reaguję szybko, stale udoskonalam.",
  },
];

export const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-20 bg-background relative overflow-hidden">
      <CircleDecoration className="-top-10 left-1/3" size="xl" opacity={0.05} />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Jak pracuję?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Moje procesy łączą dane, kreatywność i sztuczną inteligencję.<br />
            Dzięki narzędziom analitycznym i automatyzacjom skracam czas produkcji treści nawet o 40%.
          </p>
        </motion.div>
        
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Connecting line with animation */}
          <motion.div 
            className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent"
            style={{ top: '2.5rem' }}
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut"
              }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mx-auto mb-6 border-4 border-primary/30 shadow-lg relative z-10 backdrop-blur-sm"
                whileHover={{ 
                  rotate: 360,
                  borderColor: "hsl(var(--primary))"
                }}
                transition={{ duration: 0.6 }}
              >
                <step.icon className="w-10 h-10 text-primary" />
              </motion.div>
              <h3 className="text-2xl font-semibold mb-3 text-foreground">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};