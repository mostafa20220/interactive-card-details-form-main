"use client"
import { createTheme } from "@mui/material";

// theme
export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 375,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#600594",
    },
    error: {
      main: "#f44336",
    },
    // @ts-ignore
    gray: {
      light: "#dedddf",
      dark: "#8e8593",
      darkest: "#21092f",
    },
  },
});

