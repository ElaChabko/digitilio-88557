import aboutPhoto from "@/assets/about-photo.jpg";
import { CircleDecoration } from "@/components/CircleDecoration";
export const About = () => {
  return <section id="about" className="py-20 bg-secondary/30 relative overflow-hidden">
      <CircleDecoration className="top-1/2 -right-16" size="lg" opacity={0.07} />
      <CircleDecoration className="bottom-20 left-10" size="md" opacity={0.06} />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="animate-fade-in">
            <img src={aboutPhoto} alt="Specjalista Digitilio" className="rounded-2xl shadow-2xl w-full h-auto" />
          </div>
          <div className="animate-slide-up space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">Cześć, jestem Ela z Digitilio</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg">
                Od 2018 roku wspieram firmy i marki w budowaniu skutecznej obecności online. 
                Pracowałam m.in. z branżą przemysłową, IT i retail.
              </p>
              <p className="text-lg">
                Łączę strategiczne podejście z umiejętnością wykorzystywania AI – dzięki temu moi 
                klienci zyskują przewagę na rynku.
              </p>
              <p className="text-lg">
                Wierzę, że komunikacja to nie tylko algorytmy i zasięgi, ale emocje, które sprawiają, 
                że marka zostaje w pamięci.
              </p>
              <p className="text-lg font-medium">Ela Chabko</p>
            </div>
            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Social Media
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                AI & Automatyzacja
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Content Marketing
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Strategia
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};