"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function Home() {
  const router = useRouter();

  return (
    // <>
    //   <main className="w-full h-screen bg-cover bg-center bg-home-image flex items-center justify-center {dancingScript.className}">
    //     <div className="w-[90%] my-0 mx-auto flex flex-col items-center justify-center space-y-12 text-center">
    //       <h1 className="text-white text-5xl md:text-6xl mb-10 font-[600]">
    //         Reserva tu mesa
    //       </h1>
    //       <button
    //         className="bg-[#72A30E]  text-white px-20 py-4 rounded-lg text-2xl font-bold"
    //         onClick={() => {
    //           router.push("/reservar");
    //         }}
    //       >
    //         Reserva
    //       </button>
    //     </div>
    //   </main>

    //   <section
    //     className="w-[90%] my-0 mx-auto py-10 md:py-24 flex flex-col items-center justify-center space-y-12 text-center
    //   md:w-[80%]  text-2xl md:text-2xl leading-tight"
    //   >

    //     <p>
    //       Te esperamos en Sapori d'Italia para brindarte una combinacion
    //       perfecta de elegancia y sabores con productos de primera calidad. Te
    //       acompañamos toda la semana en cada salida con un lugar único, buena
    //       música, lindos rincones para pasar el rato, una comida riquíma y
    //       muchas ganas de hacerte pasar un buen momento… Te esperamos…
    //       <br />

    //     </p>
    //     <p className="mt-20">¡Reserva tu mesa ahora y dejanos sorprenderte con nuestra propuesta
    //       culinaria!</p>
    //     {/* <button
    //       className="bg-[#72A30E]  text-white px-20 py-4 rounded-lg text-2xl font-bold"
    //       onClick={() => {
    //         router.push("/reservar");
    //       }}
    //     >
    //       Reserva
    //     </button> */}
    //   </section>
    //   {/* <section className="w-full h-screen bg-cover bg-center bg-carta-image flex items-center justify-center">
    //     <div className="w-[90%] my-0 mx-auto flex flex-col items-center justify-center space-y-12 text-center">
    //       <h2 className="text-white text-5xl md:text-6xl mb-10 font-[600] m:0">
    //         Nuesta Carta
    //       </h2>
    //       <p className="font-bold  text-white text-2xl">
    //         Disfruta de nuesta variedad de especialidades
    //       </p>
    //       <button className="bg-[#FF6D38]  text-white px-20 py-4 rounded-lg text-2xl font-bold">
    //         Ver mapa
    //       </button>
    //     </div>
    //   </section> */}
    //   <section className="w-full h-screen bg-cover bg-center bg-foco-image flex items-center justify-center">
    //     <div className="w-[90%] my-0 mx-auto flex flex-col items-center justify-center space-y-12 text-center">
    //       <h2 className="text-white text-5xl md:text-6xl mb-10 font-[600] m:0">
    //         Visitanos
    //       </h2>
    //       <p className="font-bold  text-white text-2xl">
    //         Av. Monroe 9856 - Belgrano
    //       </p>
    //       <button className="bg-[#FF6D38]  text-white px-20 py-4 rounded-lg text-2xl font-bold">
    //         Ver mapa
    //       </button>
    //     </div>
    //   </section>
    // </>

    <>
      <header className="w-full h-screen  bg-center bg-carta-image flex items-center justify-center">
        <div className=" w-[90%] md:w-[70%] my-0 mx-auto flex flex-col items-center justify-center space-y-12 text-center">
          <img src="./logo.svg" alt="" />
          <h1 className="text-4xl text-white font-[auto] ">
            "Embárcate en un viaje gastronómico único donde cada plato cuenta
            una historia. Descubre el arte de la cocina que cautiva corazones y
            crea recuerdos inolvidables."
          </h1>
        </div>
      </header>
      <section className="w-full h-auto bg-cover bg-center py-[50px] flex flex-col items-center justify-center">
        <div className="w-[90%] md:w-[70%] my-0 mx-auto flex flex-col items-center justify-center space-y-12 text-center">
          <p className="text-3xl text-black">
            Unimos la historia, la experiencia, materia prima de calidad y la
            innovación tecnológica en platos con sabor artesanal con
            especialidad única.
            <p className="text-4xl text-black font-[900] mt-8 ">
              Descubrí la amplia gama de productos listos para acompañar tu
              velada.
            </p>
          </p>
        </div>
      </section>
      <section className="w-full h-[100vh]">
        <h2 className="w-full h-[80px] py-8 bg-[#191919] font-extrabold flex items-center justify-center text-[#FFFFFF] text-center text-5xl mt-20">
          Carta
        </h2>
        <div className="h-[100%] flex flex-col  md:flex-row items-center justify-evenly">
          <button onClick={() => router.push("/carta")}>
            <div className="shadow-2xl w-[300px] h-[300px] flex flex-col items-center justify-center cursor-pointer gap-10">
              <img src="/motorbike.svg" alt="" className="w-[100px]" />
              <span className="text-black text-xl">TAKE ALWAYS</span>
            </div>
          </button>

          <button onClick={() => router.push("/carta")} >
            <div className="shadow-2xl w-[300px] h-[300px] flex flex-col items-center justify-center cursor-pointer gap-10">
              <img src="/utensils.svg" alt="" className="w-[100px]" />
              <span className="text-black text-xl">CARTA</span>
            </div>
          </button>
        </div>
      </section>
      <section className="bg-black w-full flex flex-row justify-between gap-2 h-[90vh]">
        <div>
          <img
            src="/tostadas.jpg"
            alt=""
            className="h-full w-full object-contain"
          />
        </div>
        <div>
          <img
            src="/sorrentinos.jpg"
            alt=""
            className="h-full w-full object-contain"
          />
        </div>
        <div>
          <img
            src="/pizza2.jpg"
            alt=""
            className="h-full w-full object-contain"
          />
        </div>
      </section>
    </>
  );
}
