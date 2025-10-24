import aboutPhoto from "@/assets/about-photo.jpg";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div 
          className="mb-24"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-tight">O mnie</h2>
        </motion.div>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-16 items-start">
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src={aboutPhoto}
              alt="Ela Chabko - Digitilio"
              className="rounded-3xl w-full object-cover"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          
          <motion.div 
            className="md:col-span-3 space-y-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-2xl md:text-3xl text-muted-foreground leading-relaxed font-light">
              Nazywam się <strong className="text-foreground font-semibold">Ela Chabko</strong> i jestem specjalistką od strategii komunikacji w social mediach.
            </p>
            <p className="text-2xl md:text-3xl text-muted-foreground leading-relaxed font-light">
              Tworzę treści, które sprzedają, budują pozycję eksperta i przyciągają uwagę. Nie wierzę w posty „dla postów" – każdy ma cel i działa. Połączenie strategii, kreatywności i AI to moja siła.
            </p>
            <p className="text-2xl md:text-3xl text-muted-foreground leading-relaxed font-light">
              Pracowałam z markami różnej wielkości – od lokalnych firm po rozpoznawalne brandy. Wiem, jak ważna jest elastyczność i realizm. Trzymam się liczb, badam wyniki, nie boję się zmian.
            </p>
            <p className="text-2xl md:text-3xl text-foreground font-normal leading-relaxed">
              Chcesz, by Twoja marka była widoczna i przynosiła wyniki? Zacznijmy działać.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};