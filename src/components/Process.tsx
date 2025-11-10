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
    <section id="process" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden">
      {/* Decorative light - static */}
      <div 
        className="absolute top-1/2 left-10 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl opacity-12 hidden md:block"
      />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div 
          className="mb-12 md:mb-16 lg:mb-24 max-w-5xl"
          style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 md:mb-8 leading-tight tracking-tight">
            Jak<br />pracuję?
          </h2>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-3xl font-light leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Moje procesy łączą dane, kreatywność i sztuczną inteligencję. 
            Dzięki narzędziom analitycznym i automatyzacjom skracam czas produkcji treści nawet o 40%.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 lg:gap-20 max-w-6xl">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="group relative space-y-4 md:space-y-6"
              style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              whileHover={{ y: -8 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              {/* Step number */}
              <div 
                className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg shadow-lg opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
              >
                {index + 1}
              </div>
              
              <div 
                className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center transition-all duration-300 md:group-hover:bg-primary md:group-hover:shadow-lg"
              >
                <step.icon className="w-10 h-10 text-primary transition-colors duration-300 md:group-hover:text-primary-foreground" />
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground tracking-tight transition-colors duration-300 group-hover:text-primary">
                {step.title}
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};