import React from "react";
import { InputProps } from "../../types/Inputs/interfaces";

function Input(props: InputProps) {
  const { name, placeholder, onChangeFunction, value, } = props;
  return (
    <input
      name={name}
      placeholder={placeholder}
      className="text-black rounded-xl w-full py-3 px-2 my-3 box-border border border-gray-700"
      value={value}
      onChange={onChangeFunction}
    />
  );
}

export default Input;
