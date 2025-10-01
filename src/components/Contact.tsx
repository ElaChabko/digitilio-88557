import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Błąd",
        description: "Proszę wypełnić wszystkie pola formularza.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Błąd",
        description: "Proszę podać prawidłowy adres email.",
        variant: "destructive",
      });
      return;
    }

    // Success message
    toast({
      title: "Wiadomość wysłana!",
      description: "Dziękuję za kontakt. Odpiszę najszybciej jak to możliwe.",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Skontaktuj się ze mną
            </h2>
            <p className="text-lg text-muted-foreground">
              Masz pytania? Chcesz dowiedzieć się więcej o moich usługach? Napisz do mnie –
              odpowiem na każdą wiadomość!
            </p>
          </div>
          <Card className="animate-slide-up shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                    Imię i nazwisko
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Jan Kowalski"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jan@przykład.pl"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                    Wiadomość
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Opowiedz mi o swoim projekcie..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full min-h-[150px]"
                  />
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full">
                  Wyślij wiadomość <Send className="ml-2" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
