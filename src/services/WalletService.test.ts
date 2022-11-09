import { WalletService } from "./WalletService";

describe("WalletService", () => {
  const password = "superhardpassword";

  it("should create a new wallet", async () => {
    const wallet = await WalletService.create(password);
    expect(wallet).toHaveLength(2);
    expect(wallet[0]).toHaveLength(42);
    expect(wallet[1]).toBeDefined();
  });

  it("should decrypt and verify a wallet", async () => {
    const wallet = await WalletService.create(password);
    const decryptedWallet = await WalletService.decrypt(password, wallet[1]);
    expect(decryptedWallet.privateKey).toBeDefined();
    expect(decryptedWallet.publicKey).toBeDefined();
    expect(await WalletService.verify(password, wallet[1])).toBeTruthy();
    expect(await WalletService.verify("wrongpassword", wallet[1])).toBeFalsy();
  });
});
