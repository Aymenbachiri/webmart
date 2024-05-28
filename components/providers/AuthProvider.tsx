"use client";

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import type { Session } from "next-auth";

type AuthProviderProps = {
  children: ReactNode;
  session?: Session | null | undefined;
};

export default function AuthProvider({ children, session }: AuthProviderProps) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
