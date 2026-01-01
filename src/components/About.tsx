import aboutPhoto from "@/assets/about-photo-new.webp";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { StatsCarousel } from "@/components/StatsCarousel";


export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-b from-background via-accent/5 to-background relative overflow-hidden">
      {/* Decorative elements - static */}
      <div className="absolute bottom-20 right-20 w-[350px] h-[350px] bg-accent/10 rounded-full blur-3xl opacity-12 hidden md:block" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10" ref={ref}>
        <motion.div className="mb-10 sm:mb-12 md:mb-16 lg:mb-24" style={{
        willChange: "transform, opacity",
        transform: "translateZ(0)"
      }} initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 30
      }} transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-tight">O mnie</h2>
        </motion.div>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start">
          <motion.div className="md:col-span-2 group" style={{
          willChange: "transform, opacity",
          transform: "translateZ(0)"
        }} initial={{
          opacity: 0,
          x: -40
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {
          opacity: 0,
          x: -40
        }} transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1]
        }}>
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl md:group-hover:shadow-2xl transition-shadow duration-300 hover-scale">
              <img
  src={aboutPhoto}
  alt="Ela Chabko - Digitilio"
  width={768}
  height={768}
  className="w-full h-auto object-cover"
  loading="lazy"
/>

              <div className="absolute inset-0 bg-gradient-to-t from-primary/15 to-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </motion.div>
          
          <motion.div className="md:col-span-3 space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8" style={{
          willChange: "transform, opacity",
          transform: "translateZ(0)"
        }} initial={{
          opacity: 0,
          x: 40
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {
          opacity: 0,
          x: 40
        }} transition={{
          duration: 0.6,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1]
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
          }} className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light leading-relaxed">
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
          }} className="text-base sm:text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
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
          }} className="text-base sm:text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
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
          }} className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground font-normal leading-relaxed">
              Chcesz, by Twoja marka była widoczna i przynosiła wyniki? Zacznijmy działać.
            </motion.p>
            <a href="mailto:elachabko@digitilio.pl" className="inline-block">
  <Button
    size="lg"
    className="text-base md:text-lg lg:text-xl px-6 py-6 md:px-8 md:py-7 lg:px-10 lg:py-8 h-auto bg-primary text-primary-foreground hover:bg-primary/90 rounded-full group shadow-[0_0_40px_hsl(263_33%_35%/0.3)] hover:shadow-[0_0_60px_hsl(263_33%_35%/0.5)] transition-all duration-500"
  >
    <Mail className="mr-3 w-6 h-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
    Napisz do mnie
  </Button>
</a>
            <motion.div
  initial={{ opacity: 0, y: 16 }}
  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
  transition={{ duration: 0.5, delay: 0.75 }}
  className="pt-4 sm:pt-5"
>
  <StatsCarousel
    intervalMs={3500}
    items={[
      { value: "20+", label: "marek", hint: "projekty B2B i B2C" },
      { value: "25+", label: "przeprowadzonych szkoleń", hint: "online i stacjonarnie" },
      { value: "8+", label: "lat doświadczenia", hint: "strategia i content" },
    ]}
  />
</motion.div>

          </motion.div>
        </div>
      </div>
    </section>;
};
