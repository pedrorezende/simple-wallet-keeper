import { Container, LoginPanel, WalletPanel, WelcomePanel } from "components";
import { useAppSelector } from "store/hooks";
import { selectKeyringWallets } from "store/keyring";
import { selectPasswordHash } from "store/user";

export default function Home() {
  const wallets = useAppSelector(selectKeyringWallets);
  const passwordHash = useAppSelector(selectPasswordHash);

  return (
    <Container>
      {wallets === undefined && <WelcomePanel />}
      {wallets && !passwordHash && <LoginPanel wallets={wallets} />}
      {wallets && passwordHash && <WalletPanel wallets={wallets} />}
    </Container>
  );
}
