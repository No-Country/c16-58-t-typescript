"use client";

import React, { useState } from "react";
import Input from "../../components/Inputs/Input";
import createUser from "@/requests/createUser";
import { useSession } from "next-auth/react";

const AdminCreateUser = () => {
  const [user, setUser] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    city: "",
    province: "",
    role: 0,
  });
  const { data: session } = useSession();

  const handleChange = (e: React.FormEvent) => {
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
    <div className="flex justify-center bg-orange-400">
      <div className="my-14 py-12 px-48 rounded-lg bg-white items-center justify-center">
        <h1 className="text-black text-2xl font-bold">
          ¡Crea tu cuenta gratis!
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col mt-12">
          <Input
            placeholder="Nombre/s"
            value={user.name}
            onChangeFunction={handleChange}
          />
          <Input
            placeholder="Aapellido/s"
            value={user.lastname}
            onChangeFunction={handleChange}
          />
          <Input
            placeholder="Email"
            value={user.email}
            onChangeFunction={handleChange}
          />
          <Input
            placeholder="Contraseña"
            value={user.password}
            onChangeFunction={handleChange}
          />
          <Input
            placeholder="Ciudad"
            value={user.city}
            onChangeFunction={handleChange}
          />
          <Input
            placeholder="Provincia"
            value={user.province}
            onChangeFunction={handleChange}
          />
          <Input
            placeholder="Rol"
            value={user.role}
            onChangeFunction={handleChange}
          />
        </form>
      </div>
    </div>
  );
};

export default AdminCreateUser;
