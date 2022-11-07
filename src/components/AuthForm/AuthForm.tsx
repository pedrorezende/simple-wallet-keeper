import { Button } from "components/Button";
import { PasswordInputField } from "components/PasswordInputField";
import { usePasswordOutput } from "hooks/usePassword";
import useTranslation from "next-translate/useTranslation";
import React from "react";

export interface AuthFormProps {
  onSubmit: (event: React.FormEvent) => void;
  passwordData: usePasswordOutput;
}

export function AuthForm({ onSubmit, passwordData }: AuthFormProps) {
  const { t } = useTranslation();
  return (
    <form onSubmit={onSubmit}>
      <PasswordInputField
        onChange={passwordData.onChange}
        isVisible={passwordData.isVisible}
        toggleVisibility={passwordData.toggleVisibility}
        strength={passwordData.strength}
        inputProps={{ ...passwordData.props }}
      />
      <div className="mt-4">
        <Button type="submit" text={t("common:proceed")} />
      </div>
    </form>
  );
}
