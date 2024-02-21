"use client";

import { Cliente, clientesProps } from "./clientPropsType";

export default function TableClient({ clientes }: clientesProps) {

  return (
      <table>
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Nombre</th>
            <th className="px-4 py-2">Apellido</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Ciudad</th>
            <th className="px-4 py-2">Provincia</th>
            <th className="px-4 py-2">Pais</th>
            <th className="px-4 py-2">Rol</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map(
            ({
              Nombre,
              Apellido,
              Ciudad,
              Email,
              Provincia,
              Pais,
              Rol,
            }: Cliente) => {
              return (
                <tr>
                  <td className="border px-4 py-2"> {Nombre} </td>
                  <td className="border px-4 py-2"> {Apellido} </td>
                  <td className="border px-4 py-2"> {Ciudad} </td>
                  <td className="border px-4 py-2"> {Email} </td>
                  <td className="border px-4 py-2"> {Provincia} </td>
                  <td className="border px-4 py-2"> {Pais} </td>
                  <td className="border px-4 py-2"> {Rol} </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
  );
}
