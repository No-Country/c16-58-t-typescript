import React from 'react';
import Image from 'next/image';
import SearchInput from '../Inputs/SearchInput';
import AuthButton from '../Buttons/AuthButton';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='bg-cyan-900 flex flex-row items-center justify-between py-3 px-6'>
        <nav>
          <Link href=''>
            Home
          </Link>
          <Link href=''>
            Historia
          </Link>
          <Link href=''>
            Carta
          </Link>
        </nav>
          <Image
            width={75}
            height={75}
            src='/logo.svg'
            alt='Logo de la app'
            />
        <nav>
            <Link href=''>
              Home
            </Link>
            <Link href=''>
              Historia
            </Link>
            <Link href=''>
              Carta
            </Link>
          </nav>
          <AuthButton/>
    </div>
  )
}

export default Navbar;