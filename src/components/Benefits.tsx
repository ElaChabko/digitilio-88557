import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { CircleDecoration } from "@/components/CircleDecoration";

const benefits = [
  {
    title: "Widoczność, która się opłaca",
    description:
      "Treści zaprojektowane tak, by przyciągały i konwertowały.",
  },
  {
    title: "Oszczędność czasu",
    description:
      "Automatyzacje i planowanie, które działają za Ciebie.",
  },
  {
    title: "Większe zasięgi, lepsze wyniki",
    description:
      "Realne dane, nie obietnice.",
  },
  {
    title: "Partner, nie wykonawca",
    description:
      "Transparentna współpraca i stały kontakt.",
  },
];

export const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-secondary/30 relative overflow-hidden">
      <CircleDecoration className="-top-5 right-1/4" size="xl" opacity={0.06} />
      <CircleDecoration className="bottom-10 -left-16" size="lg" opacity={0.07} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Co zyskujesz?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Współpraca ze mną to nie tylko profesjonalna obsługa social mediów, ale przede
            wszystkim realne korzyści dla Twojego biznesu.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 animate-slide-up border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
