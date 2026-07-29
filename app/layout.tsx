import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://christopherparkramos.com"),
  title: "Christopher Park Ramos — Marketing, Operations & Strategy",
  description: "Four cases from a decade spent turning ambiguous sales, inventory, and revenue data into decisions people could act on.",
  openGraph: {
    title: "Christopher Park Ramos",
    description: "Define the problem. Then build the tool it actually needs.",
    url: "https://christopherparkramos.com",
    siteName: "Christopher Park Ramos",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Christopher Park Ramos",
    description: "Define the problem. Then build the tool it actually needs.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
