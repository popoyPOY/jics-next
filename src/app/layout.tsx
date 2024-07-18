import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";
import NavBar from "@/components/static/NavBar";
import Footer from "@/components/static/footer";

export const metadata: Metadata = {
  title: "JS1 Internet ",
  description: "Build connection with us",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <ThemeProvider
          attribute="class"
          enableSystem
          disableTransitionOnChange  
        >
        <NavBar/>
        {children}
        </ThemeProvider>
        </body>
    </html>
  );
}
