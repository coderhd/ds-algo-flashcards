import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/custom/theme-provider";
import { Header } from "@/components/custom/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DSA Flashcards",
  description: "A modern, mobile-friendly web application for studying data structures and algorithms on the go.",
  keywords: ["DSA", "Data Structures", "Algorithms", "Flashcards", "Interview Preparation"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <footer className="py-6 md:px-8 md:py-0">
              <div className="container max-w-5xl mx-auto flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row px-4">
                <p className="text-center text-sm leading-loose text-muted-foreground">
                  Built with Next.js and Shadcn UI. Happy studying!
                </p>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
