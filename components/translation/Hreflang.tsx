"use client";
import type { HreflangProps } from "@/types/types";
import Head from "next/head";
import { usePathname, useSearchParams } from "next/navigation";

export default function Hreflang({
  supportedLanguages,
  defaultLocale,
}: HreflangProps): JSX.Element {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const asPath = `${pathname}${
    searchParams?.toString() ? "?" + searchParams?.toString() : ""
  }`;

  const constructUrl = (locale: string) =>
    `https://webmart-sigma.vercel.app/${locale}${asPath}`;
  return (
    <Head>
      {supportedLanguages.map((lang: string) => (
        <link
          key={lang}
          rel="alternate"
          hrefLang={lang}
          href={constructUrl(lang)}
        />
      ))}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={constructUrl(defaultLocale)}
      />
    </Head>
  );
}
