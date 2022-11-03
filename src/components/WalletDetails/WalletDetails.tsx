import React from "react";

export interface WalletDetailsProps {
  prop?: string;
}

export function WalletDetails({ prop = "default value" }: WalletDetailsProps) {
  return <div>WalletDetails {prop}</div>;
}
