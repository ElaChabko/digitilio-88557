import { useState } from "react";
import { Button } from "@/components/ui/button";

type Props = {
  onSuccess?: () => void;
};

type Status = null | "ok" | "err";

export const ContactForm = ({ onSuccess }: Props) => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<Status>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
      website: String(form.get("website") || ""), // honeypot
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
          "Accept": "application/json",
        },
        body: JSON.stringify(payload),
      });

      // Zawsze czytamy jako tekst (Cloudflare/edge potrafi oddać puste lub HTML)
      const raw = await res.text().catch(() => "");
      let data: any = null;

      try {
        data = raw ? JSON.parse(raw) : null;
      } catch {
        data = null;
      }

      // Log diagnostyczny – możesz potem usunąć
      // console.log("CONTACT:", { status: res.status, ok: res.ok, raw, data });

      // Jeśli HTTP ok, to traktujemy jako sukces,
      // chyba że backend jawnie zwrócił { ok: false }
      if (!res.ok) throw new Error("HTTP error");
      if (data?.ok === false) throw new Error("Backend ok=false");

      setStatus("ok");
      formEl.reset();
      onSuccess?.();
    } catch {
      setStatus("err");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* honeypot */}
      <div className="absolute left-[-9999px] top-auto w-px h-px overflow-hidden">
        <label>
          Website
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />
        </label>
      </div>

      <input
        name="name"
        placeholder="Imię (opcjonalnie)"
        className="w-full rounded-xl border px-4 py-3 bg-background"
      />

      <input
        name="email"
        type="email"
        required
        placeholder="E-mail"
        className="w-full rounded-xl border px-4 py-3 bg-background"
      />

      <input
        name="company"
        placeholder="Firma (opcjonalnie)"
        className="w-full rounded-xl border px-4 py-3 bg-background"
      />

      <textarea
        name="message"
        required
        placeholder="Wiadomość"
        className="w-full rounded-xl border px-4 py-3 bg-background min-h-[140px] resize-none"
      />

      <div className="flex items-center gap-3">
        <Button type="submit" disabled={loading}>
          {loading ? "Wysyłam..." : "Wyślij"}
        </Button>

        {status === "ok" && (
          <span className="text-sm text-muted-foreground">
            Wysłano. Odezwię się najszybciej jak mogę.
          </span>
        )}

        {status === "err" && (
          <span className="text-sm text-destructive">
            Coś poszło nie tak. Spróbuj ponownie.
          </span>
        )}
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed mt-4">
  Administratorem Twoich danych osobowych jest Digitilio. Dane przetwarzane są
  wyłącznie w celu obsługi zapytania przesłanego przez formularz kontaktowy.
  Podanie danych jest dobrowolne, ale niezbędne do udzielenia odpowiedzi.{" "}
  <a
    href="https://digitilio.pl/polityka-prywatnosci"
    target="_blank"
    rel="noopener noreferrer"
    className="underline hover:text-foreground"
  >
    Polityka prywatności
  </a>
  .
</p>

    </form>
  );
};
