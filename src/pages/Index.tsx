import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ProblemSection } from "@/components/ProblemSection";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { About } from "@/components/About";
import { ForWhom } from "@/components/ForWhom";
import { Benefits } from "@/components/Benefits";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";
import { SEO, HOME_ALTERNATES } from "@/components/SEO";

import { StructuredData } from "@/components/StructuredData";
import { digitilioSiteSchema } from "@/lib/structuredData";

const Index = () => {
  const { hash } = useLocation();

  // Obsługa linków typu /#services (np. otwartych w nowej karcie)
  useEffect(() => {
    if (!hash) return;

    const timer = window.setTimeout(() => {
      document
        .getElementById(hash.slice(1))
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 150);

    return () => window.clearTimeout(timer);
  }, [hash]);

  return (
    <div className="min-h-screen">
            <SEO
        title="Strategia marketingowa i doradztwo | Digitilio"
        description="Pomagam firmom uporządkować marketing, ustalić priorytety i przełożyć strategię na działania, które da się realnie wdrożyć."
        canonical="https://digitilio.pl/"
        alternates={HOME_ALTERNATES}
      />
      <StructuredData data={digitilioSiteSchema} />
      <Navigation />
      <Hero />
      <ProblemSection />
      <Services />
      <Process />
      <About />
      <ForWhom />
      <Benefits />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Index;
