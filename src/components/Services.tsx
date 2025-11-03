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
    <section id="services" className="py-32 bg-gradient-to-b from-background via-secondary/5 to-background relative overflow-hidden">
      {/* Floating light orbs */}
      <motion.div 
        className="absolute top-20 right-10 w-[300px] h-[300px] bg-accent/10 rounded-full blur-3xl"
        animate={{ 
          y: [0, -30, 0],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div 
          className="mb-24 max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 leading-tight tracking-tight">
            Czym się<br />zajmuję?
          </h2>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-6xl"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="group space-y-6 p-8 rounded-3xl transition-all duration-700 relative overflow-hidden border border-primary/10"
              whileHover={{ y: -16, transition: { duration: 0.5, ease: "easeOut" } }}
              style={{
                background: `linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--secondary)/0.3) 100%)`,
              }}
            >
              {/* Animated gradient background */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl`}
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Glowing border effect */}
              <motion.div 
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${service.glowColor}, transparent)`,
                  filter: 'blur(20px)',
                }}
                animate={{
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Spotlight effect */}
              <motion.div 
                className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                animate={{
                  x: [0, 20, 0],
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div className="relative z-10">
                <motion.div 
                  className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center transition-all duration-500 group-hover:from-primary group-hover:to-accent group-hover:shadow-[0_0_40px_hsl(263_33%_35%/0.5)] border border-primary/20 group-hover:border-primary/40"
                  whileHover={{ 
                    rotate: [0, -10, 10, -10, 0],
                    scale: 1.15 
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <service.icon className="w-10 h-10 text-primary transition-colors duration-500 group-hover:text-white" />
                </motion.div>
                
                <motion.h3 
                  className="text-3xl font-bold text-foreground leading-tight tracking-tight transition-all duration-300 group-hover:text-primary mt-6 group-hover:tracking-wide"
                  whileHover={{ x: 5 }}
                >
                  {service.title}
                </motion.h3>
                
                <p className="text-xl text-muted-foreground leading-relaxed mt-4 group-hover:text-foreground/90 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Bottom accent line */}
                <motion.div 
                  className="mt-6 h-1 bg-gradient-to-r from-primary via-accent to-transparent rounded-full"
                  initial={{ width: 0, opacity: 0 }}
                  whileHover={{ width: "100%", opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};