import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./screen.css";

export const metadata: Metadata = {
  title: "Receive",
  description: "loud weird band from Queens",
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
