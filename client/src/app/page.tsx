// "use client";

// import { useRouter } from "next/navigation";

// // md:w-[363px] h-[73px] text-2xl text-white font-bold rounded-lg

// export default function Home() {
//   const router = useRouter();

//   return (
//     <main className=" w-full h-screen bg-cover bg-center bg-home-image flex items-center justify-center bg-my_bg_image ">
//       <div className="flex flex-col items-center justify-center h-screen">
//         <h1 className="text-white text-4xl md:text-6xl mb-10 font-black">
//           Reserva tu mesa
//         </h1>
//         <button className="bg-[#72A30E] px-4 text-white md:px-20 py-2 rounded-lg text-2xl">
//           Reserva
//         </button>
//       </div>
//     </main>
//     <div>
//       <h2>Este es un titulo</h2>
//     </div>

//   );
// }

"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <main className="w-full h-screen bg-cover bg-center bg-home-image flex items-center justify-center">
        <div className="w-[90%] my-0 mx-auto flex flex-col items-center justify-center space-y-12 text-center">
          <h1 className="text-white text-5xl md:text-6xl mb-10 font-[600]">
            Reserva tu mesa
          </h1>
          <button className="bg-[#72A30E]  text-white px-20 py-4 rounded-lg text-2xl font-bold">
            Reserva
          </button>
        </div>
      </main>
      {/* <Image
          src="/tomates.svg"
          alt="Tomates"
          layout="fill"
          objectFit="contain"
          objectPosition="top"
        /> */}
      <section className="w-[90%] my-0 mx-auto py-10 md:py-24 flex flex-col items-center justify-center space-y-12 text-center
      md:w-[60%] font-semibold text-2xl md:text-3xl leading-tight">
        <p>
          Te invitamos a un recorrido culinario inspirado en las distinatas
          regiones de la italia, pasando por los distintos productos que forman
          parte de su cocina.{" "}
        </p>
        <img src="/article.jpg" alt="" className="w-full" />
        <p>
          Te esperamos en Sapori d'Italia para brindarte una combinacion
          perfecta de elegancia y saboder con productos de proximidad.
          <br />
          ¡Reserva tu mesa ahora y dejanos sorprenderte con nuestra propuesta
          culinaria!
        </p>
        <button className="bg-[#72A30E]  text-white px-20 py-4 rounded-lg text-2xl font-bold">
            Reserva
          </button>
      </section>
      <section className="w-full h-screen bg-cover bg-center bg-foco-image flex items-center justify-center">
        <div className="w-[90%] my-0 mx-auto flex flex-col items-center justify-center space-y-12 text-center">
          <h2 className="text-white text-5xl md:text-6xl mb-10 font-[600] m:0">
           Visitanos
          </h2>
          <p className="font-bold  text-white text-2xl">Av. Monroe 9856 - Belgrano</p>
          <button className="bg-[#FF6D38]  text-white px-20 py-4 rounded-lg text-2xl font-bold">
            Ver mapa
          </button>
        </div>
      </section>
    </>
  );
}
