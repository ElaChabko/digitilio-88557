import { ArrowRight, Linkedin, Mail } from "lucide-react";

import { SEO, HOME_ALTERNATES } from "@/components/SEO";
import { StructuredData } from "@/components/StructuredData";
import { ContactForm } from "@/components/ContactForm";
import { ORGANIZATION_ID, PERSON_ID } from "@/lib/structuredData";
import { OPEN_COOKIE_SETTINGS_EVENT } from "@/lib/consent";

import logo from "@/assets/logo-nav.webp";
import heroPortrait from "@/assets/hero-portrait.webp";
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
    sector: "Elevator & lift manufacturer",
    work: "Brand narrative for a technical company, communication of completed projects and a clear content approval process.",
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
  name: "Digitilio – Marketing strategy & B2B communication",
  inLanguage: "en",
  isPartOf: { "@id": `${SITE}/#website` },
  about: { "@id": ORGANIZATION_ID },
  author: { "@id": PERSON_ID },
};

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

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Marketing strategy & B2B communication | Digitilio"
        description="I help B2B and technology companies bring order to their marketing, set priorities and turn strategy into work their team can actually implement."
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

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-secondary/10 to-background pb-20 pt-32 sm:pb-24 sm:pt-36 lg:pb-28 lg:pt-40">
        <div
          className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-primary/[0.12] blur-[120px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-40 -left-40 h-[460px] w-[460px] rounded-full bg-accent/[0.12] blur-[120px]"
          aria-hidden="true"
        />

        <div className="container relative z-10 mx-auto px-4 sm:px-6">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div className="hero-fade-up space-y-7 sm:space-y-9">
              <p className="text-sm font-medium tracking-wide text-primary sm:text-base">
                Digitilio · Marketing strategy &amp; B2B communication
              </p>

              <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem]">
                <span className="block">Fewer random tactics.</span>
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Better marketing decisions.
                </span>
              </h1>

              <p className="max-w-2xl text-lg font-light leading-relaxed text-muted-foreground sm:text-xl lg:text-2xl">
                I help B2B and technology companies bring order to their
                marketing, set priorities and turn strategy into work their
                team can actually implement.
              </p>

              <div className="flex flex-col items-start gap-4">
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

            <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
              <div className="overflow-hidden rounded-2xl shadow-xl md:rounded-3xl">
                <img
                  src={heroPortrait}
                  alt="Ela Chabko – Digitilio"
                  width={768}
                  height={960}
                  className="h-auto w-full object-cover"
                  loading="eager"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO I WORK WITH */}
      <section className="bg-background py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <p className="mb-4 text-sm font-medium tracking-wide text-primary sm:text-base">
              Who I work with
            </p>
            <h2 className="max-w-3xl text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Companies with real expertise and messy marketing.
            </h2>

            <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
              {audiences.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-border/70 bg-secondary/5 p-7 sm:p-8"
                >
                  <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </article>
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

        <div className="container relative z-10 mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <p className="mb-5 text-sm font-medium tracking-wide text-primary-foreground/60 sm:text-base">
              How I can help
            </p>
            <h2 className="max-w-3xl text-3xl font-bold leading-[1.08] tracking-tight text-primary-foreground sm:text-4xl md:text-5xl">
              From diagnosing the problem to supporting implementation.
            </h2>
            <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-primary-foreground/70 sm:text-xl">
              The scope is matched to your situation, not to a ready-made
              package.
            </p>

            <div className="mt-12 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:gap-6">
              {services.map((service) => (
                <article
                  key={service.number}
                  className="relative overflow-hidden rounded-2xl border border-primary-foreground/10 bg-background/[0.06] p-7 sm:p-8 lg:p-10"
                >
                  <span className="text-sm font-medium text-primary-foreground/50 sm:text-base">
                    {service.number}
                  </span>
                  <h3 className="mt-8 text-2xl font-semibold leading-tight tracking-tight text-primary-foreground sm:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-5 text-base leading-relaxed text-primary-foreground/70 sm:text-lg">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-10 flex max-w-3xl items-start gap-4">
              <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary-foreground/50" />
              <p className="text-base leading-relaxed text-primary-foreground/65 sm:text-lg">
                Need a website or a web app as well? I work with a trusted
                development team, so strategy, content and build can come from
                one place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="bg-background py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <p className="mb-4 text-sm font-medium tracking-wide text-primary sm:text-base">
              Selected experience
            </p>
            <h2 className="max-w-3xl text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Complex products, explained simply.
            </h2>
            <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-muted-foreground">
              Recent work, described without client names.
            </p>

            <div className="mt-12 divide-y divide-border/70 border-y border-border/70">
              {experience.map((item) => (
                <div
                  key={item.sector}
                  className="grid grid-cols-1 gap-3 py-7 md:grid-cols-[0.8fr_1.2fr] md:gap-10"
                >
                  <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                    {item.sector}
                  </h3>
                  <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {item.work}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="bg-secondary/5 py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <p className="mb-4 text-sm font-medium tracking-wide text-primary sm:text-base">
              How we would work together
            </p>
            <h2 className="max-w-3xl text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl">
              Remote, written and structured.
            </h2>

            <ol className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              {steps.map((step, index) => (
                <li
                  key={step.title}
                  className="rounded-2xl border border-border/70 bg-background p-6 sm:p-7"
                >
                  <span className="text-sm font-medium text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 text-lg font-semibold leading-snug text-foreground sm:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-background py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <div className="overflow-hidden rounded-2xl sm:rounded-3xl">
                <img
                  src={aboutPhoto}
                  alt="Ela Chabko – Digitilio"
                  width={768}
                  height={768}
                  className="w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-border/70 bg-background p-4 sm:p-5"
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
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center">
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
                  I work across strategy, B2B communication, LinkedIn,
                  content, paid social and analytics. I also teach marketing
                  in postgraduate programs and run trainings for companies. I
                  use AI and automation where they genuinely improve the
                  process or the quality of decisions.
                </p>
              </div>

              <div className="mt-8 border-l-2 border-primary/40 pl-5 sm:pl-6">
                <p className="max-w-xl text-lg font-medium leading-relaxed text-foreground sm:text-xl">
                  A strategy should help you make decisions, not just look
                  good in a slide deck.
                </p>
              </div>
            </div>
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
            <div>
              <p className="mb-4 text-sm font-medium tracking-wide text-primary sm:text-base">
                Contact
              </p>
              <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl md:text-5xl">
                Tell me where your marketing is stuck.
              </h2>
              <p className="mt-6 text-lg font-light leading-relaxed text-muted-foreground">
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
            </div>

            <div className="rounded-2xl border border-border/70 bg-background p-6 shadow-sm sm:p-8">
              <ContactForm lang="en" />
            </div>
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
