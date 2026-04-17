import { Metadata } from "next";
import "./global.css";
import LayoutClient from "./components/LayoutClient";

export const metadata: Metadata = {
  title: "PWA Task Manager",
  description: "A simple task manager PWA built with Next.js",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#42A5F5" />
      </head>
      <body suppressHydrationWarning>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
