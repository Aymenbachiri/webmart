import { useSession } from "next-auth/react";
import useCurrentLanguage from "./useCurrentLanguage";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const useAuthRedirect = () => {
  const session = useSession();
  const currentLanguage = useCurrentLanguage();
  const router = useRouter();

  useEffect(() => {
    if (session.status === "unauthenticated") {
      router.push(`/${currentLanguage}/login`);
    }
  }, [session.status, currentLanguage, router]);

  return session.status === "authenticated";
};
