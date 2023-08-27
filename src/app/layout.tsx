import TopLeftImg from "@/components/TopLeftImg";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carlos Gallardo",
  description: "Portafolio de Carlos Gallardo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <main className="relative page bg-site text-white bg-cover bg-no-repeat">
          <TopLeftImg />
          <Nav />
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
