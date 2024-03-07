"use client";

import React from "react";
import AdminNav from "@/components/Bars/AdminNav";


export default function AdminUser() {
  return (
    <>
    <AdminNav/>
     
      <table className="table-auto bg-blue-gray-500 text-white w-full h-screen">
        <thead className="bg-blue-gray-900">
          <tr>
            <th className="px-4 py-2 text-center">Fecha y Hora</th>
            <th className="px-4 py-2">Estado</th>
            <th className="px-4 py-2">Cliente</th>
            <th className="px-4 py-2">Personas</th>
            <th className="px-4 py-2">Mesas</th>
            <th className="px-4 py-2">Telefono</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 text-center">1 Feb - 22:00</td>
            <td className="px-4 py-2 text-center">Reservado</td>
            <td className="px-4 py-2 text-center">1961</td>
            <td className="px-4 py-2 text-center">1961</td>
            <td className="px-4 py-2 text-center">1961</td>
            <td className="px-4 py-2 text-center">1961</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
