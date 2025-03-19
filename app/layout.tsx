import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "next-themes";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "披薩的web筆記",
  description: "與web開發相關的知識筆記",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" precedence="default" />

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class">
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
