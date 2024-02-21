"use client";

import { useRouter } from "next/navigation";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
});

export default function Home() {
  const router = useRouter();

  return (
    <main className="w-full h-full bg-home  bg-cover flex items-center justify-center">
      <div className="{poppins.className}">
        <h1 className="">Reserva tu mesa</h1>
      </div>
    </main>
  );
}
