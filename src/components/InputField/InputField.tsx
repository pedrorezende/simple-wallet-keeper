import React from "react";

export interface InputFieldProps {
  prop?: string;
}

export function InputField({ prop = "default value" }: InputFieldProps) {
  return <div>InputField {prop}</div>;
}
