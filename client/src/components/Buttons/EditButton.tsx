import React from "react";
import { PrimaryButtonProps } from "../../types/Buttons/interfaces";

function PrimaryButton(props: PrimaryButtonProps) {
  const { title, onClickFunction } = props;
  return (
    <button
      onClick={onClickFunction}
      className="text-stone-800 hover:scale-110 decoration-slate-900 underline-offset-0"
    >
      {title}
    </button>
  );
}

export default PrimaryButton;
