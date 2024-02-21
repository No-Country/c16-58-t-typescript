"use client";

import React, { useState } from "react";
import Input from "../../components/Inputs/Input";
import createUser from "@/requests/createUser";
import { useSession, signIn } from "next-auth/react";
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from "react-icons/io";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";

const login = () => {
  const [user, setUser] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    repeatPassword:"",
    city: "",
    province: "",
    role: 3,
    tyc: false,
  });
  const [check, setCheck] = useState(false);
  const router = useRouter();

  const isAcepted = () => {
    setCheck(!check);
    setUser({ ...user, tyc: !check });
  };
  const { data: session } = useSession();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const property = (e.target as HTMLInputElement).name;
    const value = (e.target as HTMLInputElement).value;

    setUser({ ...user, [property]: value });
  };

  const handleSubmit = async () => {
    try {
      const res = await createUser(session?.user.token, user);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex justify-center bg-[#D38B48] ">
      <div className="flex flex-col w-full h-max px-8 md:w-[55%] mx-auto max-wiht max-w-7xl md:my-14 py-10 md:px-24 md:rounded-3xl bg-white items-center justify-center">
        <h1 className="text-black text-2xl font-bold">Ingresa a tu cuenta</h1>
        <form onSubmit={handleSubmit} className="flex flex-col mt-12 w-full">
          <Input
            name="email"
            placeholder="Email"
            value={user.email}
            onChangeFunction={handleChange}
          />
          <Input
            name="password"
            placeholder="Contraseña"
            value={user.password}
            onChangeFunction={handleChange}
          />
          <div className="flex flex-row items-center mb-12">
            <button
              type="button"
              onClick={isAcepted}
              className="flex items-center"
            >
              {check ? <IoIosRadioButtonOn /> : <IoIosRadioButtonOff />}
              <p className=" text-xs  ml-2">Recordarme</p>
            </button>
          </div>
          <button
            type="submit"
            className="rounded-3xl py-2 w-full border border-black font-bold text-black"
          >
            Ingresar
          </button>
        </form>
        <div className="flex items-center my-4 w-full">
          <div className="flex-1 border-t border-gray-800"></div>
          <div className="mx-2 text-gray-500">o</div>
          <div className="flex-1 border-t border-gray-800"></div>
        </div>
        <button
          className="rounded-3xl py-2 w-full border border-black font-bold text-black flex items-center justify-center"
          onClick={() => signIn("google")}
        >
          <FaGoogle className="mr-2" />
          Continúa con Google
        </button>
        <div className="flex flex-row mt-5 text-base">
          <p>¿Aun no tienes cuenta? </p>
            <Link href="./createUser" className="text-black font-bold ml-2">
              Registrate aquí
            </Link>
        </div>
      </div>
    </div>
  );
};

export default login;
