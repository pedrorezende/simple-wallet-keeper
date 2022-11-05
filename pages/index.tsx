import { Container, WelcomePanel } from "components";
import useTranslation from "next-translate/useTranslation";
import { useAppSelector } from "store/hooks";
import { selectUserWallets } from "store/wallets";

export default function Home() {
  const { t } = useTranslation();
  const userWallets = useAppSelector(selectUserWallets);
  return <Container>{userWallets.length === 0 && <WelcomePanel />}</Container>;
}
