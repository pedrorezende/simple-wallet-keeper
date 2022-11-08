import { useWalletFunds } from "hooks/useWalletFunds";
import useTranslation from "next-translate/useTranslation";
import React from "react";
import { useAppDispatch } from "store/hooks";
import { removeWallet } from "store/keyring";

export interface WalletEntryProps {
  wallet: object;
  address: string;
  canDelete: boolean;
}

export function WalletEntry({ wallet, address, canDelete }: WalletEntryProps) {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const balance = useWalletFunds({ walletAddress: address });
  const onRemove = () => {
    if (confirm(t("common:deletion_prompt"))) {
      dispatch(removeWallet(address));
    }
  };

  return (
    <li className="flex justify-between px-6 py-3 font-light text-gray-500 bg-gray-100 rounded-md shadow-sm text-md hover:bg-gray-50">
      <div>
        <div>{address}</div>
        <div className="flex gap-3 mt-2 text-xs">
          <button className="text-blue-600 uppercase">View Primary Key</button>
          {canDelete && (
            <button className="text-red-500 uppercase" onClick={onRemove}>
              Delete
            </button>
          )}
        </div>
      </div>
      <div>{balance}</div>
    </li>
  );
}
