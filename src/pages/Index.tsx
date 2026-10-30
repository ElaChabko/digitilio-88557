import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO, HOME_ALTERNATES } from "@/components/SEO";
import { StructuredData } from "@/components/StructuredData";
import { ContactFormDialog } from "@/components/ContactFormDialog";
import { LatestArticles } from "@/components/LatestArticles";
import { digitilioSiteSchema } from "@/lib/structuredData";
import { homePl } from "@/content/home";

import { Hero } from "@/components/home/Hero";
import { Problem } from "@/components/home/Problem";
import { Unify } from "@/components/home/Unify";
import { ServicesStepper } from "@/components/home/ServicesStepper";
import { ProcessWords } from "@/components/home/ProcessWords";
import { WorkTrack } from "@/components/home/WorkTrack";
import { LogoMarquee } from "@/components/home/LogoMarquee";
import { About } from "@/components/home/About";
import { ForWhomStack } from "@/components/home/ForWhomStack";
import { Benefits } from "@/components/home/Benefits";
import { Contact } from "@/components/home/Contact";

const Index = () => {
  const { hash } = useLocation();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const openContact = () => setIsContactOpen(true);

  // Obsługa linków typu /#services (np. otwartych w nowej karcie)
  useEffect(() => {
    if (!hash) return;
    const timer = window.setTimeout(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 150);
    return () => window.clearTimeout(timer);
  }, [hash]);

  const copy = homePl;

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Strategia marketingowa i doradztwo | Digitilio"
        description="Pomagam firmom uporządkować marketing, ustalić priorytety i przełożyć strategię na działania, które da się realnie wdrożyć."
        canonical="https://digitilio.pl/"
        alternates={HOME_ALTERNATES}
      />
      <StructuredData data={digitilioSiteSchema} />
      <Navigation />

      <main>
        <Hero copy={copy.hero} onCta={openContact} />
        <Problem copy={copy.problem} />
        <Unify copy={copy.unify} />
        <ServicesStepper copy={copy.services} />
        <ProcessWords copy={copy.process} />
        <WorkTrack copy={copy.work} />
        <LogoMarquee copy={copy.logos} />
        <About copy={copy.about} onCta={openContact} />
        <ForWhomStack copy={copy.forWhom} />
        <Benefits copy={copy.benefits} />
        <LatestArticles />
        <Contact copy={copy.contact} onCta={openContact} />
      </main>

      <Footer />
      <ContactFormDialog isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
};

export default Index;
