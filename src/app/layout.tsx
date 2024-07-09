import type { Metadata, Viewport } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const lato = Lato({
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--lato",
});
export const metadata: Metadata = {
  title: "Web band - W3School",
  description: "Web band template from W3School",
  icons: {
    icon: "https://www.w3schools.com/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.className} flex flex-col w-full`}>
        <link rel="icon" href="https://www.w3schools.com/favicon.ico" />
        {children}
      </body>
    </html>
  );
}
