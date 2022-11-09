import useTranslation from "next-translate/useTranslation";
import { useState } from "react";
import { passwordStrength } from "check-password-strength";

export type usePasswordParams = {
  enableStrengthChecker?: boolean;
};

export type PasswordProps = {
  value: string;
  placeholder: string;
};

export type usePasswordOutput = {
  toggleVisibility: () => void;
  strength?: string;
  isVisible?: boolean;
  value?: string;
  onChange: (value: string) => void;
  props: PasswordProps;
};

export const usePassword = ({
  enableStrengthChecker = false,
}: usePasswordParams = {}): usePasswordOutput => {
  const { t } = useTranslation();
  const [value, setValue] = useState<string>("");
  const [isVisible, setVisible] = useState<boolean>();
  const [strength, setStrength] = useState<string>();

  const checkStrength = (password: string) => {
    const result = passwordStrength(password).value;
    setStrength(t("common:" + result.toLowerCase().replace(" ", "_")));
  };

  const onChange = (value: string) => {
    if (enableStrengthChecker) {
      checkStrength(value);
    }
    setValue(value);
  };

  return {
    toggleVisibility: () => setVisible(!isVisible),
    strength,
    isVisible,
    onChange,
    props: {
      value,
      placeholder: t("common:password"),
      type: isVisible ? "text" : "password",
    },
  };
};
