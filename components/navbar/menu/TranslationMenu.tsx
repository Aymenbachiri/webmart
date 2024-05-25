"use client";

import { CommonProps } from "@/constants/Constants";
import AlgeriaFlag from "@/svg/translation/AlgeriaFlag";
import FranceFlag from "@/svg/translation/FranceFlag";
import UsaFlag from "@/svg/translation/UsaFlag";
import World from "@/svg/translation/World";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  IconButton,
} from "@material-tailwind/react";
import { usePathname, useRouter } from "next/navigation";

export default function TranslationMenu() {
  const pathName = usePathname();
  const router = useRouter();

  const handleChangeLanguage = (lang: string) => {
    // Extract the current path without the language segment
    const pathWithoutLang = pathName.replace(/\/[a-z]{2}\b/i, "");

    // Redirect to the selected language route appended with the current route path
    router.push(`/${lang}${pathWithoutLang}`);
    router.refresh();
  };
  return (
    <Menu>
      <MenuHandler className="dark:text-black">
        <IconButton {...CommonProps} variant="text">
          <World />
        </IconButton>
      </MenuHandler>
      <MenuList {...CommonProps} className="flex flex-col gap-2">
        <MenuItem
          onClick={() => handleChangeLanguage("en")}
          {...CommonProps}
          className="flex items-center gap-4 py-2 pl-2 pr-8"
        >
          <UsaFlag />
          english
        </MenuItem>
        <MenuItem
          onClick={() => handleChangeLanguage("fr")}
          {...CommonProps}
          className="flex items-center gap-4 py-2 pl-2 pr-8"
        >
          <FranceFlag />
          french
        </MenuItem>
        <MenuItem
          onClick={() => handleChangeLanguage("ar")}
          {...CommonProps}
          className="flex items-center gap-4 py-2 pl-2 pr-8"
        >
          <AlgeriaFlag />
          arabic
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
