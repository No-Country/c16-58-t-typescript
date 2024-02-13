import React, { useState } from "react";
import Input from "../../components/Inputs/Input";

const CreateUser = () => {
  const [user, setUser] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    city: "",
    province: "",
    role: "1",
  });

  const handleChange = (e: React.FormEvent) => {
    const property = (e.target as HTMLInputElement).name;
    const value = (e.target as HTMLInputElement).value;

    setUser({ ...user, [property]: value });
  };

  const handleSubmit = async () => {
    //const res = await petición
  };
  return (
    <div>
      <form>
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
  );
};

export default CreateUser;
