import { useState } from "react";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SEO, SITE_URL } from "@/components/SEO";
import { ContactFormDialog } from "@/components/ContactFormDialog";
import { LatestArticles } from "@/components/LatestArticles";
import { PageHero } from "@/components/site/PageHero";
import { ActionButton } from "@/components/site/motion";
import { homePl } from "@/content/home";
import { REALIZATIONS_PATH, realizationsFor } from "@/content/realizations";
import type { TopicId } from "@/content/topics";

import { Problem } from "@/components/home/Problem";
import { Unify } from "@/components/home/Unify";
import { Services } from "@/components/home/Services";
import { Process } from "@/components/home/Process";
import { WorkTrack } from "@/components/home/WorkTrack";
import { ForWhom } from "@/components/home/ForWhom";
import { Benefits } from "@/components/home/Benefits";
import { Contact } from "@/components/home/Contact";

/**
 * Marketing: pierwszy filar Digitilio, w głosie „ja”.
 * Ten sam szkielet co Systemy dla firm: problem → oferta → proces → realizacje → kontakt.
 */
const Marketing = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [topic, setTopic] = useState<TopicId | null>(null);
  const openContact = (picked?: TopicId) => {
    setTopic(picked ?? null);
    setIsContactOpen(true);
  };
  const copy = homePl;

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Marketing dla firm: strategia, social media i Meta Ads | Digitilio"
        description="Porządkuję marketing i prowadzę go tak, żeby social media, kampanie i treści pracowały na zapytania od klientów, a nie tylko na zasięg."
        canonical={`${SITE_URL}/marketing`}
      />
      <Navigation />

      <main>
        <PageHero
          pill="Marketing"
          title={
            <>
              Marketing, który <span className="text-lilac">przyprowadza klientów.</span>
            </>
          }
          lead="Porządkuję marketing i prowadzę go tak, żeby social media, kampanie i treści pracowały na zapytania, a nie tylko na zasięg."
        >
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <ActionButton tone="white" onClick={() => openContact()}>
              Porozmawiajmy o marketingu
            </ActionButton>
            <a
              href="#work"
              className="min-h-[44px] content-center text-base font-semibold underline decoration-white/40 underline-offset-4 hover:decoration-white"
            >
              Zobacz realizacje
            </a>
          </div>
        </PageHero>

        <Problem copy={copy.problem} />
        <Unify copy={copy.unify} />
        <Services copy={copy.services} />
        <Process copy={copy.process} />
        <WorkTrack
          pill="Realizacje"
          title="Projekty, które przyniosły efekty."
          items={realizationsFor("marketing")}
          allHref={REALIZATIONS_PATH}
          allLabel="Wszystkie realizacje"
        />
        <ForWhom copy={copy.forWhom} />
        <Benefits copy={copy.benefits} />
        <LatestArticles />
        <Contact copy={copy.contact} onCta={() => openContact()} />
      </main>

      <Footer />
      <ContactFormDialog isOpen={isContactOpen} initialTopic={topic} onClose={() => setIsContactOpen(false)} />
    </div>
  );
};

export default Marketing;
