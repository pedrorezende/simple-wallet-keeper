import React from "react";

export interface ButtonProps {
  prop?: string;
}

export function Button({ prop = "default value" }: ButtonProps) {
  return <div>Button {prop}</div>;
}
