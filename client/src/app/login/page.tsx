export default function Login() {
  return (
    <div className=" grid max-w-5xl min-h-screen gap-6 p-6 mx-auto font-bold text-center bg-white shadow-2xl font-principal lg:w-1/2 lg:my-14 lg:rounded-3xl md:px-20 text-black">
      <h1 className="text-black">Hola React.js</h1>
      <input
        type="text"
        id="inputName"
        placeholder="Nombre y apellido"
        className="p-2 border border-gray-400 border-solid rounded-md"
      ></input>
      <input
        type="text"
        id="inputEmail"
        placeholder="Email"
        className="p-2 border border-gray-400 border-solid rounded-md"
      ></input>
      <div className="flex items-center p-2 border border-gray-400 border-solid rounded-md no-outline">
        <select className="mr-2" id="inputPhonePrefix">
          <option value="+54">+54</option>
        </select>
        <input
          type="tel"
          id="inputPhone"
          placeholder="Número de teléfono"
          className="w-full focus:outline-none"
        ></input>
      </div>
      <input
        type="password"
        name=""
        id="inputPassword"
        placeholder="Crear contraseña"
        className=" p-2 border border-gray-400 border-solid rounded-md"
      ></input>

      <div className="container flex items-center">
        <input
          type="radio"
          name=""
          id="inputTerminos"
          className="mr-2 cursor-pointer rounded-3xl"
        ></input>
        <label className="text-gray-400">
          Acepto los
          <span className="text-black">
            <a href="#">terminos y condiciones</a>
          </span>
        </label>
      </div>
      <button
        className="px-4 py-2 mt-6 font-bold text-black bg-transparent border border-gray-400 border-solid rounded-full"
        id="btnCreateAccount"
      >
        Crear cuenta
      </button>
      <div className="flex items-center my-0">
        <div className="w-full border-t border-gray-400"></div>
        <div className="mx-2 text-gray-500">ó</div>
        <div className="w-full border-t border-gray-400"></div>
      </div>
      <a
        href="#"
        id="btnGoogle"
        className="flex items-center justify-center px-4 py-2 font-bold text-black bg-transparent border border-gray-400 border-solid rounded-full"
      >
        Continuar con Google
      </a>

      <label className="text-gray-400">
        ¿Ya tienes cuenta?
        <span>
          <a href="#" className="text-black">
            Inicia sesión aquí
          </a>
        </span>
      </label>
    </div>
  );
}






