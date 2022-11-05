import React from "react";

type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return <div>{children}</div>;
}
