/**
 * Zdarzenia do GA4 przez dataLayer (Google Tag Manager / gtag).
 * Wysyłamy zawsze do dataLayer; czy trafią do GA4, decyduje zgoda w banerze cookies.
 *
 * Zdarzenia z briefu „Systemy dla firm”:
 * - see_examples_click  – klik „Zobacz przykłady”
 * - demo_open           – klik „Otwórz demo” (demo_name)
 * - review_click        – klik „Zamów przegląd”
 * - lead_form_success   – wysłany formularz (form_source, form_topic)
 */
export const track = (event: string, params: Record<string, unknown> = {}) => {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
};
