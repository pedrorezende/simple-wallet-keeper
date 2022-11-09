import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import React from "react";
import useTranslation from "next-translate/useTranslation";

export interface PasswordInputFieldProps {
  strength?: string;
  isVisible?: boolean;
  toggleVisibility?: () => void;
  onChange: (value: string) => void;
  inputProps: object;
}

export function PasswordInputField({
  strength,
  isVisible,
  toggleVisibility,
  inputProps,
  onChange,
}: PasswordInputFieldProps) {
  const { t } = useTranslation();
  return (
    <fieldset>
      <div className="relative inline-block overflow-hidden">
        <input
          role="textbox"
          required
          className="px-3 py-2 text-3xl font-light border border-gray-200 border-solid rounded-md color-gray-600 focus:outline-none"
          onChange={(e) => onChange(e.target.value)}
          type={isVisible ? "text" : "password"}
          {...inputProps}
        />
        <i
          className="absolute top-0 right-0 flex items-center h-full p-3 bg-gray-100 border cursor-pointer rounded-tr-md rounded-br-md"
          onClick={toggleVisibility}
          role="checkbox"
        >
          {isVisible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
        </i>
      </div>
      {strength && (
        <em className="block text-xs not-italic text-gray-400 uppercase">
          {t("common:password_strength")}: {strength}
        </em>
      )}
    </fieldset>
  );
}
