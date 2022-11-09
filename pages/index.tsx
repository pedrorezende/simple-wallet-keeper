import { Container, LoginPanel, WalletPanel, WelcomePanel } from "components";
import Head from "next/head";
import { useAppSelector } from "store/hooks";
import {
  selectInitialWalletAddress,
  selectKeyringWallets,
} from "store/keyring";
import { selectPasswordHash } from "store/user";

export default function Home() {
  const wallets = useAppSelector(selectKeyringWallets);
  const initialWalletAddress = useAppSelector(selectInitialWalletAddress);
  const passwordHash = useAppSelector(selectPasswordHash);

  return (
    <Container>
      <Head>
        <title>Binance Test Assessment</title>
      </Head>
      {wallets === undefined && <WelcomePanel />}
      {wallets && !passwordHash && <LoginPanel wallets={wallets} />}
      {wallets && passwordHash && (
        <WalletPanel
          hashedPassword={passwordHash}
          wallets={wallets}
          initialWalletAddress={initialWalletAddress || ""}
        />
      )}
    </Container>
  );
}
