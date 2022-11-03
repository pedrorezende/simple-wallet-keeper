import React from "react";

export interface ErrorBoundaryProps {
  prop?: string;
}

export function ErrorBoundary({ prop = "default value" }: ErrorBoundaryProps) {
  return <div>ErrorBoundary {prop}</div>;
}
