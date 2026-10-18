import { ArrowRight, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

import { SEO, HOME_ALTERNATES } from "@/components/SEO";
import { StructuredData } from "@/components/StructuredData";
import { ContactForm } from "@/components/ContactForm";
import { ORGANIZATION_ID, PERSON_ID } from "@/lib/structuredData";
import { OPEN_COOKIE_SETTINGS_EVENT } from "@/lib/consent";
import { useIsMobile } from "@/hooks/use-mobile";

import logo from "@/assets/logo-nav.webp";
import heroPortrait from "@/assets/hero-portrait.webp";
import heroVisual from "@/assets/hero-visual.jpg";
import aboutPhoto from "@/assets/about-photo-new.webp";

/**
 * Angielska wersja strony – jedna podstrona /en.
 * Samodzielna (własne menu i stopka), żeby nie mieszać języków
 * z polskimi sekcjami strony głównej.
 */

const SITE = "https://digitilio.pl";
const LINKEDIN = "https://www.linkedin.com/in/ela-chabko/";
const EMAIL = "elachabko@digitilio.pl";

const services = [
  {
    number: "01",
    title: "Marketing audit",
    description:
      "For when there is a lot going on in marketing, but it is hard to tell what is worth developing. I review your communication, channels and data, then sort out the problems and priorities.",
  },
  {
    number: "02",
    title: "Marketing & communication strategy",
    description:
      "For when you need one direction instead of disconnected activities. Positioning, messaging, the role of each channel, goals and an implementation plan your team can follow.",
  },
  {
    number: "03",
    title: "Implementation support",
    description:
      "For when the direction is set and you need hands-on help: LinkedIn and B2B content, Meta Ads, GA4 and marketing analytics, or practical use of AI in marketing workflows.",
  },
  {
    number: "04",
    title: "Fractional marketing support",
    description:
      "Ongoing, part-time senior marketing input: regular review of results, priorities and day-to-day decisions, without hiring a full-time marketing manager.",
  },
];

const audiences = [
  {
    title: "B2B technology & SaaS",
    description:
      "Products that are hard to explain in one sentence and need communication that builds trust with technical buyers.",
  },
  {
    title: "Industrial & engineering companies",
    description:
      "Firms with strong expertise and real projects, but little time to turn them into consistent communication.",
  },
  {
    title: "Consumer brands & e-commerce",
    description:
      "Online stores and service brands that run ads and social media, but want clearer data and better-spent budgets.",
  },
  {
    title: "Teams without a senior marketer",
    description:
      "Founders and small teams who do marketing “on the side” and want an outside view on what to focus on.",
  },
];

const experience = [
  {
    sector: "Logistics software (B2B SaaS)",
    work: "Content strategy and LinkedIn communication for load-planning software, moving from ad-hoc posts to content with a clear business role, based on analytics data.",
  },
  {
    sector: "AI & software development",
    work: "Positioning, service structure and website messaging, including communication aimed at the US market.",
  },
  {
    sector: "E-commerce, medical devices",
    work: "Meta Ads management and reporting: ROAS, CPA, attribution and GA4 analysis to decide where the budget should go.",
  },
];

const steps = [
  {
    title: "Send a short brief",
    description:
      "Use the form below or email me. A few sentences about your company, your situation and what you would like to change is enough.",
  },
  {
    title: "I reply with questions or a proposal",
    description:
      "Usually within two business days. If it is not a good fit, I will tell you directly.",
  },
  {
    title: "We work mostly asynchronously",
    description:
      "Shared documents, written summaries and email. Calls when they genuinely help, so the time-zone difference is not a blocker.",
  },
  {
    title: "Clear scope and regular reporting",
    description:
      "Every collaboration has a defined scope, deliverables and a simple way of measuring progress.",
  },
];

const stats = [
  { value: "20+", label: "brands", hint: "B2B and B2C projects" },
  { value: "25+", label: "trainings", hint: "online and in person" },
  { value: "8+", label: "years", hint: "marketing and communication" },
];

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

// Te same krzywe i tempo co w polskiej wersji strony
const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, delay, ease: EASE },
});

// Deterministyczne pozycje cząsteczek (jak w Hero.tsx) – bez skoku przy hydracji
const particle = (i: number, salt: number) => {
  const x = Math.sin(i * 12.9898 + salt * 78.233) * 43758.5453;
  return x - Math.floor(x);
};

// Wyrazy z łącznikiem (np. „e-commerce”) nie łamią się na końcu linii
const keepHyphenated = (text: string) =>
  text.split(/(\S+-\S+)/).map((part, i) =>
    /\S+-\S+/.test(part) ? (
      <span key={i} className="whitespace-nowrap">
        {part}
      </span>
    ) : (
      part
    )
  );

const scrollToContact = (event: React.MouseEvent<HTMLAnchorElement>) => {
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) {
    return;
  }

  event.preventDefault();
  document
    .getElementById("contact")
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const English = () => {
  const currentYear = new Date().getFullYear();
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Marketing strategy & consulting | Digitilio"
        description="I help companies bring order to their marketing, set priorities and turn strategy into work their team can actually implement."
        canonical={`${SITE}/en`}
        lang="en"
        alternates={HOME_ALTERNATES}
      />
      <StructuredData data={englishPageSchema} />

      {/* NAV */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-border/50 bg-background/90 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-4 sm:px-6">
          <a href="/en" aria-label="Digitilio – English page">
            <img
              src={logo}
              alt="Digitilio"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
          </a>

          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="/"
              hrefLang="pl"
              lang="pl"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Polski
            </a>

            <a
              href="#contact"
              onClick={scrollToContact}
              className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* HERO – tło i animacje jak w polskim Hero.tsx */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-background via-secondary/10 to-background">
        <div className="absolute inset-0 z-0">
          <img
            src={heroVisual}
            alt=""
            className="h-full w-full object-cover"
            loading="eager"
            decoding="async"
            style={{ opacity: 0.35 }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
        </div>

        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "radial-gradient(at 40% 20%, hsl(var(--primary) / 0.5) 0px, transparent 50%), radial-gradient(at 80% 0%, hsl(var(--accent) / 0.45) 0px, transparent 50%), radial-gradient(at 0% 50%, hsl(var(--secondary) / 0.4) 0px, transparent 50%), radial-gradient(at 80% 50%, hsl(var(--primary) / 0.4) 0px, transparent 50%), radial-gradient(at 0% 100%, hsl(var(--accent) / 0.45) 0px, transparent 50%), radial-gradient(at 80% 100%, hsl(var(--primary) / 0.5) 0px, transparent 50%), radial-gradient(at 0% 0%, hsl(var(--accent) / 0.4) 0px, transparent 50%)",
            opacity: 0.8,
          }}
        />

        {[...Array(isMobile ? 8 : 30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute z-[5] h-2 w-2 rounded-full bg-primary/60"
            style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
            initial={{
              left: `${particle(i, 1) * 100}%`,
              top: `${particle(i, 2) * 100}%`,
            }}
            animate={{ y: [0, -30, 0], opacity: [0.4, 0.8, 0.4] }}
            transition={{
              duration: 3 + particle(i, 3) * 2,
              repeat: Infinity,
              ease: "linear",
              delay: particle(i, 4) * 2,
            }}
          />
        ))}

        <motion.div
          className="absolute left-1/4 top-1/4 z-[1] h-[400px] w-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--primary) / 0.4) 0%, transparent 70%)",
            filter: isMobile ? "blur(30px)" : "blur(40px)",
            opacity: 0.5,
          }}
          animate={isMobile ? {} : { scale: [1, 1.2, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/4 z-[1] h-[350px] w-[350px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--accent) / 0.4) 0%, transparent 70%)",
            filter: isMobile ? "blur(30px)" : "blur(40px)",
            opacity: 0.45,
          }}
          animate={isMobile ? {} : { scale: [1, 1.3, 1], opacity: [0.45, 0.65, 0.45] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 1 }}
        />

        <div
          className="absolute inset-0 z-[3] hidden md:block"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--primary) / 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--primary) / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
            maskImage: "radial-gradient(ellipse at center, black 0%, transparent 75%)",
            opacity: 0.7,
          }}
        />

        <div className="container relative z-10 mx-auto px-4 pb-20 pt-32 sm:px-6 sm:py-24 lg:py-32">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="hero-fade-up space-y-6 sm:space-y-8 md:space-y-10">
              <p
                className="hero-fade-up text-sm font-medium tracking-wide text-primary sm:text-base"
                style={{ animationDelay: "0.1s" }}
              >
                Digitilio · Marketing strategy &amp; consulting
              </p>

              <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-[3.75rem]">
                <span className="hero-slide-in block" style={{ animationDelay: "0.2s" }}>
                  Fewer random tactics.
                </span>
                <span
                  className="hero-slide-in block overflow-visible"
                  style={{ animationDelay: "0.4s" }}
                >
                  <span className="box-decoration-clone bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Better marketing decisions.
                  </span>
                </span>
              </h1>

              <p
                className="hero-fade-up max-w-4xl text-lg font-normal leading-relaxed text-muted-foreground sm:text-xl md:text-2xl"
                style={{ animationDelay: "0.8s" }}
              >
                I help B2B and B2C companies bring order to their marketing,
                set priorities and turn strategy into work their team can
                actually implement.
              </p>

              <div
                className="hero-fade-up flex flex-col items-start gap-4"
                style={{ animationDelay: "1s" }}
              >
                <a
                  href="#contact"
                  onClick={scrollToContact}
                  className="group inline-flex items-center rounded-full bg-primary px-7 py-4 text-base font-medium text-primary-foreground shadow-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-xl sm:text-lg"
                >
                  Tell me about your project
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
                <p className="text-sm text-muted-foreground sm:text-base">
                  Based in Poland (CET) · I work in English, mostly
                  asynchronously
                </p>
              </div>
            </div>

            <div
              className="hero-scale-in group relative mt-6 lg:mt-0"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="relative mx-auto max-w-md overflow-hidden rounded-2xl md:max-w-lg md:rounded-3xl lg:mx-0 lg:max-w-none">
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/30 via-accent/20 to-secondary/30 opacity-50 blur-xl md:rounded-3xl"
                  whileHover={isMobile ? {} : { opacity: 0.8 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div
                  className="relative overflow-hidden rounded-2xl shadow-xl md:rounded-3xl"
                  whileHover={isMobile ? {} : { scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={heroPortrait}
                    alt="Ela Chabko – Digitilio"
                    width={768}
                    height={960}
                    className="h-auto w-full object-cover"
                    loading="eager"
                    decoding="async"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO I WORK WITH */}
      <section className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-28">
        <motion.div
          className="pointer-events-none absolute -left-40 top-10 h-[500px] w-[500px] rounded-full bg-primary/[0.07] blur-[120px]"
          animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        />
        <motion.div
          className="pointer-events-none absolute -bottom-48 right-0 h-[520px] w-[520px] rounded-full bg-accent/[0.07] blur-[120px]"
          animate={{ x: [0, -30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden="true"
        />

        <div className="container relative z-10 mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <motion.div {...fadeUp()}>
              <p className="mb-4 text-sm font-medium tracking-wide text-primary sm:text-base">
                Who I work with
              </p>
              <h2 className="max-w-3xl text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl">
                Companies with real expertise and scattered marketing.
              </h2>
            </motion.div>

            <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {audiences.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.08, ease: EASE }}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-border/70 bg-background/80 p-7 shadow-sm backdrop-blur-sm transition-shadow duration-300 hover:shadow-md sm:p-8"
                >
                  <h3 className="text-xl font-semibold tracking-tight text-foreground">
                    {keepHyphenated(item.title)}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {keepHyphenated(item.description)}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative overflow-hidden bg-primary py-20 sm:py-24 lg:py-28">
        <div
          className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-accent/20 blur-[120px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-48 -right-40 h-[520px] w-[520px] rounded-full bg-background/10 blur-[120px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          aria-hidden="true"
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        <div className="container relative z-10 mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <motion.div {...fadeUp()}>
              <p className="mb-5 text-sm font-medium tracking-wide text-primary-foreground/60 sm:text-base">
                How I can help
              </p>
              <h2 className="max-w-3xl text-3xl font-bold leading-[1.08] tracking-tight text-primary-foreground sm:text-4xl md:text-5xl">
                From diagnosing the problem to supporting implementation.
              </h2>
              <p className="mt-6 max-w-2xl text-lg font-normal leading-relaxed text-primary-foreground/70 sm:text-xl">
                The scope is matched to your situation, not to a ready-made
                package.
              </p>
            </motion.div>

            <div className="mt-12 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:gap-6">
              {services.map((service, index) => (
                <motion.article
                  key={service.number}
                  {...fadeUp(0.15 + index * 0.1)}
                  whileHover={{ y: -4 }}
                  className="group relative min-h-[260px] overflow-hidden rounded-2xl border border-primary-foreground/10 bg-background/[0.06] p-7 backdrop-blur-sm transition-colors duration-300 hover:bg-background/[0.1] sm:p-8 lg:p-10"
                >
                  <span
                    className="pointer-events-none absolute -right-2 -top-8 select-none text-[8rem] font-bold leading-none tracking-tighter text-primary-foreground/[0.04] sm:text-[10rem]"
                    aria-hidden="true"
                  >
                    {service.number}
                  </span>

                  <div className="relative z-10 flex h-full flex-col">
                    <span className="mb-8 text-sm font-medium text-primary-foreground/50 sm:text-base">
                      {service.number}
                    </span>
                    <h3 className="max-w-md text-2xl font-semibold leading-tight tracking-tight text-primary-foreground transition-colors duration-300 group-hover:text-white sm:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/70 sm:text-lg">
                      {keepHyphenated(service.description)}
                    </p>
                    <div className="mt-auto pt-8">
                      <div className="h-px w-12 bg-primary-foreground/30 transition-all duration-500 group-hover:w-24 group-hover:bg-primary-foreground/60" />
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            <motion.div
              {...fadeUp(0.5)}
              className="mt-10 flex max-w-3xl items-start gap-4"
            >
              <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary-foreground/50" />
              <p className="text-base leading-relaxed text-primary-foreground/65 sm:text-lg">
                Need a website or a web app as well? I work with a trusted
                development team, so strategy, content and build can come from
                one place.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="bg-background py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <motion.div {...fadeUp()}>
              <p className="mb-4 text-sm font-medium tracking-wide text-primary sm:text-base">
                Selected experience
              </p>
              <h2 className="max-w-3xl text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl">
                Different industries, the same approach.
              </h2>
              <p className="mt-6 max-w-2xl text-lg font-normal leading-relaxed text-muted-foreground">
                A few examples of projects I am working on.
              </p>
            </motion.div>

            <div className="mt-12 divide-y divide-border/70 border-y border-border/70">
              {experience.map((item, index) => (
                <motion.div
                  key={item.sector}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: index * 0.1, ease: EASE }}
                  className="grid grid-cols-1 gap-3 py-7 md:grid-cols-[0.8fr_1.2fr] md:gap-10"
                >
                  <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                    {keepHyphenated(item.sector)}
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {keepHyphenated(item.work)}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="relative overflow-hidden bg-secondary/5 py-20 sm:py-24">
        <div className="container relative z-10 mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <motion.div {...fadeUp()}>
              <p className="mb-4 text-sm font-medium tracking-wide text-primary sm:text-base">
                How we would work together
              </p>
              <h2 className="max-w-3xl text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl">
                Remote, written and structured.
              </h2>
            </motion.div>

            <ol className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {steps.map((step, index) => (
                <motion.li
                  key={step.title}
                  {...fadeUp(0.1 + index * 0.1)}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-border/70 bg-background p-6 shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-7"
                >
                  <span className="text-sm font-medium text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 text-lg font-semibold leading-snug text-foreground sm:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {keepHyphenated(step.description)}
                  </p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="relative overflow-hidden bg-background py-20 sm:py-24 lg:py-28">
        <div
          className="pointer-events-none absolute -bottom-40 -right-32 h-[480px] w-[480px] rounded-full bg-primary/[0.08] blur-[120px]"
          aria-hidden="true"
        />

        <div className="container relative z-10 mx-auto px-4 sm:px-6">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -60, scale: 0.96 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.75, ease: EASE }}
                className="relative overflow-hidden rounded-2xl sm:rounded-3xl"
              >
                <img
                  src={aboutPhoto}
                  alt="Ela Chabko – Digitilio"
                  width={768}
                  height={768}
                  className="w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/15 via-transparent to-transparent" />
              </motion.div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: index * 0.1, ease: EASE }}
                    whileHover={{ y: -4 }}
                    className="rounded-2xl border border-border/70 bg-background/80 p-4 shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-5"
                  >
                    <span className="block text-2xl font-bold tracking-tight text-primary sm:text-4xl">
                      {stat.value}
                    </span>
                    <span className="mt-1 block text-sm font-semibold text-foreground sm:text-base">
                      {stat.label}
                    </span>
                    <span className="mt-2 hidden text-sm leading-relaxed text-muted-foreground sm:block">
                      {stat.hint}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, delay: 0.1, ease: EASE }}
              className="flex flex-col justify-center"
            >
              <p className="mb-4 text-sm font-medium tracking-wide text-primary sm:text-base">
                About me
              </p>
              <h2 className="max-w-2xl text-3xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-4xl md:text-5xl">
                I have seen marketing from several sides of the table.
              </h2>

              <div className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                <p>
                  I’m <strong className="font-semibold text-foreground">Ela Chabko</strong>,
                  the founder of Digitilio, a one-person marketing consultancy
                  based in Poland. I combine strategic thinking with years of
                  day-to-day marketing execution, so I judge recommendations
                  not by how they look in a presentation, but by whether your
                  team can actually use them.
                </p>
                <p>
                  I work across strategy, communication, social media,
                  content, paid campaigns and analytics, for both B2B and
                  consumer brands. I also teach marketing in postgraduate
                  programs and run trainings for companies. I use AI and
                  automation where they genuinely improve the process or the
                  quality of decisions.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.35, ease: EASE }}
                className="mt-8 border-l-2 border-primary/40 pl-5 sm:pl-6"
              >
                <p className="max-w-xl text-lg font-medium leading-relaxed text-foreground sm:text-xl">
                  A strategy should help you make decisions, not just look
                  good in a slide deck.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="scroll-mt-24 bg-secondary/5 py-20 sm:py-24 lg:py-28"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <motion.div {...fadeUp()}>
              <p className="mb-4 text-sm font-medium tracking-wide text-primary sm:text-base">
                Contact
              </p>
              <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl">
                Tell me where your marketing is stuck.
              </h2>
              <p className="mt-6 text-lg font-normal leading-relaxed text-muted-foreground">
                Write a few sentences about your company and what you need. I
                will get back to you by email, usually within two business
                days.
              </p>

              <div className="mt-8 space-y-3">
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 text-base text-foreground transition-colors hover:text-primary"
                >
                  <Mail className="h-5 w-5 text-primary" />
                  {EMAIL}
                </a>
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-base text-foreground transition-colors hover:text-primary"
                >
                  <Linkedin className="h-5 w-5 text-primary" />
                  LinkedIn
                </a>
              </div>
            </motion.div>

            <motion.div
              {...fadeUp(0.15)}
              className="rounded-2xl border border-border/70 bg-background p-6 shadow-sm sm:p-8"
            >
              <ContactForm lang="en" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary text-primary-foreground">
        <div className="container mx-auto grid grid-cols-1 gap-6 px-4 py-8 sm:px-6 md:grid-cols-[1fr_auto] md:items-center">
          <p className="text-center text-sm text-white/60 md:text-left">
            © {currentYear} Digitilio. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 md:justify-end">
            <a
              href="/"
              hrefLang="pl"
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              Wersja polska
            </a>
            <a
              href="/polityka-prywatnosci"
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              Privacy Policy (PL)
            </a>
            <button
              type="button"
              onClick={() =>
                window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT))
              }
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              Cookie settings
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default English;
