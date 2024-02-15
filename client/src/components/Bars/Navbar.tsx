import React from 'react';
import Image from 'next/image';
import SearchInput from '../Inputs/SearchInput';
import AuthButton from '../Buttons/AuthButton';

const Navbar = () => {
  return (
    <div>
      <div>
      <Image
        width={30}
        height={30}
        src='/logo.png'
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