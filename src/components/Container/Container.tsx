import React from "react";

type ContainerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return (
    <section className="flex items-center justify-center h-screen">
      <div className="container w-full px-7 py-6 bg-white rounded-md shadow-sm min-h-[25vh] max-h-[70vh]">
        {children}
      </div>
    </section>
  );
}
