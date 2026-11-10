import { Bricolage_Grotesque, Caveat, Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Body text uses SF Pro from the system on Apple devices; Inter is the fallback elsewhere.
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
// Headlines and big numbers.
const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display", display: "swap" });
// Accent lines and the award number.
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-serif", display: "swap" });
// Engineering metrics and tags.
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });
// Handwritten margin notes.
const hand = Caveat({ subsets: ["latin"], variable: "--font-hand", display: "swap" });

export const viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export const metadata = {
  metadataBase: new URL("https://nateeexu.github.io"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={[inter, display, serif, mono, hand].map((f) => f.variable).join(" ")}>
      <body>{children}</body>
    </html>
  );
}
