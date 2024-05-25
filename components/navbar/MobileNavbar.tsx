"use client";
import { Collapse } from "@material-tailwind/react";
import React from "react";
import NavList from "./list/NavList";

interface MobileNavProps {
  openNav: boolean;
}

const MobileNavbar: React.FC<MobileNavProps> = ({ openNav }) => {
  return (
    <Collapse open={openNav}>
      <NavList />
    </Collapse>
  );
};

export default MobileNavbar;
