import { Card, CardContent } from "@/components/ui/card";
import { Share2, TrendingUp, Brain } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const services = [{
  icon: Share2,
  title: "Zarządzanie Social Media",
  description: "Od strategii po publikacje. Tworzę spójną komunikację, która zwiększa widoczność, buduje zaufanie i generuje realne zapytania."
}, {
  icon: Brain,
  title: "AI / Automatyzacja",
  description: "Nie tylko treści – także inteligentne procesy. Automatyzuję komunikację i wdrażam rozwiązania, które oszczędzają Twój czas."
}, {
  icon: TrendingUp,
  title: "Strategia komunikacji",
  description: "Każdy post ma sens, bo wynika z planu. Opracowuję strategie, które wspierają Twój cel biznesowy – od employer brandingu po sprzedaż."
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
    <section id="services" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div 
          className="mb-24"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 leading-tight">
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
              className="space-y-6"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center"
                whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary) / 0.15)" }}
                transition={{ duration: 0.3 }}
              >
                <service.icon className="w-8 h-8 text-primary" />
              </motion.div>
              <h3 className="text-3xl font-bold text-foreground leading-tight">{service.title}</h3>
              <p className="text-xl text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};