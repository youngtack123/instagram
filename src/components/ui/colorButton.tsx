import React from "react";

type Props = {
  text: string;
  _onClick: () => void;
};

function ColorButton({ text, _onClick }: Props) {
  return (
    <div className="rounded-md bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300 p-[0.2rem]">
      <button
        className="bg-white rounded-sm text-base p-[0.3rem] hover:opacity-90 transition-opacity"
        onClick={_onClick}
      >
        {text}
      </button>
    </div>
  );
}

export default ColorButton;
