import { Card, CardContent } from "@/components/ui/card";
import { Share2, TrendingUp, Brain } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import serviceSocial from "@/assets/service-social.jpg";
import serviceAI from "@/assets/service-ai.jpg";
import serviceStrategy from "@/assets/service-strategy.jpg";

const services = [{
  icon: Share2,
  title: "Zarządzanie Social Media",
  description: "Od strategii po publikacje. Tworzę spójną komunikację, która zwiększa widoczność, buduje zaufanie i generuje realne zapytania.",
  image: serviceSocial
}, {
  icon: Brain,
  title: "AI / Automatyzacja",
  description: "Nie tylko treści – także inteligentne procesy. Automatyzuję komunikację i wdrażam rozwiązania, które oszczędzają Twój czas.",
  image: serviceAI
}, {
  icon: TrendingUp,
  title: "Strategia komunikacji",
  description: "Każdy post ma sens, bo wynika z planu. Opracowuję strategie, które wspierają Twój cel biznesowy – od employer brandingu po sprzedaż.",
  image: serviceStrategy
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
              className="group space-y-6 p-8 rounded-3xl transition-all duration-500 hover:bg-secondary/30 hover:shadow-[0_20px_60px_hsl(263_33%_35%/0.15)] relative overflow-hidden"
              whileHover={{ y: -12, transition: { duration: 0.4, ease: "easeOut" } }}
            >
              {/* Background image overlay */}
              <motion.div 
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                initial={{ scale: 1.2 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.7 }}
              >
                <img 
                  src={service.image} 
                  alt="" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              <div className="relative z-10">
                <motion.div 
                  className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center transition-all duration-500 group-hover:bg-primary group-hover:shadow-[0_0_30px_hsl(263_33%_35%/0.4)]"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <service.icon className="w-8 h-8 text-primary transition-colors duration-500 group-hover:text-primary-foreground" />
                </motion.div>
                <h3 className="text-3xl font-bold text-foreground leading-tight tracking-tight transition-colors duration-300 group-hover:text-primary mt-6">
                  {service.title}
                </h3>
                <p className="text-xl text-muted-foreground leading-relaxed mt-4">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};