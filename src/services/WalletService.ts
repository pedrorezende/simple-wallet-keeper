import { ethers } from "ethers";

type EncryptedWalletPair = [address: string, encodedWallet: string];

export class WalletService {
  static async decrypt(password: string, encryptedWallet: string) {
    return await ethers.Wallet.fromEncryptedJson(encryptedWallet, password);
  }

  static async verify(
    password: string,
    encryptedWallet: string
  ): Promise<boolean> {
    try {
      await WalletService.decrypt(password, encryptedWallet);
      return true;
    } catch (_) {
      return false;
    }
  }

  static async create(password: string): Promise<EncryptedWalletPair> {
    const wallet = ethers.Wallet.createRandom();
    const address = wallet.address;
    const encryptedWallet = await wallet.encrypt(password, {
      scrypt: { N: 64 },
    });
    return [address, encryptedWallet];
  }
}
