import { Container, WelcomePanel } from "components";
import useTranslation from "next-translate/useTranslation";
import { useAppSelector } from "store/hooks";
import { selectKeyring } from "store/keyring";

export default function Home() {
  const { t } = useTranslation();
  const keyring = useAppSelector(selectKeyring);
  return <Container>{keyring.length === 0 && <WelcomePanel />}</Container>;
}
