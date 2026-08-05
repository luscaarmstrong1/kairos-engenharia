export function trackEvent(name: string, detail: Record<string, string> = {}) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("conexium:analytics", { detail: { name, ...detail } }));
}
