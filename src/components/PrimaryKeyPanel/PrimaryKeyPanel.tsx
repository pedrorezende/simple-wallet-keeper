import { usePassword } from "hooks/usePassword";
import React, { useState } from "react";
import { AuthForm } from "components/AuthForm";
import { getHashedPassword } from "utils/getHashedPassword";
import useTranslation from "next-translate/useTranslation";
import { WalletService } from "services/WalletService";

export interface PrimaryKeyPanelProps {
  encryptedWallet: string;
  onClose: () => void;
}

export function PrimaryKeyPanel({
  encryptedWallet,
  onClose,
}: PrimaryKeyPanelProps) {
  const { t } = useTranslation();
  const [privateKey, setPrivateKey] = useState<string>();
  const [error, setError] = useState();
  const password = usePassword();

  const unlock = async (e: React.FormEvent) => {
    e.preventDefault();
    const hashedPassword = getHashedPassword(password.props.value);
    try {
      const walletData = await WalletService.decrypt(
        hashedPassword,
        encryptedWallet
      );
      setPrivateKey(walletData.privateKey);
    } catch (err) {
      setError(t("common:invalid_password"));
    }
  };

  const renderAuthPanel = () => {
    return (
      <div>
        <p className="mb-5">{t("common:private_key_instructions")}</p>
        <AuthForm onSubmit={unlock} passwordData={password} error={error} />
      </div>
    );
  };

  const renderPrivateKey = () => {
    return (
      <div>
        <strong className="block mb-4 font-bold">
          {t("common:your_private_key")}
        </strong>
        <div className="p-4 bg-yellow-100">{privateKey}</div>
      </div>
    );
  };

  return (
    <div
      onClick={onClose}
      role="modal"
      className="fixed top-0 left-0 z-10 flex items-center justify-center w-full h-full cursor-pointer bg-black/60"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="px-10 py-8 bg-white rounded-md cursor-auto"
      >
        {privateKey ? renderPrivateKey() : renderAuthPanel()}
        <button
          onClick={onClose}
          className="block mx-auto mt-10 text-xs uppercase"
        >
          {t("common:close_modal")}
        </button>
      </div>
    </div>
  );
}
