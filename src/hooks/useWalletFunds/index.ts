import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { provider } from "utils/getWeb3Provider";

type useWalletFundsProps = {
  walletAddress: string;
};

export const useWalletFunds = ({
  walletAddress,
}: useWalletFundsProps): string | unknown => {
  const [funds, setFunds] = useState<string>();

  const loadBalance = async () => {
    if (provider) {
      const balance = await provider.getBalance(walletAddress);
      setFunds(ethers.utils.formatEther(balance));
    } else {
      console.error("Error connecting to provider");
    }
  };

  useEffect(() => {
    const EVERY_MINUTE = 60 * 1000;
    const interval = setInterval(() => {
      loadBalance();
    }, EVERY_MINUTE);
    loadBalance();
    return () => {
      clearInterval(interval);
    };
  }, []);

  if (funds !== undefined) {
    return funds + " " + process.env.NEXT_PUBLIC_CHAIN_CURRENCY;
  }

  return null;
};
