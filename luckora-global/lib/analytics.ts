export type AnalyticsEventName =
  | "test_start"
  | "test_complete"
  | "result_view";

type AnalyticsEventParams = Record<string, string | number | boolean>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, string | number | boolean>>;
    gtag?: (
      command: "event",
      eventName: AnalyticsEventName,
      params?: AnalyticsEventParams,
    ) => void;
  }
}

export function trackEvent(
  eventName: AnalyticsEventName,
  params: AnalyticsEventParams = {},
) {
  if (typeof window === "undefined") {
    return;
  }

  const eventPayload = { event: eventName, ...params };

  try {
    const existingEvents = JSON.parse(
      window.sessionStorage.getItem("luckora_analytics_events") || "[]",
    ) as Array<Record<string, string | number | boolean>>;
    window.sessionStorage.setItem(
      "luckora_analytics_events",
      JSON.stringify([...existingEvents, eventPayload]),
    );
  } catch {
    // Analytics should never block the test experience.
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(eventPayload);

  window.gtag?.("event", eventName, params);
}
