import React from "react";
import Image from "next/image";
import SearchInput from "../Inputs/SearchInput";
import AuthButton from "../Buttons/AuthButton";
import Link from "next/link";

//[#FF6D38]

const Navbar = () => {
  return (
    <nav className="bg-black bg-opacity-90 text-[#FFFFFF] flex flex-row items-center justify-around py-3 px-6 text-lg font-[600] border-b-4 border-[#FFFFFF] ">
      <Link href="../">Home</Link>
      <Link href="./carta">Carta</Link>
      <Link href="../">
        <Image width={75} height={75} src="/logo.svg" alt="Logo de la app" />
      </Link>
      <Link href="">Contacto</Link>
      <Link href="./reservar">Reservar</Link>
      {/* <Link href="./login">Log in</Link>
        <Link href="" className="bg-[#72A30E]  text-white px-10 py-2 rounded-lg text-xl font-bold">Log in</Link>
        <AuthButton /> */}
    </nav>

    // <nav className="contenedor h-30 flex items-center justify-between  bg-black bg-opacity-90 text-[#FFFFFF] px-10 md:w-[100%]">
    //   <input type="checkbox" name="" id="menu" className="peer hidden" />

    //   <Link href="../" className=" max-w-[140px] md:hidden">
    //     <Image
    //       width={75}
    //       height={75}
    //       src="/logo.svg"
    //       alt="Logo de la app"
    //       className="w-full"
    //     />
    //   </Link>

    //   <label
    //     htmlFor="menu"
    //     className="bg-menu w-6 h-5 bg-cover bg-center cursor-pointer peer-checked:bg-close transition-all z-50 md:hidden"
    //   ></label>

    //   <div className="fixed inset-0 bg-gradient-to-b from-white/70 to-black/70 translate-x-full peer-checked:translate-x-0 transition-transform md:static md:translate-x-0 md:bg-none md:w-[100%]">
    //     <ul className="absolute inset-x-0 top-24 p-12 max-auto w-[90%] bg-black mx-auto h-max text-center text-lg font-[600] grid gap-8 shadow-2xl  md:bg-transparent md:p-0 md:flex md:flex-row  md:static md:justify-between md:items-center">
    //       <li>
    //         <Link href="../">Home</Link>
    //       </li>
    //       <li>
    //         <Link href="./carta">Carta</Link>
    //       </li>
    //       <Link href="../" className="w-1/3 max-w-[140px] hidden md:block">
    //         <Image
    //           width={75}
    //           height={75}
    //           src="/logo.svg"
    //           alt="Logo de la app"
    //           className="w-full"
    //         />
    //       </Link>
    //       <li>
    //         <Link href="">Contacto</Link>
    //       </li>
    //       <li>
    //         <Link href="./reservar">Reservar</Link>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
  );
};

export default Navbar;
