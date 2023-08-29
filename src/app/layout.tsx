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
      <body className={`relative ${inter.className}`}>
        <div className="absolute z-[2] top-12 left-[-5rem] w-[50%] h-[30%] rounded-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rotate-45" />
        <div className="absolute z-[2] bottom-0 right-10 md:right-3 w-[30%] h-[30%] rotate-12 rounded-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% bg-pink-600 to-90%" />
        <Transition>
          <main className="relative page text-white backdrop-blur-[120px] antialiased w-full h-screen z-20">
            <Nav />
            <Header />
            {children}
          </main>
        </Transition>
      </body>
    </html>
  );
}
