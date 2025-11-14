import { motion } from "framer-motion";
import { Factory, Laptop, ShoppingCart, Truck, ShieldCheck, Globe } from "lucide-react";

const industries = [
  {
    icon: Factory,
    title: "Produkcja i przemysł",
    description: "Pokazuję, że nawet techniczne tematy mogą przyciągać uwagę"
  },
  {
    icon: Laptop,
    title: "IT i nowe technologie",
    description: "Łączę merytorykę z kreatywną formą"
  },
  {
    icon: ShoppingCart,
    title: "Handel detaliczny i e-commerce",
    description: "Pomagam budować markę i wspierać sprzedaż"
  },
  {
    icon: ShieldCheck,
    title: "Specjalistyczne usługi",
    description: "Wspieram marki w edukacji i employer brandingu"
  },
  {
    icon: Globe,
    title: "Projekty międzynarodowe",
    description: "Prowadzę komunikację po polsku i po angielsku, zachowując spójność wizerunku"
  }
];

export const ForWhom = () => {
  return <section id="for-whom" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background via-accent/5 to-background relative overflow-hidden">
      {/* Floating gradient orb */}
      <motion.div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-accent/15 rounded-full blur-3xl" animate={{
      y: [0, 40, 0],
      scale: [1, 1.15, 1],
      opacity: [0.15, 0.25, 0.15]
    }} transition={{
      duration: 13,
      repeat: Infinity,
      ease: "easeInOut"
    }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 md:mb-8 leading-tight tracking-tight" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          duration: 0.6
        }}>
            Dla kogo?
          </motion.h2>

          <motion.p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground leading-relaxed font-light mb-8 md:mb-12 lg:mb-16 max-w-4xl" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          duration: 0.6,
          delay: 0.15
        }}>
            Jeśli wiesz, że Twoja marka może robić więcej w social mediach, ale brakuje Ci czasu, pomysłu lub strategii to zajmę się tym kompleksowo. Od pierwszego audytu po raport z wynikami – wszystko po to, byś mógł skupić się na prowadzeniu firmy.
          </motion.p>

          <motion.h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground mb-8 md:mb-10 lg:mb-12" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          duration: 0.6,
          delay: 0.25
        }}>
            Pracuję z firmami z różnych branż:
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12 lg:mb-16">
            {industries.map((industry, index) => (
              <motion.div key={industry.title} className="group p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10" initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true,
              margin: "-100px"
            }} transition={{
              duration: 0.5,
              delay: 0.35 + index * 0.1
            }}>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
                    <industry.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-2 text-base sm:text-lg">
                      {industry.title}
                    </h4>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      {industry.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground leading-relaxed font-light max-w-4xl" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: "-100px"
        }} transition={{
          duration: 0.6,
          delay: 0.95
        }}>
            Niezależnie od wielkości firmy — pracuję strategicznie, elastycznie i z pełnym zaangażowaniem. <span className="text-foreground font-medium">Najważniejsze są dla mnie efekty, nie obietnice.</span>
          </motion.p>
        </div>
      </div>
    </section>;
};
