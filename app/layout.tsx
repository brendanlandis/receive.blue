import type { Metadata } from "next";
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
    <html lang="en" data-theme="lofi">
      <body>{children}</body>
    </html>
  );
}
