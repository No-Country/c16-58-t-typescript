import React from 'react';
import { CiSearch } from "react-icons/ci";

const SearchInput = () => {
  return (
    <div className='flex flex-row rounded box-border border-y-indigo-900'>
        <input
        type='search'
        />
        <CiSearch />
    </div>
  )
}

export default SearchInput