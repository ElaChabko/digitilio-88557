import { SEO, HOME_ALTERNATES } from "@/components/SEO";
import { StructuredData } from "@/components/StructuredData";
import { ContactForm } from "@/components/ContactForm";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ORGANIZATION_ID, PERSON_ID } from "@/lib/structuredData";
import { homeEn } from "@/content/home";

import { Hero } from "@/components/home/Hero";
import { HeroSwitcher, useHeroVariant } from "@/components/site/HeroSwitcher";
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

/**
 * Angielska wersja strony – te same sekcje i animacje co strona główna,
 * teksty z src/content/home.ts (homeEn). Kontakt przez formularz na dole strony.
 */

const SITE = "https://digitilio.pl";

const englishPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE}/en#webpage`,
  url: `${SITE}/en`,
  name: "Digitilio – Marketing strategy & consulting",
  inLanguage: "en",
  isPartOf: { "@id": `${SITE}/#website` },
  about: { "@id": ORGANIZATION_ID },
  author: { "@id": PERSON_ID },
};

const scrollToContact = () =>
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });

const English = () => {
  const copy = homeEn;
  const hero = useHeroVariant();

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Marketing strategy & consulting | Digitilio"
        description="I help companies bring order to their marketing, set priorities and turn strategy into work their team can actually implement."
        canonical={`${SITE}/en`}
        lang="en"
        alternates={HOME_ALTERNATES}
      />
      <StructuredData data={englishPageSchema} />
      <Navigation lang="en" onContact={scrollToContact} />
      {hero.isPreview && <HeroSwitcher variant={hero.variant} choose={hero.choose} />}

      <main>
        <Hero copy={copy.hero} onCta={scrollToContact} variant={hero.variant} />
        <Problem copy={copy.problem} />
        <Unify copy={copy.unify} />
        <ServicesStepper copy={copy.services} />
        <ProcessWords copy={copy.process} />
        <WorkTrack copy={copy.work} />
        <LogoMarquee copy={copy.logos} />
        <About copy={copy.about} onCta={scrollToContact} />
        <ForWhomStack copy={copy.forWhom} />
        <Benefits copy={copy.benefits} />
        <Contact copy={copy.contact}>
          <div className="rounded-[2rem] bg-white p-6 text-foreground shadow-2xl sm:p-8">
            <ContactForm lang="en" />
          </div>
        </Contact>
      </main>

      <Footer lang="en" />
    </div>
  );
};

export default English;
