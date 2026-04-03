interface Window {
  gtag: (
    command: "event" | "config" | "js",
    targetOrName: string | Date,
    params?: Record<string, string | number | boolean>
  ) => void;
  dataLayer: Array<unknown>;
}
