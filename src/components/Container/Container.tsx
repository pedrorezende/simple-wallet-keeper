import React from "react";

export interface ContainerProps {
  prop?: string;
}

export function Container({ prop = "default value" }: ContainerProps) {
  return <div>Container {prop}</div>;
}
