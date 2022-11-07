import { AuthForm } from "components/AuthForm";
import { usePassword } from "hooks/usePassword";
import useTranslation from "next-translate/useTranslation";
import React, { useState } from "react";
import { WalletService } from "services/WalletService";
import { useAppDispatch } from "store/hooks";
import { storeHashedPassword } from "store/user";
import { getHashedPassword } from "utils/getHashedPassword";

export interface LoginPanelProps {
  wallets: object;
}

export function LoginPanel({ wallets }: LoginPanelProps) {
  const { t } = useTranslation();
  const [error, setError] = useState();
  const password = usePassword();
  const dispatch = useAppDispatch();

  const onUnlock = async (e: React.FormEvent) => {
    e.preventDefault();
    const hashedPassword = getHashedPassword(password.props.value);
    const address = Object.keys(wallets)[0];
    const encryptedWallet = wallets[address] ?? "";
    const verified = await WalletService.verify(
      hashedPassword,
      encryptedWallet
    );

    if (!verified) {
      setError(t("common:invalid_password"));
      return;
    }

    dispatch(storeHashedPassword(hashedPassword));
  };

  return (
    <div>
      <h1 className="mb-2 text-xl font-bold text-gray-600">
        {t("common:login")}
      </h1>
      <p className="mb-4 text-gray-500">{t("common:login_instructions")}</p>
      <AuthForm error={error} onSubmit={onUnlock} passwordData={password} />
    </div>
  );
}
