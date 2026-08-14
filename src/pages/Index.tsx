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
import { SEO } from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen">
            <SEO
        title="Strategia marketingowa i doradztwo | Digitilio"
        description="Pomagam firmom uporządkować marketing, ustalić priorytety i przełożyć strategię na działania, które da się realnie wdrożyć."
        canonical="https://digitilio.pl/"
      />
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
