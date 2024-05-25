import { usePathname } from "next/navigation";

const useCurrentLanguage = (): string => {
  const pathName = usePathname();
  return pathName.split("/")[1] || "en";
};

export default useCurrentLanguage;
