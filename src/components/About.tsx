import aboutPhoto from "@/assets/about-photo.jpg";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section id="about" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background via-accent/5 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div className="absolute bottom-20 right-20 w-[350px] h-[350px] bg-accent/10 rounded-full blur-3xl" animate={{
      scale: [1, 1.15, 1],
      opacity: [0.1, 0.18, 0.1]
    }} transition={{
      duration: 9,
      repeat: Infinity,
      ease: "easeInOut"
    }} />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div className="mb-12 md:mb-16 lg:mb-24" initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 30
      }} transition={{
        duration: 0.6
      }}>
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold text-foreground leading-tight tracking-tight">O mnie</h2>
        </motion.div>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-8 md:gap-12 lg:gap-16 items-start">
          <motion.div className="md:col-span-2 group" initial={{
          opacity: 0,
          x: -40
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {
          opacity: 0,
          x: -40
        }} transition={{
          duration: 0.7,
          ease: "easeOut"
        }}>
            <motion.div className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_hsl(263_33%_35%/0.15)] group-hover:shadow-[0_30px_80px_hsl(263_33%_35%/0.25)] transition-shadow duration-500" whileHover={{
            scale: 1.02,
            y: -5
          }} transition={{
            duration: 0.4
          }}>
              <img src={aboutPhoto} alt="Ela Chabko - Digitilio" className="w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          </motion.div>
          
          <motion.div className="md:col-span-3 space-y-4 md:space-y-6 lg:space-y-8" initial={{
          opacity: 0,
          x: 40
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {
          opacity: 0,
          x: 40
        }} transition={{
          duration: 0.7,
          delay: 0.2,
          ease: "easeOut"
        }}>
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={isInView ? {
            opacity: 1,
            y: 0
          } : {
            opacity: 0,
            y: 20
          }} transition={{
            duration: 0.5,
            delay: 0.3
          }} className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed font-light">
              Nazywam się <strong className="text-foreground font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Ela Chabko</strong> i jestem specjalistką od strategii komunikacji w social mediach.
            </motion.p>
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={isInView ? {
            opacity: 1,
            y: 0
          } : {
            opacity: 0,
            y: 20
          }} transition={{
            duration: 0.5,
            delay: 0.4
          }} className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed font-light">
              Tworzę treści, które sprzedają, budują pozycję eksperta i przyciągają uwagę. Nie wierzę w posty „dla postów" – każdy ma cel i działa. Połączenie strategii, kreatywności i AI to moja siła.
            </motion.p>
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={isInView ? {
            opacity: 1,
            y: 0
          } : {
            opacity: 0,
            y: 20
          }} transition={{
            duration: 0.5,
            delay: 0.5
          }} className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed font-light">
              Pracowałam z markami różnej wielkości – od lokalnych firm po rozpoznawalne brandy. Wiem, jak ważna jest elastyczność i realizm. Trzymam się liczb, badam wyniki, nie boję się zmian.
            </motion.p>
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={isInView ? {
            opacity: 1,
            y: 0
          } : {
            opacity: 0,
            y: 20
          }} transition={{
            duration: 0.5,
            delay: 0.6
          }} className="text-lg md:text-xl lg:text-2xl text-foreground font-normal leading-relaxed">
              Chcesz, by Twoja marka była widoczna i przynosiła wyniki? Zacznijmy działać.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>;
};