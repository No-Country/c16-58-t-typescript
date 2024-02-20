import React from 'react'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Bars/Navbar";
import Footer from "../components/Bars/Footer";
import SessionAuthProvider from "@/context/SessionAuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sapori d'Italia App",
  description: "Created for No Country proyect",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionAuthProvider>
        <Navbar/>
        {children}
        <Footer/>
        </SessionAuthProvider>
      </body>
    </html>
  );
}
