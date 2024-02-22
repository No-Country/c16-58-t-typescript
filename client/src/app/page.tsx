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
    <div className="h-screen bg-cover bg-center bg-home-image">
    {/* Contenido de tu página */}
  </div>
    
  //   <main className="{poppins.className} w-full h-full flex items-center justify-center bg-my_bg_image">

  //     {/* <h1>Reserva tu mesa</h1>
  //     <button className="bg-[#72A30E] w-[363px] h-[73px] text-2xl text-white font-bold rounded-lg">Reserva
  //     </button> */}
  // </main>
  );
}
