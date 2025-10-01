import { Target, FileText, LineChart } from "lucide-react";
import { CircleDecoration } from "@/components/CircleDecoration";

const steps = [
  {
    icon: Target,
    title: "Strategia",
    description:
      "Analizuję Twoją markę, grupę docelową i cele. Tworzę spójną strategię komunikacji.",
  },
  {
    icon: FileText,
    title: "Treści",
    description:
      "Projektuję i publikuję angażujące treści, które budują Twoją markę i przyciągają klientów.",
  },
  {
    icon: LineChart,
    title: "Analiza",
    description:
      "Monitoruję wyniki, optymalizuję działania i dostarczam regularne raporty z efektów.",
  },
];

export const Process = () => {
  return (
    <section id="process" className="py-20 bg-background relative overflow-hidden">
      <CircleDecoration className="-top-10 left-1/3" size="xl" opacity={0.05} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Jak pracuję?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mój proces to połączenie strategicznego myślenia, kreatywności i analityki. Wszystko
            po to, by Twoja marka błyszczała w social mediach.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 border-4 border-primary/20">
                <step.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-foreground">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-primary/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
