import React from "react";

type Props = {
  text: string;
  _onClick: () => void;
  size?: "small" | "big";
};

function ColorButton({ text, _onClick, size = "small" }: Props) {
  return (
    <div
      className={`rounded-md bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300 p-[0.2rem] ${
        size === "big" ? "p-[0.3rem]" : "p-[0.2rem]"
      }`}
    >
      <button
        className={`bg-white rounded-sm text-base p-[0.3rem] hover:opacity-90 transition-opacity ${
          size === "big" ? "p-4 text-2xl" : "p-[0.3rem] text-base"
        }`}
        onClick={_onClick}
      >
        {text}
      </button>
    </div>
  );
}

export default ColorButton;
