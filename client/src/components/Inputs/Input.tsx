import React from "react";
import { InputProps } from "../../types/Inputs/interfaces";

function Input(props: InputProps) {
  const { name, placeholder, onChangeFunction, value } = props;
  return (
    <input
      name={name}
      placeholder={placeholder}
      className='rounded-xl w-full py-3 px-2 my-4 box-border border border-gray-700'
      value={value}
      onChange={onChangeFunction}
    />
  );
}

export default Input;
