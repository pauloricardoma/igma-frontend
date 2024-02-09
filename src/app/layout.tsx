import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-family-base",
  subsets: ["latin"],
  weight: ['300', '400', '600', '700', '800'],
  style: "normal",
});

export const metadata: Metadata = {
  title: "Igma Frontend",
  description: "Teste de Frontend Igma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.variable}>
        {children}
      </body>
    </html>
  );
}
