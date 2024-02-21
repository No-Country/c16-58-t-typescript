"use client";

import React, { useEffect, useState } from "react";
import Input from "../../components/Inputs/Input";
import createUser from "@/requests/createUser";
import { useSession, signIn } from "next-auth/react";
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from "react-icons/io";
import TableClient from "@/components/dashboard/client/tableClient";
import clientesData from "@/components/dashboard/client/data";
import { Cliente } from "@/components/dashboard/client/clientPropsType";

interface queryType {
  Nombre: string | null;
  Apellido: string | null;
}
export default function CreateUser() {
  const [clients, setClients] = useState<Cliente[]>(clientesData);
  const [query, setQuery] = useState<queryType>({
    Nombre: null,
    Apellido: null,
  });

  const handlerFilterClient = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery({
      ...query,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };
  useEffect(() => {
    const newClients = () => {
      let newClient = clientesData;
      query.Nombre !== null && query.Nombre !== ""
        ? (newClient = newClient.filter((c) => c.Nombre === query.Nombre))
        : null;
      query.Apellido !== null && query.Apellido !== ""
        ? (newClient = newClient.filter((c) => c.Apellido === query.Apellido))
        : null;
      setClients(newClient);
    };
    newClients()
  }, [query]);

  return (
    <div className="flex flex-col w-full h-full justify-center items-center py-4">
        <h1 className="text-2xl">Filtros</h1>
      <div className="flex flex-row justify-center space-x-2">
        <Input
          name="Nombre"
          placeholder="Nombre"
          onChangeFunction={handlerFilterClient}
          value={query.Nombre || ""}
        />
        <Input
          name="Apellido"
          placeholder="Apellido"
          onChangeFunction={handlerFilterClient}
          value={query.Apellido || ""}
        />
      </div>
      <TableClient clientes={clients} />
    </div>
  );
}
