import React from "react";

export interface WelcomePanelProps {
  prop?: string;
}

export function WelcomePanel({ prop = "default value" }: WelcomePanelProps) {
  return <div>WelcomePanel {prop}</div>;
}
