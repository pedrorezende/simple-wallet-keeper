import { Container, WalletPanel, WelcomePanel } from "components";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { createWallet, selectKeyringWallets } from "store/keyring";
import { selectPasswordHash } from "store/user";

export default function Home() {
  const wallets = useAppSelector(selectKeyringWallets);
  const passwordHash = useAppSelector(selectPasswordHash);
  const dispatch = useAppDispatch();

  const onCreateWallet = () => {
    if (!passwordHash) {
      throw new Error("[Wallet Creation] Password hash is not defined");
    }
    //dispatch(createWallet(passwordHash));
  };

  return (
    <Container>
      {wallets === undefined && <WelcomePanel />}
      {wallets && passwordHash && (
        <WalletPanel wallets={wallets} onCreateWallet={onCreateWallet} />
      )}
    </Container>
  );
}
