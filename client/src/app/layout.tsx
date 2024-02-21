import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Bars/Navbar";
import Footer from "../components/Bars/Footer";
import SessionAuthProvider from "@/context/SessionAuthProvider";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
});

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
      <body className={poppins.className}>
        <SessionAuthProvider>
          <Navbar />
          {children}
          <Footer />
        </SessionAuthProvider>
      </body>
    </html>
  );
}
