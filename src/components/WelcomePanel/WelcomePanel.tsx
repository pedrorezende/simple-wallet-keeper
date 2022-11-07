import { AuthForm } from "components/AuthForm";
import { usePassword } from "hooks/usePassword";
import useTranslation from "next-translate/useTranslation";
import { useAppDispatch } from "store/hooks";
import { createWallet } from "store/keyring";
import { storeHashedPassword } from "store/user";
import { getHashedPassword } from "utils/getHashedPassword";

export function WelcomePanel() {
  const { t } = useTranslation();
  const password = usePassword({ enableStrengthChecker: true });
  const dispatch = useAppDispatch();

  const onCreateKeyring = async (e: React.FormEvent) => {
    e.preventDefault();
    const hashedPassword = getHashedPassword(password.props.value);
    await dispatch(
      createWallet({
        password: hashedPassword,
        initialWallet: true,
      })
    );
    dispatch(storeHashedPassword(hashedPassword));
  };

  return (
    <div>
      <h1 className="mb-2 text-xl font-bold text-gray-600">
        {t("common:welcome")}
      </h1>
      <p className="mb-4 text-gray-500">{t("common:welcome_instructions")}</p>
      <AuthForm onSubmit={onCreateKeyring} passwordData={password} />
    </div>
  );
}
