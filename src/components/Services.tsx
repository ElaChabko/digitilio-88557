import { Card, CardContent } from "@/components/ui/card";
import { Share2, TrendingUp, Brain, FileEdit, BarChart3, MessageSquare } from "lucide-react";

const services = [
  {
    icon: Share2,
    title: "Zarządzanie Social Media",
    description: "Kompleksowa obsługa Twoich profili – od strategii po codzienne publikacje.",
  },
  {
    icon: FileEdit,
    title: "Tworzenie treści",
    description: "Angażujące posty, grafiki i kopie, które przyciągają uwagę i budują zasięgi.",
  },
  {
    icon: TrendingUp,
    title: "Strategia komunikacji",
    description: "Przemyślany plan działania dopasowany do Twoich celów biznesowych.",
  },
  {
    icon: Brain,
    title: "Implementacja AI",
    description: "Automatyzacja procesów i chatboty, które oszczędzają czas i zwiększają konwersję.",
  },
  {
    icon: BarChart3,
    title: "Analiza i raportowanie",
    description: "Regularne raporty z działań, które pokazują realne efekty i ROI.",
  },
  {
    icon: MessageSquare,
    title: "Community management",
    description: "Budowanie relacji z odbiorcami i szybka, profesjonalna komunikacja.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Czym się zajmuję?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferuję kompleksowe usługi z zakresu social media i AI, które pomogą Ci osiągnąć cele
            biznesowe.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 animate-slide-up border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
