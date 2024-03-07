// "use client";

// import Link from "next/link";

// import { useRouter } from "next/navigation";

// export default function Carta() {
//   const router = useRouter();
//   return (
//     <>
//       <div className="w-full h-[100vh] bg-cover bg-bottom bg-home-image flex flex-col items-center justify-center">
//         <h1 className="text-white text-5xl md:text-6xl mb-10 font-[900]">
//           Carta
//         </h1>

//         <p className="text-2xl text-white font-bold mb-8 w-[70%] text-center">
//           Le presentamos nuestra carta, encontraran un gran variedad {" "}
//         </p>
//         <button
//           type="button"
//           onClick={() => router.push("/")}
//           className="bg-red-500 text-white p-2 rounded mr-6"
//         >
//           Volver al inicio
//         </button>
//       </div>
//     </>
//   );
// }



'use client'

import Link from "next/link";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

interface Meal {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
}

const Carta = () => {
  const router = useRouter();
  const [comidas, setComidas] = useState<Meal[]>([]);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(response => response.json())
      .then(data => {
        setComidas(data.categories);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="w-full min-h-screen bg-cover bg-bottom bg-home-image flex flex-col items-center justify-center py-12">
      <h1 className="text-white text-5xl md:text-6xl mb-10 font-[900]">
        Carta
      </h1>
      <p className="text-2xl text-white font-bold mb-8 w-[70%] text-center">
        Le presentamos nuestra carta, encontrarán una gran variedad.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
        {comidas.map(comida => (
          <div key={comida.idCategory} className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-center items-center">
            <img src={comida.strCategoryThumb} alt={comida.strCategory} className="w-full h-40 object-cover rounded-t-lg" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{comida.strCategory}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carta;