import { Inter } from "next/font/google";
import "./globals.css";

// SF Pro comes from the system on Apple devices; Inter is the fallback elsewhere.
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export const metadata = {
  metadataBase: new URL("https://nateeexu.github.io"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
