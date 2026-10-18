import { useState } from "react";
import { Button } from "@/components/ui/button";

type Lang = "pl" | "en";

type Props = {
  onSuccess?: () => void;
  lang?: Lang;
};

const COPY = {
  pl: {
    name: "Imię",
    optional: "(opcjonalnie)",
    namePh: "Jak masz na imię?",
    email: "E-mail",
    emailPh: "twoj@email.pl",
    company: "Firma",
    companyPh: "Nazwa firmy",
    message: "Wiadomość",
    messagePh: "Napisz krótko, z czym mogę Ci pomóc.",
    consent:
      "Chcę otrzymywać od Digitilio na podany adres e-mail informacje, materiały i oferty marketingowe dotyczące usług i marketingu. Zgodę mogę wycofać w dowolnym momencie.",
    privacyBefore:
      "Administratorem podanych danych osobowych jest Elżbieta Chabko, prowadząca działalność gospodarczą pod nazwą Digitilio. Dane wykorzystam w celu odpowiedzi na Twoje zapytanie i prowadzenia związanej z nim korespondencji. Szczegółowe informacje dotyczące przetwarzania danych znajdziesz w",
    privacyLink: "Polityce prywatności",
    privacyAfter: ".",
    sending: "Wysyłam...",
    sent: "Wysłano",
    send: "Wyślij wiadomość",
    ok: "Dziękuję. Wiadomość została wysłana.",
    err: "Nie udało się wysłać wiadomości. Spróbuj ponownie.",
  },
  en: {
    name: "Name",
    optional: "(optional)",
    namePh: "Your name",
    email: "Email",
    emailPh: "you@company.com",
    company: "Company",
    companyPh: "Company name",
    message: "Message",
    messagePh:
      "A few sentences about your company and what you need help with.",
    consent:
      "I would like to receive information, materials and marketing offers from Digitilio at the email address provided. I can withdraw this consent at any time.",
    privacyBefore:
      "Your personal data is controlled by Elżbieta Chabko, running a business under the name Digitilio (Poland). I will use it only to reply to your inquiry and for related correspondence. Details are in the",
    privacyLink: "Privacy Policy",
    privacyAfter: " (in Polish).",
    sending: "Sending...",
    sent: "Sent",
    send: "Send message",
    ok: "Thank you. Your message has been sent.",
    err: "The message could not be sent. Please try again.",
  },
} satisfies Record<Lang, Record<string, string>>;

type Status = null | "ok" | "err";

const MARKETING_CONSENT_VERSION = "2026-08-14";

export const ContactForm = ({ onSuccess, lang = "pl" }: Props) => {
  const t = COPY[lang];
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<Status>(null);

  const onSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);
    setStatus(null);

    const formEl = e.currentTarget;
    const form = new FormData(formEl);

    const payload = {
      name: String(form.get("name") || "").trim(),
      email: String(form.get("email") || "").trim(),
      company: String(form.get("company") || "").trim(),
      message: String(form.get("message") || "").trim(),

      // Honeypot
      website: String(form.get("website") || ""),

      // Dobrowolna zgoda marketingowa
      marketingConsent:
        form.get("marketingConsent") === "yes",

      // Przydatne do udokumentowania,
      // jaką wersję zgody zaakceptował użytkownik.
      marketingConsentVersion:
        MARKETING_CONSENT_VERSION,
    };

    if (!payload.email || !payload.message) {
      setStatus("err");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const raw = await res.text().catch(() => "");

      let data: any = null;

      try {
        data = raw ? JSON.parse(raw) : null;
      } catch {
        data = null;
      }

      if (!res.ok) {
        throw new Error("HTTP error");
      }

      if (data?.ok === false) {
        throw new Error("Backend ok=false");
      }

      /*
       * Event wysyłamy dopiero po potwierdzonym
       * sukcesie backendu.
       */
      window.dataLayer = window.dataLayer || [];

      window.dataLayer.push({
        event: "lead_form_success",
        form_name: "contact",
      });

      setStatus("ok");
      formEl.reset();

      /*
       * Dajemy użytkownikowi chwilę na zobaczenie
       * potwierdzenia przed zamknięciem modala.
       */
      if (onSuccess) {
        window.setTimeout(() => {
          onSuccess();
        }, 1800);
      }
    } catch {
      setStatus("err");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-5"
    >
      {/* HONEYPOT */}
      <div
        className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
        aria-hidden="true"
      >
        <label htmlFor="website">
          Website
        </label>

        <input
          id="website"
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* NAME */}
      <div className="space-y-2">
        <label
          htmlFor="contact-name"
          className="text-sm font-medium text-foreground"
        >
          {t.name}{" "}
          <span className="font-normal text-muted-foreground">
            {t.optional}
          </span>
        </label>

        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          maxLength={120}
          placeholder={t.namePh}
          className="w-full rounded-xl border bg-background px-4 py-3 outline-none transition-colors focus:border-primary"
        />
      </div>

      {/* EMAIL */}
      <div className="space-y-2">
        <label
          htmlFor="contact-email"
          className="text-sm font-medium text-foreground"
        >
          {t.email}
          <span
            className="ml-1 text-primary"
            aria-hidden="true"
          >
            *
          </span>
        </label>

        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          maxLength={254}
          placeholder={t.emailPh}
          className="w-full rounded-xl border bg-background px-4 py-3 outline-none transition-colors focus:border-primary"
        />
      </div>

      {/* COMPANY */}
      <div className="space-y-2">
        <label
          htmlFor="contact-company"
          className="text-sm font-medium text-foreground"
        >
          {t.company}{" "}
          <span className="font-normal text-muted-foreground">
            {t.optional}
          </span>
        </label>

        <input
          id="contact-company"
          name="company"
          type="text"
          autoComplete="organization"
          maxLength={160}
          placeholder={t.companyPh}
          className="w-full rounded-xl border bg-background px-4 py-3 outline-none transition-colors focus:border-primary"
        />
      </div>

      {/* MESSAGE */}
      <div className="space-y-2">
        <label
          htmlFor="contact-message"
          className="text-sm font-medium text-foreground"
        >
          {t.message}
          <span
            className="ml-1 text-primary"
            aria-hidden="true"
          >
            *
          </span>
        </label>

        <textarea
          id="contact-message"
          name="message"
          required
          maxLength={5000}
          placeholder={t.messagePh}
          className="min-h-[140px] w-full resize-none rounded-xl border bg-background px-4 py-3 outline-none transition-colors focus:border-primary"
        />
      </div>

      {/* MARKETING CONSENT */}
      <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-border bg-muted/20 p-4">
        <input
          type="checkbox"
          name="marketingConsent"
          value="yes"
          className="mt-1 h-4 w-4 shrink-0 accent-primary"
        />

        <span className="text-xs leading-relaxed text-muted-foreground">
          {t.consent}
        </span>
      </label>

      {/* PRIVACY */}
      <p className="text-xs leading-relaxed text-muted-foreground">
        {t.privacyBefore}{" "}
        <a
          href="/polityka-prywatnosci"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium underline underline-offset-2 transition-colors hover:text-foreground"
        >
          {t.privacyLink}
        </a>
        {t.privacyAfter}
      </p>

      {/* ACTION */}
      <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
        <Button
          type="submit"
          disabled={loading || status === "ok"}
        >
          {loading
            ? t.sending
            : status === "ok"
              ? t.sent
              : t.send}
        </Button>

        <div
          aria-live="polite"
          className="min-h-5"
        >
          {status === "ok" && (
            <span className="text-sm text-muted-foreground">
              {t.ok}
            </span>
          )}

          {status === "err" && (
            <span className="text-sm text-destructive">
              {t.err}
            </span>
          )}
        </div>
      </div>
    </form>
  );
};
