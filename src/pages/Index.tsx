import type { TopicId } from "@/content/topics";
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
import { hub } from "@/content/hub";
import { REALIZATIONS_PATH, featuredRealizations } from "@/content/realizations";

import { Hero } from "@/components/home/Hero";
import { OnePartner } from "@/components/home/OnePartner";
import { Pillars } from "@/components/home/Pillars";
import { WorkTrack } from "@/components/home/WorkTrack";
import { LogoMarquee } from "@/components/home/LogoMarquee";
import { About } from "@/components/home/About";
import { Contact } from "@/components/home/Contact";

/**
 * Strona główna = rozdroże dwóch filarów:
 * hero z dwojgiem drzwi → dlaczego jedno miejsce → dwa filary →
 * realizacje z obu → marki i opinie → O Digitilio → wiedza → kontakt.
 * Szczegóły marketingu są na /marketing, systemów na /systemy-dla-firm.
 */
const Index = () => {
  const { hash } = useLocation();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [topic, setTopic] = useState<TopicId | null>(null);
  const openContact = (picked?: TopicId) => {
    setTopic(picked ?? null);
    setIsContactOpen(true);
  };

  // Obsługa linków typu /#about (np. otwartych w nowej karcie)
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
      <SEO title={hub.seoTitle} description={hub.seoDescription} canonical="https://digitilio.pl/" alternates={HOME_ALTERNATES} />
      <StructuredData data={digitilioSiteSchema} />
      <Navigation />

      <main>
        <Hero copy={copy.hero} onCta={openContact} doors={hub.doors} doorsHelp={hub.doorsHelp} />
        <OnePartner {...hub.partner} />
        <Pillars {...hub.pillars} />
        <WorkTrack
          pill={hub.work.pill}
          title={hub.work.title}
          items={featuredRealizations()}
          allHref={REALIZATIONS_PATH}
          allLabel={hub.work.allLabel}
        />
        <LogoMarquee copy={copy.logos} />
        <About copy={copy.about} onCta={() => openContact()} />
        <LatestArticles />
        <Contact copy={hub.contact} onCta={() => openContact()} />
      </main>

      <Footer />
      <ContactFormDialog isOpen={isContactOpen} initialTopic={topic} onClose={() => setIsContactOpen(false)} />
    </div>
  );
};

export default Index;
