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

    // Minimalna walidacja po stronie UI (backend i tak waliduje)
    if (!payload.email || !payload.message) {
      setStatus("err");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // Cloudflare/Fetch czasem oddaje pusty body lub HTML -> czytamy jako text
      const text = await res.text().catch(() => "");
      let data: any = null;

      try {
        data = text ? JSON.parse(text) : null;
      } catch {
        data = null;
      }

      // Sukces tylko gdy:
      // - HTTP 2xx
      // - oraz { ok: true }
      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || data?.details || "Send failed");
      }

      setStatus("ok");
      formEl.reset();

      // Jeśli chcesz zamykać modal dopiero po krótkiej chwili,
      // możesz dać setTimeout. Na razie zamykamy od razu.
      onSuccess?.();
    } catch {
      setStatus("err");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* honeypot - ukryte pole antyspam (ukryte wizualnie, ale w DOM) */}
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
    </form>
  );
};
