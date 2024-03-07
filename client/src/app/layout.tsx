import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Aquí puedes incluir tus estilos personalizados de Tailwind CSS si es necesario
import Navbar from "../components/Bars/Navbar";
import Footer from "../components/Bars/Footer";
import SessionAuthProvider from "@/context/SessionAuthProvider";
import { useRouter } from "next/navigation";

import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sapori d'Italia",
  description: "Created for No Country proyect",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans bg-[#FFFFFF]">
        {" "}
        {/* Cambia el color de fondo según sea necesario */}
        <SessionAuthProvider>
          <Navbar />
          {children}
          <button className="w-[50px] h-[50px] fixed bottom-20 right-20">
            <a href="/reservar">
              <img src="/reserva-gif.gif" alt="" />
            </a>
          </button>
          <Footer />
        </SessionAuthProvider>
      </body>
    </html>
  );
}
