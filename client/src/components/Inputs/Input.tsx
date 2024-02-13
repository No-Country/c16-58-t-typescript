import React from "react";
import { InputProps } from "../../types/Inputs/interfaces";

function Input(props: InputProps) {
  const { placeholder, onChangeFunction, value } = props;
  return (
    <input
      placeholder={placeholder}
      className="rounded box-border border-y-indigo-900"
      value={value}
      onChange={onChangeFunction}
    />
  );
}

export default Input;
