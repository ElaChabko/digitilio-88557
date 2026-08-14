type Env = {
  RESEND_API_KEY: string;
  RESEND_MARKETING_TOPIC_ID: string;
};

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
  company?: string;
  website?: string;

  marketingConsent?: boolean;
  marketingConsentVersion?: string;
};

const jsonResponse = (
  body: Record<string, unknown>,
  status = 200
) => {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const onRequestGet: PagesFunction = async () => {
  return jsonResponse({
    ok: true,
    route: "/api/contact",
  });
};

export const onRequestPost: PagesFunction<Env> = async ({
  request,
  env,
}) => {
  try {
    /*
     * 1. Sprawdzamy Content-Type
     */
    const contentType =
      request.headers.get("content-type") || "";

    if (!contentType.includes("application/json")) {
      return jsonResponse(
        {
          ok: false,
          error: "Invalid content type",
        },
        400
      );
    }

    /*
     * 2. Odczytujemy dane z formularza
     */
    const body =
      (await request.json()) as ContactPayload;

    const safeName = String(body.name || "").trim();

    const safeEmail = String(body.email || "")
      .trim()
      .toLowerCase();

    const safeCompany = String(
      body.company || ""
    ).trim();

    const safeMessage = String(
      body.message || ""
    ).trim();

    const website = String(
      body.website || ""
    ).trim();

    const marketingConsent =
      body.marketingConsent === true;

    const marketingConsentVersion = String(
      body.marketingConsentVersion || ""
    ).trim();

    /*
     * 3. Honeypot
     *
     * Jeśli bot wypełni ukryte pole,
     * udajemy sukces, ale niczego nie wysyłamy.
     */
    if (website) {
      return jsonResponse({ ok: true });
    }

    /*
     * 4. Walidacja po stronie backendu
     */
    if (!safeEmail || !safeMessage) {
      return jsonResponse(
        {
          ok: false,
          error: "Missing required fields",
        },
        400
      );
    }

    if (!isValidEmail(safeEmail)) {
      return jsonResponse(
        {
          ok: false,
          error: "Invalid email",
        },
        400
      );
    }

    if (safeEmail.length > 254) {
      return jsonResponse(
        {
          ok: false,
          error: "Email too long",
        },
        400
      );
    }

    if (safeName.length > 120) {
      return jsonResponse(
        {
          ok: false,
          error: "Name too long",
        },
        400
      );
    }

    if (safeCompany.length > 160) {
      return jsonResponse(
        {
          ok: false,
          error: "Company too long",
        },
        400
      );
    }

    if (safeMessage.length > 5000) {
      return jsonResponse(
        {
          ok: false,
          error: "Message too long",
        },
        400
      );
    }

    /*
     * 5. Sprawdzamy klucz Resend
     */
    if (!env.RESEND_API_KEY) {
      return jsonResponse(
        {
          ok: false,
          error: "Missing RESEND_API_KEY",
        },
        500
      );
    }

    const resendHeaders = {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    };

    const submittedAt = new Date().toISOString();

    /*
     * 6. MAIL Z FORMULARZA DO CIEBIE
     *
     * Ten mechanizm pozostaje taki jak wcześniej.
     */
    const subject = safeCompany
      ? `Digitilio – new inquiry (${safeCompany})`
      : "Digitilio – new inquiry";

    const text = [
      "New message from Digitilio website",
      "",
      `Name: ${safeName || "Not provided"}`,
      `Email: ${safeEmail}`,
      safeCompany
        ? `Company: ${safeCompany}`
        : "Company: Not provided",
      "",
      "Message:",
      safeMessage,
      "",
      "Marketing consent:",
      marketingConsent ? "YES" : "NO",
      marketingConsent
        ? `Consent version: ${
            marketingConsentVersion || "Not provided"
          }`
        : null,
      marketingConsent
        ? `Consent timestamp: ${submittedAt}`
        : null,
    ]
      .filter(Boolean)
      .join("\n");

    const emailResponse = await fetch(
      "https://api.resend.com/emails",
      {
        method: "POST",
        headers: resendHeaders,
        body: JSON.stringify({
          from: "Digitilio <onboarding@resend.dev>",
          to: ["elachabko@digitilio.pl"],
          reply_to: safeEmail,
          subject,
          text,
        }),
      }
    );

    if (!emailResponse.ok) {
      const errorText = await emailResponse
        .text()
        .catch(() => "");

      console.error(
        "Resend email error:",
        errorText
      );

      return jsonResponse(
        {
          ok: false,
          error: "Resend email error",
        },
        502
      );
    }

    /*
     * 7. ZAPIS MARKETINGOWY
     *
     * Uruchamiamy TYLKO wtedy,
     * gdy użytkownik zaznaczył checkbox.
     */
    let marketingSaved = false;

    if (marketingConsent) {
      if (!env.RESEND_MARKETING_TOPIC_ID) {
        console.error(
          "Marketing consent received, but RESEND_MARKETING_TOPIC_ID is missing."
        );
      } else {
        const encodedEmail =
          encodeURIComponent(safeEmail);

        /*
         * Sprawdzamy, czy kontakt już istnieje.
         */
        const existingContactResponse =
          await fetch(
            `https://api.resend.com/contacts/${encodedEmail}`,
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${env.RESEND_API_KEY}`,
              },
            }
          );

        /*
         * 7A. Kontakt jeszcze nie istnieje
         */
        if (existingContactResponse.status === 404) {
          const createContactResponse =
            await fetch(
              "https://api.resend.com/contacts",
              {
                method: "POST",
                headers: resendHeaders,
                body: JSON.stringify({
                  email: safeEmail,

                  ...(safeName
                    ? {
                        first_name: safeName,
                      }
                    : {}),

                  unsubscribed: false,

                  topics: [
                    {
                      id: env.RESEND_MARKETING_TOPIC_ID,
                      subscription: "opt_in",
                    },
                  ],
                }),
              }
            );

          if (createContactResponse.ok) {
            marketingSaved = true;
          } else {
            const errorText =
              await createContactResponse
                .text()
                .catch(() => "");

            console.error(
              "Resend create contact error:",
              errorText
            );
          }
        }

        /*
         * 7B. Kontakt już istnieje
         */
        else if (existingContactResponse.ok) {
          /*
           * Użytkownik właśnie jawnie ponownie
           * wyraził zgodę marketingową, więc
           * zdejmujemy globalne unsubscribed.
           */
          const updateContactResponse =
            await fetch(
              `https://api.resend.com/contacts/${encodedEmail}`,
              {
                method: "PATCH",
                headers: resendHeaders,
                body: JSON.stringify({
                  unsubscribed: false,
                }),
              }
            );

          if (!updateContactResponse.ok) {
            const errorText =
              await updateContactResponse
                .text()
                .catch(() => "");

            console.error(
              "Resend contact update error:",
              errorText
            );
          }

          /*
           * Ustawiamy konkretny Topic
           * Digitilio - marketing na opt_in.
           */
          const topicResponse = await fetch(
            `https://api.resend.com/contacts/${encodedEmail}/topics`,
            {
              method: "PATCH",
              headers: resendHeaders,

              /*
               * Resend oczekuje tutaj tablicy.
               */
              body: JSON.stringify([
                {
                  id: env.RESEND_MARKETING_TOPIC_ID,
                  subscription: "opt_in",
                },
              ]),
            }
          );

          if (topicResponse.ok) {
            marketingSaved = true;
          } else {
            const errorText =
              await topicResponse
                .text()
                .catch(() => "");

            console.error(
              "Resend topic update error:",
              errorText
            );
          }
        }

        /*
         * Inny błąd Resend
         */
        else {
          const errorText =
            await existingContactResponse
              .text()
              .catch(() => "");

          console.error(
            "Resend contact lookup error:",
            errorText
          );
        }
      }
    }

    /*
     * 8. Formularz został wysłany.
     *
     * Nie pokazujemy użytkownikowi błędu całego
     * formularza tylko dlatego, że np. chwilowo
     * nie udał się zapis marketingowy.
     */
    return jsonResponse({
      ok: true,
      marketingSaved:
        marketingConsent
          ? marketingSaved
          : null,
    });
  } catch (err) {
    console.error(
      "Contact form server error:",
      err
    );

    return jsonResponse(
      {
        ok: false,
        error: "Server error",
      },
      500
    );
  }
};
