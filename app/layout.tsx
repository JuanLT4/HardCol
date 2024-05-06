import type { Metadata } from "next";
import { Navbar, Footer } from "@/components";
import "./globals.css";



export const metadata: Metadata = {
  title: "HardCol",
  description: "Tienda de computadoras, computadoras de escritorio, computadoras portátiles, computadoras, computadoras gaming",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
