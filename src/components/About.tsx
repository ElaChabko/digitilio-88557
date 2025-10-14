import aboutPhoto from "@/assets/about-photo.jpg";
import { CircleDecoration } from "@/components/CircleDecoration";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      <CircleDecoration className="top-1/4 -right-10" size="lg" opacity={0.06} />
      <CircleDecoration className="bottom-20 left-10" size="md" opacity={0.07} />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">O mnie</h2>
        </motion.div>
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 via-accent/40 to-transparent rounded-3xl blur-2xl"></div>
              <motion.img
                src={aboutPhoto}
                alt="Ela Chabko - Digitilio"
                className="relative rounded-2xl w-full object-cover"
                style={{ boxShadow: 'var(--shadow-strong)' }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p 
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Nazywam się <strong className="text-foreground">Ela Chabko</strong> i jestem specjalistką od strategii komunikacji w social mediach.
            </motion.p>
            <motion.p 
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Tworzę treści, które sprzedają, budują pozycję eksperta i przyciągają uwagę. Nie wierzę w posty „dla postów" – każdy ma cel i działa. Połączenie strategii, kreatywności i AI to moja siła.
            </motion.p>
            <motion.p 
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Pracowałam z markami różnej wielkości – od lokalnych firm po rozpoznawalne brandy. Wiem, jak ważna jest elastyczność i realizm. Trzymam się liczb, badam wyniki, nie boję się zmian.
            </motion.p>
            <motion.p 
              className="text-lg text-foreground font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Chcesz, by Twoja marka była widoczna i przynosiła wyniki? Zacznijmy działać.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};