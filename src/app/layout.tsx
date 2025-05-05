import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Importing fonts with extended Latin subset for better compatibility.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Best Gadgets Store - Affordable Tech for Everyone",
  description: "Explore the latest tech gadgets at unbeatable prices. Shop now for electronics, smartphones, and more!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/gadget_logo.jpg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          fontFamily: 'var(--font-geist-sans), sans-serif', // Added font fallback for users
        }}
      >
        {children}
      </body>
    </html>
  );
}
