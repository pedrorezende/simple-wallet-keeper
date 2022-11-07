import { WalletEntry } from "components/WalletEntry";
import useTranslation from "next-translate/useTranslation";
import React from "react";

export interface WalletListProps {
  wallets: string[];
  initialWalletAddress: string;
}

export function WalletList({ wallets, initialWalletAddress }: WalletListProps) {
  const { t } = useTranslation();
  return (
    <ul>
      {wallets.map((wallet) => (
        <WalletEntry
          key={`wallet-${wallet}`}
          wallet={wallet}
          canDelete={initialWalletAddress === wallet}
        />
      ))}
    </ul>
  );
}
