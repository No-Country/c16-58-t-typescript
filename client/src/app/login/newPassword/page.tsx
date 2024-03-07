"use client";

import React, { useState } from "react";
import Input from "../../../components/Inputs/Input";
import createUser from "@/requests/createUser";
import { useSession, signIn } from "next-auth/react";
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from "react-icons/io";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";

const newPassword = () => {
  const [user, setUser] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    repeatPassword: "",
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
        <h1 className="text-black text-2xl font-bold">
          Restablecer tu contaseña
        </h1>
        <p className="mt-8">
          Ingresa tu nueva contraseña y el codigo que te enviamos por correo
          electrónico
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col mt-12 w-full">
          <Input
            name="password"
            placeholder="Nueva contraseña"
            value={user.password}
            onChangeFunction={handleChange}
          />
          <Input
            name="repeatPassword"
            placeholder="Confirmar contraseña"
            value={user.repeatPassword}
            onChangeFunction={handleChange}
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className="rounded-3xl my-10 px-10 py-2 border border-black font-bold text-black"
            >
              Confirmar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default newPassword;
