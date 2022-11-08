import { Button } from "components/Button";
import { WalletList } from "components/WalletList";
import useTranslation from "next-translate/useTranslation";
import React from "react";
import { useAppDispatch } from "store/hooks";
import { createWallet } from "store/keyring";

export interface WalletPanelProps {
  wallets: object;
  hashedPassword: string;
  initialWalletAddress: string;
}

export function WalletPanel({
  wallets,
  hashedPassword,
  initialWalletAddress,
}: WalletPanelProps) {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const onCreateWallet = () => {
    dispatch(createWallet({ password: hashedPassword, initialWallet: false }));
  };

  return (
    <div>
      <WalletList
        initialWalletAddress={initialWalletAddress}
        wallets={wallets}
      />
      <Button
        onClick={() => onCreateWallet()}
        type="button"
        text={t("common:create_wallet")}
      />
    </div>
  );
}
