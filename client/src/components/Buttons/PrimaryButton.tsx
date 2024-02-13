import React from "react";
import { PrimaryButtonProps } from "../../types/Buttons/interfaces";

function PrimaryButton(props: PrimaryButtonProps) {
  const { title, onClickFunction } = props;
  return (
    <button
      onClick={onClickFunction}
      className="rounded-xl bg-lime-800 text-white hover:bg-lime-700 hover:scale-110"
    >
      {title}
    </button>
  );
}

export default PrimaryButton;
