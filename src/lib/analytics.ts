export function trackEvent(name: string, detail: Record<string, string> = {}) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("kairos:analytics", { detail: { name, ...detail } }));
}
