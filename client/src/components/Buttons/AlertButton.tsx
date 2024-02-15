import React from "react";
import { AlertButtonProps } from "../../types/Buttons/interfaces";

function AlertButton(props: AlertButtonProps) {
  const { title, onClickFunction } = props;
  return (
    <button
      onClick={onClickFunction}
      className="rounded-xl bg-red-700 text-white hover:bg-lime-800 hover:scale-110"
    >
      {title}
    </button>
  );
}

export default AlertButton;
