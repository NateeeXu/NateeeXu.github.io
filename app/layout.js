import "./globals.css";

export const metadata = {
  title: "Nate Xu — Signal Path",
  description:
    "Integrated circuit designer, FPGA builder, and product maker working from devices to systems.",
  openGraph: {
    title: "Nate Xu — Signal Path",
    description:
      "From transistor-level circuits to FPGA systems and AI-native products.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
