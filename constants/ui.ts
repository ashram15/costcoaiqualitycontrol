import type { TextStyle, ViewStyle } from "react-native";
import { COLORS } from "./colors";

/** Shared border radii and icon sizes for consistent UI */
export const RADIUS = {
  sm: 8,
  md: 12,
  lg: 16,
  card: 24,
  round: 9999,
} as const;

export const ICON = {
  back: 28,
  cart: 30,
  nav: 32,
} as const;

export const HIT_SLOP = { top: 12, bottom: 12, left: 12, right: 12 };

/** Blue app bar — bottom tab shell only; prefer headerBarLight for in-screen top rows */
export const headerBarBlue: ViewStyle = {
  backgroundColor: COLORS.PRIMARY_BLUE,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingHorizontal: 18,
  paddingTop: 18,
  paddingBottom: 18,
};

/** White top bar: logo + actions (blue icons) — matches cart / app shell */
export const headerBarLight: ViewStyle = {
  backgroundColor: COLORS.WHITE,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingHorizontal: 18,
  paddingTop: 18,
  paddingBottom: 18,
  borderBottomWidth: 0.5,
  borderBottomColor: COLORS.BORDER_LIGHT,
};

/** Filled primary CTA (blue) */
export const buttonPrimaryBlue: ViewStyle = {
  backgroundColor: COLORS.PRIMARY_BLUE,
  borderRadius: RADIUS.md,
  paddingVertical: 14,
  paddingHorizontal: 20,
  alignItems: "center",
  justifyContent: "center",
};

/** Filled CTA (red) — Add to cart, checkout */
export const buttonPrimaryRed: ViewStyle = {
  backgroundColor: COLORS.PRIMARY_RED,
  borderRadius: RADIUS.md,
  paddingVertical: 14,
  alignItems: "center",
  justifyContent: "center",
};

export const textOnPrimary: TextStyle = {
  color: COLORS.WHITE,
  fontWeight: "700",
  fontSize: 16,
};

/** Outlined or soft secondary on light background */
export const buttonSecondaryRedSoft: ViewStyle = {
  backgroundColor: COLORS.TINT_RED_BG,
  borderRadius: RADIUS.md,
  paddingVertical: 14,
  paddingHorizontal: 16,
  alignItems: "center",
  borderWidth: 1,
  borderColor: "rgba(230, 16, 49, 0.2)",
};

export const textPrimaryRed: TextStyle = {
  color: COLORS.PRIMARY_RED,
  fontWeight: "700",
  fontSize: 16,
};

/** Circular action (footer: back / cart) */
export const circleActionRed: ViewStyle = {
  width: 56,
  height: 56,
  borderRadius: 28,
  backgroundColor: COLORS.PRIMARY_RED,
  alignItems: "center",
  justifyContent: "center",
};

/** Top banner back — light background, blue chevron */
export const backButtonLightBg: ViewStyle = {
  width: 40,
  height: 40,
  borderRadius: 20,
  alignItems: "center",
  justifyContent: "center",
};
