import { Card, CardContent } from "@/components/ui/card";
import { Clock, Map, TrendingDown } from "lucide-react";

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
    <section id="for-whom" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Dla kogo?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Współpracuję z firmami, które potrzebują profesjonalnej obsługi social mediów, ale nie
            mają na to czasu lub odpowiednich zasobów.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {problems.map((item, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 animate-slide-up border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{item.problem}</h3>
                <p className="text-muted-foreground">{item.solution}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
