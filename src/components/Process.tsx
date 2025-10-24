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
    <section id="process" className="py-32 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      {/* Decorative light */}
      <motion.div 
        className="absolute top-1/2 left-10 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ 
          duration: 10,
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
            Jak<br />pracuję?
          </h2>
          <motion.p 
            className="text-2xl md:text-3xl text-muted-foreground max-w-3xl font-light leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Moje procesy łączą dane, kreatywność i sztuczną inteligencję. 
            Dzięki narzędziom analitycznym i automatyzacjom skracam czas produkcji treści nawet o 40%.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 max-w-6xl">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="group relative space-y-6"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut"
              }}
              whileHover={{ y: -10, transition: { duration: 0.4 } }}
            >
              {/* Step number */}
              <motion.div 
                className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {index + 1}
              </motion.div>
              
              <motion.div 
                className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center transition-all duration-500 group-hover:bg-primary group-hover:shadow-[0_0_40px_hsl(263_33%_35%/0.4)]"
                whileHover={{ rotate: -5, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <step.icon className="w-10 h-10 text-primary transition-colors duration-500 group-hover:text-primary-foreground" />
              </motion.div>
              <h3 className="text-3xl font-bold text-foreground tracking-tight transition-colors duration-300 group-hover:text-primary">
                {step.title}
              </h3>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};