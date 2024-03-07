import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black bg-opacity-90 text-[#FFFF] py-20 px-10 flex flex-row">
      <div className="w-[40%] flex items-center justify-center ">
        <img src="/logo.svg" alt="logo de la app" />
      </div>
      <div className="w-[60%] grid grid-cols-3 gap-4  items-start">
        <div className=" flex flex-col ">
          <p className="font-[600]">NOSOTROS</p>
          <span>
            Te esperamos con productos de excelente nivel, acompaña de la
            calidez y personalizada atencion.
          </span>
        </div>
        <div className=" flex flex-col">
          <p className="font-[600]">CONTACTO</p>
          <span>Av. Monroe 9856 - Belgrano</span>
          <span>+54 11 5355-9260 / 65</span>
          <span>info@soporiditalia.com</span>
        </div>
        <div className=" flex flex-col">
          <p className="font-[600]">HORARIOS</p>
          <span>Todos los dias</span>
          <span>19:00 - 24:00</span>
        </div>
      </div>
    </footer>


  );
};

export default Footer;
