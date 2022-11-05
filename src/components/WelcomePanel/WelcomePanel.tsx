import { Button } from "components/Button";
import { PasswordInputField } from "components/PasswordInputField";
import { usePassword } from "hooks/usePassword";
import useTranslation from "next-translate/useTranslation";

export function WelcomePanel() {
  const { t } = useTranslation();
  const password = usePassword();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1 className="mb-2 text-xl font-bold text-gray-600">
        {t("common:welcome")}
      </h1>
      <p className="mb-4 text-gray-500">{t("common:welcome_instructions")}</p>
      <form onSubmit={onSubmit}>
        <PasswordInputField
          onChange={password.onChange}
          isVisible={password.isVisible}
          toggleVisibility={password.toggleVisibility}
          strength={password.strength}
          inputProps={{ ...password.props }}
        />
        <div className="mt-4">
          <Button type="submit" text={t("common:proceed")} />
        </div>
      </form>
    </div>
  );
}
