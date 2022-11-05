import React from "react";

export interface ButtonProps {
  text: string | React.ReactNode;
  type: "submit" | "button";
}

export function Button({ text, type = "submit" }: ButtonProps) {
  return (
    <button
      className="uppercase relative px-9 py-2 text-sm text-gray-900 bg-yellow-400 rounded-sm shadow-sm active:shadow-none active:top-0.5"
      type={type}
    >
      {text}
    </button>
  );
}
