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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="{poppins.className}">
        <h1 className="text-whit">Reserva tu mesa</h1>
      </div>
    </main>
  );
}
