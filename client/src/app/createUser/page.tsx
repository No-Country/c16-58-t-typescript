'use client';

import React, { useState } from 'react'
import Input from '../../components/Inputs/Input';
import createUser from '@/requests/createUser';
import { useSession, signIn } from "next-auth/react";
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from "react-icons/io";

const CreateUser = () => {
    const [user, setUser] = useState({
        name: '',
        lastname: '',
        email: '',
        password: '',
        city: '',
        province: '',
        role: 3,
        tyc: false,
    });
    const [check, setCheck] = useState(false)

    const isAcepted = () => {
      setCheck(!check)
      setUser({...user, tyc: !check})
    }
    const {data: session} = useSession()
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const property = (e.target as HTMLInputElement).name;
        const value = (e.target as HTMLInputElement).value;
      
    setUser({ ...user, [property]: value });
  };

    const handleSubmit = async () => {
        try {
            const res = await createUser(session?.user.token, user)
            
        } catch (error) {
            console.error(error)
        }

    }
  return (
    <div className='flex justify-center bg-[#D38B48]'>
     <div className='flex flex-col w-full mx-96 my-14 py-16 px-24 rounded-3xl bg-white items-center justify-center'>
      <h1 className='text-black text-2xl font-bold'>¡Crea tu cuenta gratis!</h1>
        <form onSubmit={handleSubmit} className='flex flex-col mt-12 w-full'>
          <Input name='name' placeholder="Nombre/s" value={user.name} onChangeFunction={handleChange}/>
          <Input name='lastname' placeholder="Apellido/s" value={user.lastname} onChangeFunction={handleChange}/>
          <Input name='email' placeholder="Email" value={user.email} onChangeFunction={handleChange}/>
          <Input name='password' placeholder="Contraseña" value={user.password} onChangeFunction={handleChange}/>
          <div className='flex flex-row items-center'>
            <button type="button" onClick={isAcepted} className="flex items-center">
              {
              check ? 
              <IoIosRadioButtonOn />
              : 
              <IoIosRadioButtonOff />
            }                
              <span className="text-stone-800 text-xs underline">Acepto los términos y condiciones</span>
            </button>
          </div>
          <button className='rounded-3xl py-2 w-full border border-lime-700'>
            Crear cuenta
          </button>
        </form>
        <hr className='border border-stone-800'/>
          ó
        <hr className='border-stone-600'/>
          <button onClick={() => signIn('google')}>
            Login
          </button>
      </div>
    </div>
  );
};

export default CreateUser;
