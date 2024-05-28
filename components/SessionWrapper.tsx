"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
import useCurrentLanguage from "@/hooks/useCurrentLanguage";
import SellPage from "@/pages/SellPage";

export default function SessionWrapper() {
  const { data: session, status } = useSession();
  const [userEmail, setUserEmail] = useState("");
  const [isClient, setIsClient] = useState(false);
  const currentLanguage = useCurrentLanguage();
  const router = useRouter();

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      status === "authenticated" &&
      session?.user?.email
    ) {
      setUserEmail(session.user.email);
    }
    setIsClient(true); // Ensures that the component is rendered on the client-side

    // Cleanup function
    return () => {
      setUserEmail("");
      setIsClient(false);
    };
  }, [session, status]);

  // Ensure the component is only rendered on the client-side
  if (!isClient) {
    return null;
  }

  if (status === "loading") {
    return <LoadingSpinner />;
  }

  if (status === "unauthenticated") {
    router.push(`/${currentLanguage}/login`);
    return null;
  }

  return (
    <SellPage
      session={session}
      currentLanguage={currentLanguage}
      userEmail={userEmail}
    />
  );
}
