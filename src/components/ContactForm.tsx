import { useState } from "react";
import { Button } from "@/components/ui/button";

type Props = {
  onSuccess?: () => void;
};

type Status = null | "ok" | "err";

export const ContactForm = ({ onSuccess }: Props) => {
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
      website: String(form.get("website") || ""),
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
       * Event jest wysyłany dopiero po
       * potwierdzonym sukcesie backendu.
       */
      window.dataLayer = window.dataLayer || [];

      window.dataLayer.push({
        event: "lead_form_success",
        form_name: "contact",
      });

      setStatus("ok");
      formEl.reset();

      /*
       * Nie zamykamy formularza natychmiast.
       * Użytkownik powinien najpierw zobaczyć
       * potwierdzenie wysłania.
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
      noValidate={false}
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
          Imię{" "}
          <span className="font-normal text-muted-foreground">
            (opcjonalnie)
          </span>
        </label>

        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          maxLength={120}
          placeholder="Jak masz na imię?"
          className="w-full rounded-xl border bg-background px-4 py-3 outline-none transition-colors focus:border-primary"
        />
      </div>

      {/* EMAIL */}
      <div className="space-y-2">
        <label
          htmlFor="contact-email"
          className="text-sm font-medium text-foreground"
        >
          E-mail
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
          placeholder="twoj@email.pl"
          className="w-full rounded-xl border bg-background px-4 py-3 outline-none transition-colors focus:border-primary"
        />
      </div>

      {/* COMPANY */}
      <div className="space-y-2">
        <label
          htmlFor="contact-company"
          className="text-sm font-medium text-foreground"
        >
          Firma{" "}
          <span className="font-normal text-muted-foreground">
            (opcjonalnie)
          </span>
        </label>

        <input
          id="contact-company"
          name="company"
          type="text"
          autoComplete="organization"
          maxLength={160}
          placeholder="Nazwa firmy"
          className="w-full rounded-xl border bg-background px-4 py-3 outline-none transition-colors focus:border-primary"
        />
      </div>

      {/* MESSAGE */}
      <div className="space-y-2">
        <label
          htmlFor="contact-message"
          className="text-sm font-medium text-foreground"
        >
          Wiadomość
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
          placeholder="Napisz krótko, z czym mogę Ci pomóc."
          className="min-h-[140px] w-full resize-none rounded-xl border bg-background px-4 py-3 outline-none transition-colors focus:border-primary"
        />
      </div>

      {/* PRIVACY */}
      <p className="text-xs leading-relaxed text-muted-foreground">
        Administratorem podanych danych osobowych jest
        Elżbieta Chabko, prowadząca działalność gospodarczą
        pod nazwą Digitilio. Dane wykorzystam w celu
        odpowiedzi na Twoje zapytanie i prowadzenia związanej
        z nim korespondencji. Szczegółowe informacje dotyczące
        przetwarzania danych znajdziesz w{" "}
        <a
          href="/polityka-prywatnosci"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium underline underline-offset-2 transition-colors hover:text-foreground"
        >
          Polityce prywatności
        </a>
        .
      </p>

      {/* ACTION */}
      <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
        <Button
          type="submit"
          disabled={loading || status === "ok"}
        >
          {loading
            ? "Wysyłam..."
            : status === "ok"
              ? "Wysłano"
              : "Wyślij wiadomość"}
        </Button>

        <div
          aria-live="polite"
          className="min-h-5"
        >
          {status === "ok" && (
            <span className="text-sm text-muted-foreground">
              Dziękuję. Wiadomość została wysłana.
            </span>
          )}

          {status === "err" && (
            <span className="text-sm text-destructive">
              Nie udało się wysłać wiadomości. Spróbuj
              ponownie.
            </span>
          )}
        </div>
      </div>
    </form>
  );
};
