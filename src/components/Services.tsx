import { Card, CardContent } from "@/components/ui/card";
import { Share2, TrendingUp, Brain, FileEdit, BarChart3, MessageSquare } from "lucide-react";
import { CircleDecoration } from "@/components/CircleDecoration";
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
export const Services = () => {
  return <section id="services" className="py-20 bg-secondary/30 relative overflow-hidden">
      <CircleDecoration className="top-20 -right-20" size="lg" opacity={0.06} />
      <CircleDecoration className="bottom-10 -left-10" size="md" opacity={0.08} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Czym się zajmuję?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Oferuję kompleksowe usługi z zakresu social media i AI, które pomogą Ci osiągnąć cele biznesowe.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => <Card key={index} className="hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 animate-slide-up border-border/50 bg-gradient-to-br from-card to-secondary/30 group overflow-hidden relative" style={{
          animationDelay: `${index * 100}ms`
        }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-6 relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-4 shadow-md group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};