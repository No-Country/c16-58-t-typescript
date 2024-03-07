import React from "react";
import Image from "next/image";
import SearchInput from "../Inputs/SearchInput";
import AuthButton from "../Buttons/AuthButton";
import Link from "next/link";

const AdminNav = () => {
  return (
    <>
        <nav className="bg-cyan-50 bg-opacity-90 text-black flex flex-col items-start justify-around py-4 px-10 text-lg  border-b-4 border-[#FF6D38] w-[20%] h-[100%] absolute">
          <Link href="../">
            <Image
              width={75}
              height={75}
              src="/logo.svg"
              alt="Logo de la app"
            />
          </Link>
          <Link href="../">Inicio</Link>
          <Link href="./carta">Carta</Link>
          <Link href="./reservar">Reservar</Link>
          <Link href="">Clientes</Link>
          <Link href="">Cerrar Sesion</Link>
          {/* <Link href="./login">Log in</Link>
      <Link href="" className="bg-[#72A30E]  text-white px-10 py-2 rounded-lg text-xl font-bold">Log in</Link>
      <AuthButton /> */}
        </nav>
        <div className="w-[100%] bg-cyan-900 h-10">
          <h1>Reservas</h1>
        </div>
    </>
  );
};

export default AdminNav;
