import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Theme, ThemeProvider, createTheme } from "@mui/material";
import { theme } from "@/utils/theme";

// metadata
export const metadata: Metadata = {
  title: "Payment Gateway",
  description: "A payment gateway for credit cards",
};

// fonts
const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500"],
});

// layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={space_grotesk.className}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
