import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://christopherparkramos.com"),
  title: "Christopher Ramos — Marketing, Operations & Strategy",
  description: "Over a decade building the reporting, e-commerce, and creative systems a luxury multi-brand retailer ran on — across three brands, from the marketing side of the business.",
  openGraph: {
    title: "Christopher Ramos",
    url: "https://christopherparkramos.com",
    siteName: "Christopher Ramos",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Christopher Ramos",
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
