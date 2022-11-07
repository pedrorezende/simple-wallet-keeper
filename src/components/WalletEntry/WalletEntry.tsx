import React from "react";

export interface WalletEntryProps {
  wallet: string;
  canDelete: boolean;
}

export function WalletEntry({ wallet }: WalletEntryProps) {
  return <li>{wallet}</li>;
}
