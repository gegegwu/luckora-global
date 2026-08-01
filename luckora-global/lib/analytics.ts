export type AnalyticsEventName =
  | "homepage_view"
  | "start_test_click"
  | "test_started"
  | "test_completed"
  | "report_viewed"
  | "premium_click";

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

export function trackHomepageView() {
  trackEvent("homepage_view", {
    page_path: "/",
  });
}

export function trackStartTestClick(source: string) {
  trackEvent("start_test_click", {
    source,
    test_id: "personality",
    test_slug: "personality-test",
  });
}

export function trackTestStarted() {
  trackEvent("test_started", {
    test_id: "personality",
    test_slug: "personality-test",
  });
}

export function trackTestCompleted(resultSlug: string, resultType: string) {
  trackEvent("test_completed", {
    result_slug: resultSlug,
    result_type: resultType,
    test_id: "personality",
    test_slug: "personality-test",
  });
}

export function trackReportViewed(resultSlug: string, resultType: string) {
  trackEvent("report_viewed", {
    result_slug: resultSlug,
    result_type: resultType,
    test_id: "personality",
    test_slug: "personality-test",
  });
}

export function trackPremiumClick(source: string) {
  trackEvent("premium_click", {
    source,
    test_id: "personality",
    test_slug: "personality-test",
  });
}
