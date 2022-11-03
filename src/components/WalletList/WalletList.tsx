import React from "react";

export interface WalletListProps {
  prop?: string;
}

export function WalletList({ prop = "default value" }: WalletListProps) {
  return <div>WalletList {prop}</div>;
}
