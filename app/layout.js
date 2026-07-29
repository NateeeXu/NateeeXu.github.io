import "./globals.css";

export const viewport = {
  themeColor: "#fbfaf5",
  colorScheme: "light",
};

export const metadata = {
  metadataBase: new URL("https://nateeexu.github.io"),
  icons: {
    icon: "/favicon.svg",
  },
  title: "Nate Xu — IC Designer & Web Product Builder",
  description:
    "Nate Xu builds across integrated circuits, FPGA systems, and web products—from transistor-level design to shipped software.",
  openGraph: {
    title: "Nate Xu — IC Designer & Web Product Builder",
    description:
      "From transistor-level circuits to FPGA systems and working web products.",
    type: "website",
    images: ["/nate-portrait.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nate Xu — IC Designer & Web Product Builder",
    description: "Integrated circuits, FPGA systems, and web products.",
    images: ["/nate-portrait.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
