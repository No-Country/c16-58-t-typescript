import React from 'react';
import Image from 'next/image';
import SearchInput from '../Inputs/SearchInput';
import AuthButton from '../Buttons/AuthButton';

const Navbar = () => {
  return (
    <div className='bg-cyan-900 flex flex-row items-center justify-between py-3 px-6'>
      <div>
      <Image
        width={30}
        height={30}
        src='/logo.svg'
        alt='Logo de la app'
        />
      </div>
      <div>
        <SearchInput/>
      </div>
      <div>
        <AuthButton/>
      </div>
    </div>
  )
}

export default Navbar;