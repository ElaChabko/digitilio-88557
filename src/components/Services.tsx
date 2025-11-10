import { Share2, TrendingUp, Brain } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [{
  icon: Share2,
  title: "Zarządzanie Social Media",
  description: "Od strategii po publikacje. Tworzę spójną komunikację, która zwiększa widoczność, buduje zaufanie i generuje realne zapytania.",
  gradient: "from-pink-500/20 via-purple-500/20 to-violet-500/20",
  glowColor: "rgba(236, 72, 153, 0.3)"
}, {
  icon: Brain,
  title: "AI / Automatyzacja",
  description: "Nie tylko treści – także inteligentne procesy. Automatyzuję komunikację i wdrażam rozwiązania, które oszczędzają Twój czas.",
  gradient: "from-blue-500/20 via-purple-500/20 to-indigo-500/20",
  glowColor: "rgba(99, 102, 241, 0.3)"
}, {
  icon: TrendingUp,
  title: "Strategia komunikacji",
  description: "Każdy post ma sens, bo wynika z planu. Opracowuję strategie, które wspierają Twój cel biznesowy – od employer brandingu po sprzedaż.",
  gradient: "from-violet-500/20 via-fuchsia-500/20 to-purple-500/20",
  glowColor: "rgba(168, 85, 247, 0.3)"
}];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1
  }
};

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-b from-background via-secondary/5 to-background relative overflow-hidden">
      {/* Floating light orbs - static on mobile */}
      <div 
        className="absolute top-20 right-10 w-[300px] h-[300px] bg-accent/10 rounded-full blur-3xl opacity-15 hidden md:block"
      />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10" ref={ref}>
        <motion.div 
          className="mb-10 sm:mb-12 md:mb-16 lg:mb-24 max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[2.25rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-8xl font-bold text-foreground mb-0 tracking-tight">
            Czym się<br />zajmuję?
          </h2>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-16 max-w-6xl"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="group space-y-4 sm:space-y-5 md:space-y-6 p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl transition-all duration-300 relative overflow-hidden border border-primary/10 md:hover:-translate-y-2"
              style={{
                background: `linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--secondary)/0.3) 100%)`,
              }}
            >
              {/* Simplified gradient background */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 md:group-hover:opacity-70 transition-opacity duration-500`}
              />
              
              {/* Glowing border effect - simplified */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-0 md:group-hover:opacity-50 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, ${service.glowColor}, transparent)`,
                  filter: 'blur(15px)',
                }}
              />
              
              <div className="relative z-10">
                <div 
                  className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center transition-all duration-300 md:group-hover:from-primary md:group-hover:to-accent md:group-hover:shadow-lg border border-primary/20 md:group-hover:border-primary/40"
                >
                  <service.icon className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary transition-colors duration-300 md:group-hover:text-white" />
                </div>
                
                <h3 
                  className="text-xl leading-tight sm:text-2xl md:text-3xl font-bold text-foreground tracking-tight transition-colors duration-300 md:group-hover:text-primary"
                >
                  {service.title}
                </h3>
                
                <p className="text-sm leading-relaxed sm:text-base md:text-lg lg:text-xl text-muted-foreground md:group-hover:text-foreground/90 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Bottom accent line */}
                <div 
                  className="mt-6 h-1 bg-gradient-to-r from-primary via-accent to-transparent rounded-full w-0 md:group-hover:w-full transition-all duration-500"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};