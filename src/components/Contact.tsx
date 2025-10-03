import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import { CircleDecoration } from "@/components/CircleDecoration";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { supabase } from "@/integrations/supabase/client";

const formSchema = z.object({
  name: z.string().min(2, "Imię i nazwisko musi mieć minimum 2 znaki").max(100),
  email: z.string().email("Nieprawidłowy adres email").max(255),
  message: z.string().min(10, "Wiadomość musi mieć minimum 10 znaków").max(1000),
  privacyConsent: z.boolean().refine((val) => val === true, {
    message: "Wymagana jest zgoda na przetwarzanie danych osobowych",
  }),
  marketingConsent: z.boolean().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export const Contact = () => {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      privacyConsent: false,
      marketingConsent: false,
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      const { error } = await supabase.functions.invoke("submit-contact-form", {
        body: {
          name: data.name,
          email: data.email,
          message: data.message,
          marketingConsent: data.marketingConsent,
          timestamp: new Date().toISOString(),
        },
      });

      if (error) throw error;

      toast({
        title: "Wiadomość wysłana!",
        description: "Dziękuję za kontakt. Odpiszę najszybciej jak to możliwe.",
      });

      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Błąd",
        description: "Nie udało się wysłać wiadomości. Spróbuj ponownie.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      <CircleDecoration className="top-1/3 -left-10" size="lg" opacity={0.06} />
      <CircleDecoration className="bottom-10 right-20" size="md" opacity={0.08} />
      <div className="container mx-auto px-4 relative z-10">
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
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Imię i nazwisko</FormLabel>
                        <FormControl>
                          <Input placeholder="Jan Kowalski" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="jan@przykład.pl" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Wiadomość</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Opowiedz mi o swoim projekcie..."
                            className="min-h-[150px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="space-y-4 pt-4 border-t">
                    <FormField
                      control={form.control}
                      name="privacyConsent"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-sm font-normal">
                              Wyrażam zgodę na przetwarzanie moich danych osobowych w celu
                              udzielenia odpowiedzi na przesłane zapytanie zgodnie z{" "}
                              <a href="#" className="text-primary underline">
                                Polityką Prywatności
                              </a>
                              . *
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="marketingConsent"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel className="text-sm font-normal">
                              Wyrażam zgodę na otrzymywanie informacji handlowych drogą
                              elektroniczną zgodnie z ustawą o świadczeniu usług drogą
                              elektroniczną.
                            </FormLabel>
                          </div>
                        </FormItem>
                      )}
                    />

                    <p className="text-xs text-muted-foreground">
                      * Pola oznaczone gwiazdką są wymagane
                    </p>
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? "Wysyłanie..." : "Wyślij wiadomość"}
                    <Send className="ml-2" />
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
