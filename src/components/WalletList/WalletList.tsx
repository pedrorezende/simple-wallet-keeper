import { WalletEntry } from "components/WalletEntry";
import React from "react";

export interface WalletListProps {
  wallets: object;
  initialWalletAddress: string;
}

export function WalletList({ wallets, initialWalletAddress }: WalletListProps) {
  return (
    <ul className="flex flex-col gap-2 mb-4">
      {Object.keys(wallets).map((address) => (
        <WalletEntry
          key={`wallet-${address}`}
          encryptedWallet={wallets[address] || ""}
          address={address}
          canDelete={initialWalletAddress !== address}
        />
      ))}
    </ul>
  );
}
