import { useState } from "react";
import { Button } from "@/components/ui/button";

type Props = {
  onSuccess?: () => void;
};

export const ContactForm = ({ onSuccess }: Props) => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "ok" | "err">(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = new FormData(e.currentTarget);

    const payload = {
      name: String(form.get("name") || "").trim(),
      email: String(form.get("email") || "").trim(),
      company: String(form.get("company") || "").trim(),
      message: String(form.get("message") || "").trim(),
      website: String(form.get("website") || ""), // honeypot
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok || !data?.ok) throw new Error("Send failed");

      setStatus("ok");
      e.currentTarget.reset();
      onSuccess?.();
    } catch {
      setStatus("err");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* honeypot - ukryte pole antyspam */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />

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
