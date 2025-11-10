import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Lightbulb, Rocket, Target, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import benefitsBg from "@/assets/benefits-bg.jpg";

const benefits = [
  {
    icon: Target,
    title: "Widoczność, która się opłaca",
    description: "Treści zaprojektowane tak, by przyciągały i konwertowały.",
  },
  {
    icon: Rocket,
    title: "Oszczędność czasu",
    description: "Automatyzacje i planowanie, które działają za Ciebie.",
  },
  {
    icon: TrendingUp,
    title: "Większe zasięgi, lepsze wyniki",
    description: "Realne dane, nie obietnice.",
  },
  {
    icon: Lightbulb,
    title: "Partner, nie wykonawca",
    description: "Transparentna współpraca i stały kontakt.",
  },
];

export const Benefits = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="benefits" className="py-12 sm:py-16 md:py-20 lg:py-32 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0" style={{ opacity: 0.25 }}>
        <img 
          src={benefitsBg} 
          alt="" 
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background/85" />
      </div>
      
      {/* Decorative light - static */}
      <div 
        className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-primary/10 rounded-full blur-3xl z-[1] opacity-15 hidden md:block"
      />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10" ref={ref}>
        <motion.div 
          className="mb-10 sm:mb-12 md:mb-16 lg:mb-24 max-w-5xl"
          style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-[2.25rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-8xl font-bold text-foreground mb-5 sm:mb-6 md:mb-8 tracking-tight">
            Co<br />zyskujesz?
          </h2>
          <motion.p 
            className="text-base leading-relaxed sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-light"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Współpraca ze mną to nie tylko profesjonalna obsługa social mediów, ale przede
            wszystkim realne korzyści dla Twojego biznesu.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-16 max-w-6xl">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="group relative space-y-3 sm:space-y-4 p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl md:hover:bg-gradient-to-br md:hover:from-secondary/30 md:hover:to-accent/10 md:hover:shadow-lg"
              style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              whileHover={{ y: -8 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              {/* Gradient border effect - simplified */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 md:group-hover:opacity-70 blur transition-opacity duration-300 -z-10" />
              
              <div 
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center transition-all duration-300 md:group-hover:bg-gradient-to-br md:group-hover:from-primary md:group-hover:to-accent md:group-hover:shadow-lg"
              >
                <benefit.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary transition-colors duration-300 md:group-hover:text-white" />
              </div>
              <h3 className="text-xl leading-tight sm:text-2xl md:text-3xl font-bold text-foreground tracking-tight transition-colors duration-300 group-hover:text-primary">
                {benefit.title}
              </h3>
              <p className="text-sm leading-relaxed sm:text-base md:text-lg lg:text-xl text-muted-foreground">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};