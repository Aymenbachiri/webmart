"use client";

import { ThemeProvider } from "@material-tailwind/react";

interface MaterialTailwindProviderProps {
  children: React.ReactElement;
}

export default function MaterialTailwindProvider({
  children,
}: MaterialTailwindProviderProps) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
