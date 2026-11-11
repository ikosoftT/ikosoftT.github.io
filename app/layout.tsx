import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "El Yassine Iko — Web Developer | IKOSOFT",
  description: "Web developer building fast, modern and responsive digital experiences.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
