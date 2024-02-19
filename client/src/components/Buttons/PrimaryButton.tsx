import React from "react";
import { PrimaryButtonProps } from "../../types/Buttons/interfaces";

function PrimaryButton(props: PrimaryButtonProps) {
  const { title, onClickFunction } = props;
  return (
    <button
      onClick={onClickFunction}
      className="rounded-xl text-white bg-orange-700 hover:bg-orange-600 hover:scale-110 px-2"
    >
      {title}
    </button>
  );
}

export default PrimaryButton;
