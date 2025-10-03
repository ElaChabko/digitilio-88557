import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { About } from "@/components/About";
import { ForWhom } from "@/components/ForWhom";
import { Benefits } from "@/components/Benefits";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
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
