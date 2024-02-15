import React from "react";
import { InputProps } from "../../types/Inputs/interfaces";

function Input(props: InputProps) {
  const { placeholder, onChangeFunction, value } = props;
  return (
    <input
      placeholder={placeholder}
<<<<<<< HEAD
      className='rounded box-border border-y-indigo-900'
=======
      className="rounded box-border border-y-indigo-900"
>>>>>>> 343e4a36556a0bf9c93d71233ed169acbb24264f
      value={value}
      onChange={onChangeFunction}
    />
  );
}

export default Input;
