import { Card, CardContent } from "@/components/ui/card";
import { Clock, Map, TrendingDown } from "lucide-react";
import { CircleDecoration } from "@/components/CircleDecoration";

const problems = [
  {
    icon: Clock,
    problem: "Brak czasu",
    solution:
      "Przejmuję kompleksową obsługę social mediów, byś mógł skupić się na rozwijaniu biznesu.",
  },
  {
    icon: Map,
    problem: "Brak planu",
    solution:
      "Tworzę strategię komunikacji dopasowaną do Twoich celów i grupy docelowej.",
  },
  {
    icon: TrendingDown,
    problem: "Brak efektów",
    solution:
      "Analizuję działania i optymalizuję kampanie, by osiągnąć wymierne rezultaty.",
  },
];

export const ForWhom = () => {
  return (
    <section id="for-whom" className="py-20 bg-background relative overflow-hidden">
      <CircleDecoration className="top-10 left-20" size="lg" opacity={0.05} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Dla kogo?
          </h2>
        </div>
        <div className="max-w-3xl mx-auto text-center animate-slide-up">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Jeśli wiesz, że Twoja marka może robić więcej w social mediach – ale brakuje Ci czasu, 
            pomysłu lub strategii – zajmę się tym kompleksowo. Od pierwszego audytu po raport z wynikami 
            – wszystko po to, byś mógł skupić się na prowadzeniu firmy.
          </p>
        </div>
      </div>
    </section>
  );
};
