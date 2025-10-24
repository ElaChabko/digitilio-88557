import { motion } from "framer-motion";

export const ForWhom = () => {
  return (
    <section id="for-whom" className="py-32 bg-gradient-to-b from-background via-accent/5 to-background relative overflow-hidden">
      {/* Floating gradient orb */}
      <motion.div 
        className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-accent/15 rounded-full blur-3xl"
        animate={{ 
          y: [0, 40, 0],
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ 
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl">
          <motion.h2 
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-16 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Dla kogo?
          </motion.h2>
          <motion.p 
            className="text-2xl md:text-3xl text-muted-foreground leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Jeśli wiesz, że Twoja marka może robić więcej w social mediach – ale brakuje Ci czasu, 
            pomysłu lub strategii – zajmę się tym kompleksowo. Od pierwszego audytu po raport z wynikami 
            – wszystko po to, byś mógł skupić się na prowadzeniu firmy.
          </motion.p>
        </div>
      </div>
    </section>
  );
};
