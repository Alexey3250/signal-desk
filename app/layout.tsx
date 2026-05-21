import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Signal Desk",
  description:
    "Sector-focused analytics dashboards and market studies that turn raw data into business insight."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
