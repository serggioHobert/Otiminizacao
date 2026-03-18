import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["800"], // Extra-Bold
});

export const metadata: Metadata = {
  title: "Cine Patativa",
  description: "A Magia do Cinema Chega às Escolas em Setembro.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${montserrat.variable} antialiased relative min-h-screen bg-background text-foreground`}>
        <div className="bg-noise fixed top-0 w-full h-48 opacity-60" style={{ maskImage: 'linear-gradient(to bottom, black, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)' }} />
        {children}
      </body>
    </html>
  );
}
