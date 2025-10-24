import { Target, FileText, LineChart } from "lucide-react";
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
    <section id="process" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div 
          className="mb-24 max-w-5xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 leading-tight">
            Jak<br />pracuję?
          </h2>
          <p className="text-2xl md:text-3xl text-muted-foreground max-w-3xl font-light leading-relaxed">
            Moje procesy łączą dane, kreatywność i sztuczną inteligencję. 
            Dzięki narzędziom analitycznym i automatyzacjom skracam czas produkcji treści nawet o 40%.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 max-w-6xl">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="space-y-6"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.2
              }}
              whileHover={{ y: -8 }}
            >
              <motion.div 
                className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center"
                whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary) / 0.15)" }}
                transition={{ duration: 0.3 }}
              >
                <step.icon className="w-10 h-10 text-primary" />
              </motion.div>
              <h3 className="text-3xl font-bold text-foreground">{step.title}</h3>
              <p className="text-xl text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};