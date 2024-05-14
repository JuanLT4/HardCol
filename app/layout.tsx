import type { Metadata } from "next";
import { Footer } from "@/components";
import "./globals.css";
import { CartProvider } from "@/contexts/CartContext";
import { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode; // Define children prop
}

export const metadata: Metadata = {
  title: "HardCol",
  description: "Tienda de computadoras, computadoras de escritorio, computadoras portátiles, computadoras, computadoras gaming",
  
};

export default function RootLayout({ children }: RootLayoutProps) {

  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8"/>
      </head>
      <body className="relative">
        <CartProvider>
            {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
