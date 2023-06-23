import { DefaultTheme } from "styled-components";

const baseTheme = {
  colors: {
    background: "#F7F8FA",
    danger: "#E92020",
    gray: {
      50: "#FFFFFF",
      100: "#EAEAEA",
      200: "#D6E5EA",
      700: "#273E56",
      900: "#0F0F12",
    },
    primary: "#FF5A00",
    secondary: "#1FC164",
  },
  fonts: {
    orienta: '"Orienta", sans-serif',
    poppins: '"Poppins", sans-serif',
  },
  shadows: {
    button: "0px 0px 32px rgba(15, 15, 18, 0.12)",
    card: "0px 0px 32px rgba(15, 15, 18, 0.12)",
  },
};

export type BaseTheme = typeof baseTheme;

export const theme: DefaultTheme = baseTheme;
