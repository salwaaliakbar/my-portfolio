// macOS themed color palette for light and dark modes
export const themeColors = {
  dark: {
    // Backgrounds
    bg: {
      primary: "#0D1B2A",
      secondary: "#1B263B",
      tertiary: "#415A77",
      card: "#1B263B",
    },
    // Text
    text: {
      primary: "#E0E1DD",
      secondary: "#778DA9",
      muted: "#415A77",
    },
    // Accent
    accent: {
      cyan: "#06B6D4",
      sky: "#0EA5E9",
      pink: "#EC4899",
      green: "#10B981",
    },
    // Borders
    border: "#415A77",
  },
  light: {
    // macOS light theme backgrounds
    bg: {
      primary: "#F5F5F7",      // Light gray background
      secondary: "#FFFFFF",     // White cards
      tertiary: "#E5E5E7",      // Light borders
      card: "#FFFFFF",
    },
    // Text
    text: {
      primary: "#1D1D1F",       // Dark text
      secondary: "#86868B",     // Gray text
      muted: "#A1A1A6",         // Lighter gray
    },
    // Accent - same cyan/blue accent
    accent: {
      cyan: "#0071E3",          // Apple blue
      sky: "#0077ED",           // Sky blue
      pink: "#D946EF",          // Light pink
      green: "#34C759",         // Apple green
    },
    // Borders
    border: "#D5D5D7",
  },
};

export function getThemeClass(isDark: boolean): Record<string, string> {
  const colors = isDark ? themeColors.dark : themeColors.light;
  return {
    bgPrimary: isDark ? "bg-[#0D1B2A]" : "bg-[#F5F5F7]",
    bgSecondary: isDark ? "bg-[#1B263B]" : "bg-[#FFFFFF]",
    bgTertiary: isDark ? "bg-[#415A77]" : "bg-[#E5E5E7]",
    textPrimary: isDark ? "text-[#E0E1DD]" : "text-[#1D1D1F]",
    textSecondary: isDark ? "text-[#778DA9]" : "text-[#86868B]",
    borderColor: isDark ? "border-[#415A77]" : "border-[#D5D5D7]",
    accentCyan: isDark ? "#06B6D4" : "#0071E3",
    accentSky: isDark ? "#0EA5E9" : "#0077ED",
    accentPink: isDark ? "#EC4899" : "#D946EF",
    accentGreen: isDark ? "#10B981" : "#34C759",
  };
}
