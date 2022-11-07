import { ethers } from "ethers";

type EncryptedWalletPair = [address: string, encodedWallet: string];

export class WalletService {
  decrypt() {}

  verify() {}

  static async create(password: string): Promise<EncryptedWalletPair> {
    const wallet = ethers.Wallet.createRandom();
    const address = wallet.address;
    const encryptedWallet = await wallet.encrypt(password, {
      scrypt: { N: 64 },
    });
    return [address, encryptedWallet];
  }
}
