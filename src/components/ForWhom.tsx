import { motion } from "framer-motion";

export const ForWhom = () => {
  return (
    <section id="for-whom" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl">
          <motion.h2 
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-16 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Dla kogo?
          </motion.h2>
          <motion.p 
            className="text-2xl md:text-3xl text-muted-foreground leading-relaxed font-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
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
