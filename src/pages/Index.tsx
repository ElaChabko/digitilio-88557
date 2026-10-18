import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { LatestArticles } from "@/components/LatestArticles";
import { HomeHero } from "@/components/home/HomeHero";
import { LogoStrip } from "@/components/home/LogoStrip";
import { HomeProblem } from "@/components/home/HomeProblem";
import { HomeServices } from "@/components/home/HomeServices";
import { HomeWork } from "@/components/home/HomeWork";
import { HomeProcess } from "@/components/home/HomeProcess";
import { HomeAbout } from "@/components/home/HomeAbout";
import { HomeForWhom } from "@/components/home/HomeForWhom";
import { HomeBenefits } from "@/components/home/HomeBenefits";
import { HomeContact } from "@/components/home/HomeContact";
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
    <div className="min-h-screen bg-background">
            <SEO
        title="Strategia marketingowa i doradztwo | Digitilio"
        description="Pomagam firmom uporządkować marketing, ustalić priorytety i przełożyć strategię na działania, które da się realnie wdrożyć."
        canonical="https://digitilio.pl/"
        alternates={HOME_ALTERNATES}
      />
      <StructuredData data={digitilioSiteSchema} />
      <Navigation />
      <HomeHero />
      <LogoStrip />
      <HomeProblem />
      <HomeServices />
      <HomeWork />
      <HomeProcess />
      <HomeAbout />
      <HomeForWhom />
      <HomeBenefits />
      <LatestArticles />
      <HomeContact />
      <Footer />
    </div>
  );
};

export default Index;
