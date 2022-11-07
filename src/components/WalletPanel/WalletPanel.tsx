import { Button } from "components/Button";
import useTranslation from "next-translate/useTranslation";
import React from "react";

export interface WalletPanelProps {
  wallets: object;
  onCreateWallet: () => void;
}

export function WalletPanel({ wallets, onCreateWallet }: WalletPanelProps) {
  const { t } = useTranslation();

  const button = (
    <Button
      onClick={() => onCreateWallet()}
      type="button"
      text={t("common:create_wallet")}
    />
  );

  if (Object.keys(wallets).length === 0) {
    return (
      <div>
        <p className="mb-10 text-2xl font-light text-gray-700">
          {t("common:empty_wallet")}
        </p>
        {button}
      </div>
    );
  }

  return null;
}
