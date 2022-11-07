import useTranslation from "next-translate/useTranslation";
import React from "react";

export interface WalletListProps {
  wallets: [];
}

export function WalletList({ wallets }: WalletListProps) {
  const { t } = useTranslation();
  return (
    <div>{wallets.length === 0 && <div>{t("common:empty_wallet")}</div>}</div>
  );
}
