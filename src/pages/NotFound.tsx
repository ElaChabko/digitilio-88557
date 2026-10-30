import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <SEO
        title="Strona nie została znaleziona | Digitilio"
        description="Ta strona nie istnieje. Wróć na stronę główną Digitilio lub do bazy wiedzy."
        noindex
      />

      <Navigation />

      <main className="flex flex-1">
        <section className="relative flex w-full items-center overflow-hidden bg-[linear-gradient(155deg,hsl(262_46%_28%)_0%,hsl(264_46%_38%)_50%,hsl(270_50%_52%)_100%)] pb-24 pt-40 text-white sm:pb-28 sm:pt-44">
          {/* Subtelny grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            aria-hidden="true"
            style={{
              backgroundImage: `
                linear-gradient(to right, white 1px, transparent 1px),
                linear-gradient(to bottom, white 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
            }}
          />

          {/* Subtelne światło */}
          <div
            className="pointer-events-none absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-white/10 blur-[150px]"
            aria-hidden="true"
          />

          <div className="container relative z-10 mx-auto px-4 sm:px-6">
            <div className="mx-auto max-w-5xl">
              <p className="text-sm font-medium text-primary-foreground/55">
                Błąd 404
              </p>

              <p
                className="mt-6 text-[7rem] font-bold leading-none tracking-tighter text-white/10 sm:text-[10rem] lg:text-[13rem]"
                aria-hidden="true"
              >
                404
              </p>

              <div className="-mt-4 max-w-3xl sm:-mt-8 lg:-mt-12">
                <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                  Tej strony tutaj nie ma.
                </h1>

                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
                  Adres mógł się zmienić albo strona została usunięta. Wróć na
                  stronę główną i wybierz właściwy kierunek.
                </p>

                <Button
                  asChild
                  size="lg"
                  className="group mt-9 h-auto rounded-full bg-white px-7 py-5 text-base text-violet transition-all duration-300 hover:bg-white/90 sm:px-8"
                >
                  <Link to="/">
                    <ArrowLeft className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" />
                    Wróć na stronę główną
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
