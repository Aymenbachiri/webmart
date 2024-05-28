import { useLocale } from "next-intl";

const useCurrentLanguage = (): string => {
  const locale = useLocale();
  return locale || "en";
};

export default useCurrentLanguage;
