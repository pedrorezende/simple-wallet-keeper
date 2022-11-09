import { PrimaryKeyPanel } from "components/PrimaryKeyPanel";
import { useWalletFunds } from "hooks/useWalletFunds";
import useTranslation from "next-translate/useTranslation";
import React, { useState } from "react";
import { useAppDispatch } from "store/hooks";
import { removeWallet } from "store/keyring";

export interface WalletEntryProps {
  encryptedWallet: string;
  address: string;
  canDelete: boolean;
}

export function WalletEntry({
  encryptedWallet,
  address,
  canDelete,
}: WalletEntryProps) {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const balance = useWalletFunds({ walletAddress: address });
  const [displayPrimaryKey, setDisplayPrimaryKey] = useState(false);

  const onRemove = () => {
    if (confirm(t("common:deletion_prompt"))) {
      dispatch(removeWallet(address));
    }
  };

  return (
    <li className="flex justify-between px-6 py-3 font-light text-gray-500 bg-gray-100 rounded-md shadow-sm text-md hover:bg-gray-50">
      <div>
        <div>{address}</div>
        {displayPrimaryKey && (
          <PrimaryKeyPanel
            onClose={() => setDisplayPrimaryKey(false)}
            encryptedWallet={encryptedWallet}
          />
        )}
        <div className="flex gap-3 mt-2 text-xs">
          {!displayPrimaryKey && (
            <button
              role="button"
              onClick={() => setDisplayPrimaryKey(true)}
              className="text-blue-600 uppercase"
            >
              {t("common:view_primary_key")}
            </button>
          )}

          {displayPrimaryKey && (
            <button
              role="button"
              onClick={() => setDisplayPrimaryKey(false)}
              className="text-blue-600 uppercase"
            >
              {t("common:hide_primary_key")}
            </button>
          )}

          {canDelete && (
            <button
              role="button"
              className="text-red-500 uppercase"
              onClick={onRemove}
            >
              {t("common:delete_wallet")}
            </button>
          )}
        </div>
      </div>
      <div>{balance}</div>
    </li>
  );
}
