declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Google Ads conversion event — pushes to dataLayer so GTM triggers fire.
 * Optionally navigates to `url` after a short timeout.
 */
export function gtagSendEvent(url?: string) {
  if (typeof window === "undefined") return;
  const callback = () => {
    if (url) window.location.href = url;
  };
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "conversion_event_contact",
    event_callback: callback,
    event_timeout: 2000,
  });
  // Fallback in case GTM doesn't fire the callback
  setTimeout(callback, 2000);
}

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: name, ...params });
}
