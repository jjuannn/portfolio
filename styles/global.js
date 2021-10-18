import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const colors = {
  dark: {
    background: "#212529",
  },
};

const breakpoints = createBreakpoints({
  sm: "320px",
  md: "450px",
  lg: "768px",
  xl: "1200px",
});

const global = {
  body: {
    background: colors.dark.background,
  },
  html: {
    scrollBehavior: "smooth",
  },
  "*": {
    color: "white",
    padding: 0,
    margin: 0,
    boxSizing: "border-box",
    fontFamily: ["Montserrat", "sans-serif"],
  },
};

export const theme = extendTheme({ colors, breakpoints, styles: { global } });
