"use client";

// import React, { useState } from "react";
// import Input from "../../components/Inputs/Input";
// import createUser from "@/requests/createUser";
// import { useSession, signIn } from "next-auth/react";
// import { IoIosRadioButtonOff, IoIosRadioButtonOn } from "react-icons/io";
// import { useRouter } from "next/navigation";
// import { FaGoogle } from "react-icons/fa";
// import Link from "next/link";

// const reserva = () => {
//   const [user, setUser] = useState({
//     name: "",
//     lastname: "",
//     email: "",
//     lastName: "",
//     password: "",
//     city: "",
//     province: "",
//     role: 3,
//     mesa: "",
//     date: "",
//     phone: "",
//     mensage: "",
//     personas: "",
//     time: "",
//     tyc: false,
//   });
//   console.log(reserva)
//   const [check, setCheck] = useState(false);
//   const router = useRouter();

//   const isAcepted = () => {
//     setCheck(!check);
//     setUser({ ...user, tyc: !check });
//   };
//   const { data: session } = useSession();

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const property = (e.target as HTMLInputElement).name;
//     const value = (e.target as HTMLInputElement).value;

//     setUser({ ...user, [property]: value });
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (
//       user.email === "juangaliano@gmail.com" &&
//       user.password === "password123"
//     ) {
//       try {
//         const res = await createUser(session?.user.token, user);
//         // Redireccionar a la pantalla de "Reservar"
//         router.push("../reservar");
//       } catch (error) {
//         console.error(error);
//       }
//     } else {
//       alert("Credenciales incorrectas");
//       // Aquí podrías mostrar un mensaje de error al usuario indicando que las credenciales son incorrectas
//     }
//   };
//   return (
//     <div className="flex justify-center bg-yellow-200 ">
//       <div className="flex flex-col w-full h-max px-8 md:w-[70%] mx-auto max-wiht max-w-7xl md:my-14 py-10 md:px-24 md:rounded-3xl items-center justify-center">
//         <h1 className="text-black text-4xl font-extrabold">
//           ¡Encuentra tu mesa para cualquier ocasión!
//         </h1>
//         <form onSubmit={handleSubmit} className="flex flex-col mt-8 w-full">
//           {/* <div className="grid grid-cols-2 gap-6"> */}

//           {/* <Input
//               name="name"
//               placeholder="Nombre"
//               value={user.name}
//               onChangeFunction={handleChange}
//             />
//             <Input
//               name="lastName"
//               placeholder="Apellido"
//               value={user.lastName}
//               onChangeFunction={handleChange}
//             />
//             <Input
//               name="phone"
//               placeholder="Telefono"
//               value={user.phone}
//               onChangeFunction={handleChange}
//             />
//             <Input
//               name="email"
//               placeholder="Email"
//               value={user.email}
//               onChangeFunction={handleChange}
//             />
//           </div> */}

//           <div className="grid grid-cols-3 gap-6">
//             <input
//               type="date"
//               name="date"
//               value={user.date}
//               onChange={handleChange}
//               className="text-black rounded-xl w-full py-3 px-4 my-3 box-border border border-gray-700"
//             />
//             <input
//               type="time"
//               name="time"
//               value={user.time}
//               onChange={handleChange}
//               className="text-black rounded-xl w-full py-3 px-4 my-3 box-border border border-gray-700"
//             />
//             <select
//               name="personas"
//               value={user.personas}
//               className="text-black rounded-xl w-full py-3 px-4 my-3 box-border border border-gray-700"
//             >
//               <option value="1">1 Persona</option>
//               <option value="2">2 Personas</option>
//               <option value="3">3 Personas</option>
//             </select>
//           </div>

//           <div className="flex justify-center">
//             <button
//               type="submit"
//               className="bg-[#72A30E] text-center w-40 text-white px-2 py-2 rounded-lg font-bold mt-6"
//             >
//               Continuar
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default reserva;

import React, { useState, ChangeEvent, FormEvent } from "react";
import Input from "@/components/Inputs/Input";
import Swal from "sweetalert2";

const Reserva = () => {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    date: "",
    personas: "1",
    time: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user); // Imprimir el estado actual del usuario en la consola
    

    Swal.fire({
      icon: "success",
      title: "Reserva Exitosa",
      text: `${user.name} ¡Su reserva fue exitosa! para el dia ${user.date} a las ${user.time} hs, para ${user.personas} personas`
    });
  };

  return (
    <div className="flex justify-center items-center bg-foco-image h-[100vh] ">
      <div className="flex flex-col w-full h-max px-8 md:w-[70%] mx-auto max-wiht max-w-7xl md:my-14 py-10 md:px-24 md:rounded-3xl items-center justify-center">
        <h1 className="text-white text-4xl text-center ">
          ¡Encuentra tu mesa para cualquier ocasión!
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col mt-8 w-full">
          <div className="grid grid-cols-2 gap-6">
            <Input
              name="name"
              placeholder="Nombre"
              value={user.name}
              onChangeFunction={handleChange}
            />
            <Input
              name="phone"
              placeholder="Telefono"
              value={user.phone}
              onChangeFunction={handleChange}
            />
          </div>
          <div className="grid grid-cols-3 gap-6">
            <input
              type="date"
              name="date"
              value={user.date}
              onChange={handleChange}
              className="text-black rounded-xl w-full py-3 px-4 my-3 box-border border border-gray-700"
            />
            <select
              name="time"
              value={user.time}
              onChange={handleChange}
              className="text-black rounded-xl w-full py-3 px-4 my-3 box-border border border-gray-700"
            >
              <option value="">Seleccionar hora</option>
              <option value="19:00">19:00</option>
              <option value="20:00">20:00</option>
              <option value="21:00">21:00</option>
              <option value="22:00">22:00</option>
              <option value="23:00">23:00</option>
              <option value="00:00">00:00</option>
            </select>
            <select
              name="personas"
              value={user.personas}
              onChange={handleChange}
              className="text-black rounded-xl w-full py-3 px-4 my-3 box-border border border-gray-700"
            >
              <option value="1">1 Persona</option>
              <option value="2">2 Personas</option>
              <option value="3">3 Personas</option>
            </select>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#72A30E] text-center w-40 text-white px-2 py-2 rounded-lg font-bold mt-6"
            >
              Continuar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reserva;
