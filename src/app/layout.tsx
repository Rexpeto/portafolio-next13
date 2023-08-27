import TopLeftImg from "@/components/TopLeftImg";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Header from "@/components/Header";
import Transition from "@/components/Transition";

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
      <body
        className={`bg-site bg-cover bg-no-repeat relative text-white ${inter.className}`}
      >
        <Transition>
          <main className="relative page text-white">
            <TopLeftImg />
            <Nav />
            <Header />
            {children}
          </main>
        </Transition>
      </body>
    </html>
  );
}
