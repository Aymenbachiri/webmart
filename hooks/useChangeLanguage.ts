import { usePathname, useRouter } from "next/navigation";

export const useChangeLanguage = () => {
  const pathName = usePathname();
  const router = useRouter();

  const handleChangeLanguage = (lang: string) => {
    if (!pathName) {
      console.error("Pathname is null. Cannot change language.");
      return;
    }

    const pathWithoutLang = pathName?.replace(/\/[a-z]{2}\b/i, "");
    router.push(`/${lang}${pathWithoutLang}`);
    router.refresh();
  };

  return handleChangeLanguage;
};
