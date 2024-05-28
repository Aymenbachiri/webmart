"use client";

import { CommonProps } from "@/constants/Constants";
import { useChangeLanguage } from "@/hooks/useChangeLanguage";
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

export default function TranslationMenu() {
  const handleChangeLanguage = useChangeLanguage();
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
