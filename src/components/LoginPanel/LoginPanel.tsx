import { AuthForm } from "components/AuthForm";
import { usePassword } from "hooks/usePassword";
import useTranslation from "next-translate/useTranslation";
import React from "react";
import { useAppDispatch } from "store/hooks";

export function LoginPanel() {
  const { t } = useTranslation();
  const password = usePassword();
  const dispatch = useAppDispatch();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1 className="mb-2 text-xl font-bold text-gray-600">
        {t("common:welcome")}
      </h1>
      <p className="mb-4 text-gray-500">{t("common:welcome_instructions")}</p>
      <AuthForm onSubmit={onSubmit} passwordData={password} />
    </div>
  );
}
