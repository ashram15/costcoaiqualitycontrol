/** Brand + UI palette — use everywhere for consistent Costco styling */
export const COLORS = {
  // Brand
  PRIMARY_RED: "#E61031", // Medium Candy Apple Red
  PRIMARY_BLUE: "#005BAD", // Medium Persian Blue
  /** Darker blue for contrast on top bars (icons on blue) */
  BLUE_DEEP: "#003A7A",
  // Neutrals
  WHITE: "#FFFFFF",
  BLACK: "#000000",
  TEXT_PRIMARY: "#111827",
  TEXT_BODY: "#1F2937",
  TEXT_MUTED: "#6B7280",
  /** Section titles, admin subheads */
  TEXT_SUBHEAD: "#757575",
  TEXT_SECONDARY: "#424242",
  BORDER_LIGHT: "#E5E7EB",
  BORDER_CARD: "#DBE0F0",
  // Surfaces (main page fill — white; use CARD / INPUT_BG for elevated panels)
  PAGE_BG: "#FFFFFF",
  PAGE_BG_ALT: "#FFFFFF",
  SURFACE_MUTED: "#EEEEEE",
  THUMB_PLACEHOLDER: "#D8D8D8",
  PILL_GREY: "#BDBDBD",
  CARD: "#EFEFEF",
  INPUT_BG: "#F5F5F5",
  INPUT_BORDER: "#E8E8E8",
  // Accents
  TINT_RED_BG: "rgba(230, 16, 49, 0.10)",
  TINT_RED_SOFT: "rgba(230, 16, 49, 0.14)", // profile / placeholder tiles
  LINK_BLUE: "#005BAD",
  // Form labels (Sign up, etc.)
  LABEL_GREY: "#9E9E9E",
  PLACEHOLDER_GREY: "#BDBDBD",
  // Progress / UI chrome
  TRACK_GREY: "#D9D9D9",
  /** Cart quantity stepper */
  QTY_TRACK: "#CFCFCF",
  QTY_TRACK_MID: "#E4E4E4",
  // Status (Scan history) — keep semantic variety
  STATUS_OK: "#16A34A",
  STATUS_WARN: "#F59E0B",
  // Shell (status bar / device chrome — keep white for seamless top)
  SHELL_CHROME: "#FFFFFF",
  // Decorative chart tints (admin) — harmonize with brand blue
  CHART_TINT_A: "rgba(0, 91, 173, 0.35)",
  CHART_TINT_B: "rgba(0, 91, 173, 0.5)",
} as const;

export type AppColors = typeof COLORS;
