import React from "react";

export interface WalletEntryProps {
  prop?: string;
}

export function WalletEntry({ prop = "default value" }: WalletEntryProps) {
  return <div>WalletEntry {prop}</div>;
}
