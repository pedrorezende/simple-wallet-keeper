import useTranslation from "next-translate/useTranslation";

export default function Home() {
  const { t } = useTranslation();
  return <h1 className="text-xl font-bold underline">{t("common:hello")}</h1>;
}
