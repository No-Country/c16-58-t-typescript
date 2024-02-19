import React from 'react';
import { CiSearch } from "react-icons/ci";

const SearchInput = () => {
  return (
    <div className='flex flex-row rounded-xl box-border border-y-indigo-900 bg-white items-center px-2'>
        <input
        type='search'
        />
        <CiSearch color='black'/>
    </div>
  )
}

export default SearchInput