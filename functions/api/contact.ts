export const onRequestGet: PagesFunction = async () => {
  return new Response("OK /api/contact (function active)", { status: 200 });
};


type Env = {
  RESEND_API_KEY: string;
};

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  try {
    const contentType = request.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return new Response(JSON.stringify({ ok: false, error: "Invalid content type" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const { name, email, message, company, website } = (await request.json()) as {
      name?: string;
      email?: string;
      message?: string;
      company?: string;
      website?: string; // honeypot
    };

    // honeypot: boty wypełniają ukryte pole
    if (website) {
      return new Response(JSON.stringify({ ok: true }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    if (!email || !message) {
      return new Response(JSON.stringify({ ok: false, error: "Missing required fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (!env.RESEND_API_KEY) {
      return new Response(JSON.stringify({ ok: false, error: "Missing RESEND_API_KEY" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    const safeName = (name || "Unknown").trim();
    const safeEmail = email.trim();
    const safeCompany = (company || "").trim();

    const subject = safeCompany
      ? `Digitilio – new inquiry (${safeCompany})`
      : "Digitilio – new inquiry";

    const text = [
      "New message from Digitilio website",
      "",
      `Name: ${safeName}`,
      `Email: ${safeEmail}`,
      safeCompany ? `Company: ${safeCompany}` : null,
      "",
      "Message:",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    // Resend API call (bez SDK)
    const resp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Digitilio <onboarding@resend.dev>", // docelowo zmienisz po weryfikacji domeny
        to: ["elachabko@digitilio.pl"],
        reply_to: safeEmail,
        subject,
        text,
      }),
    });

    if (!resp.ok) {
      const errText = await resp.text().catch(() => "");
      return new Response(JSON.stringify({ ok: false, error: "Resend error", details: errText }), {
        status: 502,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch {
    return new Response(JSON.stringify({ ok: false, error: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
