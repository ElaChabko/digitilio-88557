export type Consent = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  ad_storage: boolean;
  ad_user_data: boolean;
  ad_personalization: boolean;
  timestamp: string;
  version: string;
};

export type ConsentChoice = Omit<Consent, "timestamp">;

export const CONSENT_STORAGE_KEY = "cookieConsentDigitilio";
export const CONSENT_VERSION = "2025-11-13";

export const OPEN_COOKIE_SETTINGS_EVENT = "open-cookie-settings";

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export function getStoredConsent(): Consent | null {
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);

    if (!raw) {
      return null;
    }

    return JSON.parse(raw) as Consent;
  } catch {
    return null;
  }
}

export function getValidStoredConsent(): Consent | null {
  const stored = getStoredConsent();

  if (!stored) {
    return null;
  }

  if (stored.version !== CONSENT_VERSION) {
    return null;
  }

  return stored;
}

export function createConsentChoice(
  analytics: boolean,
  marketing: boolean
): ConsentChoice {
  return {
    necessary: true,
    analytics,
    marketing,
    ad_storage: marketing,
    ad_user_data: marketing,
    ad_personalization: marketing,
    version: CONSENT_VERSION,
  };
}

export function saveConsent(choice: ConsentChoice): Consent {
  const consent: Consent = {
    ...choice,
    timestamp: new Date().toISOString(),
  };

  localStorage.setItem(
    CONSENT_STORAGE_KEY,
    JSON.stringify(consent)
  );

  return consent;
}

export function applyGoogleConsent(
  consent: Pick<
    Consent,
    | "analytics"
    | "ad_storage"
    | "ad_user_data"
    | "ad_personalization"
  >
) {
  if (!window.gtag) {
    return;
  }

  window.gtag("consent", "update", {
    analytics_storage: consent.analytics
      ? "granted"
      : "denied",

    ad_storage: consent.ad_storage
      ? "granted"
      : "denied",

    ad_user_data: consent.ad_user_data
      ? "granted"
      : "denied",

    ad_personalization: consent.ad_personalization
      ? "granted"
      : "denied",
  });
}

export function pushConsentSubmittedEvent(
  action: "accept_all" | "reject_all" | "save_choices",
  consent: ConsentChoice
) {
  window.dataLayer = window.dataLayer || [];

  window.dataLayer.push({
    event: "cookie_consent_submitted",

    consent_action: action,

    consent_analytics: consent.analytics
      ? "granted"
      : "denied",

    consent_marketing: consent.marketing
      ? "granted"
      : "denied",

    consent_ad_storage: consent.ad_storage
      ? "granted"
      : "denied",

    consent_ad_user_data: consent.ad_user_data
      ? "granted"
      : "denied",

    consent_ad_personalization:
      consent.ad_personalization
        ? "granted"
        : "denied",
  });
}

export function pushConsentRestoredEvent(
  consent: Consent
) {
  window.dataLayer = window.dataLayer || [];

  window.dataLayer.push({
    event: "cookie_consent_restored",

    consent_analytics: consent.analytics
      ? "granted"
      : "denied",

    consent_marketing: consent.marketing
      ? "granted"
      : "denied",

    consent_ad_storage: consent.ad_storage
      ? "granted"
      : "denied",

    consent_ad_user_data: consent.ad_user_data
      ? "granted"
      : "denied",

    consent_ad_personalization:
      consent.ad_personalization
        ? "granted"
        : "denied",
  });
}
