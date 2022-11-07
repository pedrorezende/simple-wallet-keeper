import { Container, LoginPanel, WalletPanel, WelcomePanel } from "components";
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
