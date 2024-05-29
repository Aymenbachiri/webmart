import { NextIntlClientProvider, useMessages } from "next-intl";
import { notFound } from "next/navigation";
import { useLocale } from "next-intl";
import { Providers } from "@/components/providers/ThemeProvider";
import StickyNavbar from "@/components/navbar/StickyNavbar";
import AuthProvider from "@/components/providers/AuthProvider";
import MaterialTailwindProvider from "@/components/providers/MaterialTailwindProvider";
import ReduxProvider from "@/components/providers/ReduxProvider";
import Hreflang from "@/components/translation/Hreflang";
import { useSession } from "next-auth/react";

// export const metadata = {
//   alternates: {
//     canonical: "https://webmart-sigma.vercel.app",
//     languages: {
//       en: "https://webmart-sigma.vercel.app/en",
//       fr: "https://webmart-sigma.vercel.app/fr",
//       ar: "https://webmart-sigma.vercel.app/ar",
//     },
//     media: {
//       "only screen and (max-width: 600px)":
//         "https://webmart-sigma.vercel.app/mobile",
//     },
//     types: {
//       "application/rss+xml": "https://webmart-sigma.vercel.app/rss",
//     },
//   },
// };

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const dir = locale === "ar" ? "rtl" : "ltr";
  const messages = useMessages();
  const nextLocale = useLocale();
  if (nextLocale !== locale) {
    notFound();
  }
  const supportedLanguages = ["en", "fr", "ar"];
  const defaultLocale = "en";

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      {/* <head>
        <Hreflang
          supportedLanguages={supportedLanguages}
          defaultLocale={defaultLocale}
        />
      </head> */}
      <body>
        <AuthProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Providers>
              <ReduxProvider>
                <MaterialTailwindProvider>
                  <>
                    <StickyNavbar />
                    {children}
                  </>
                </MaterialTailwindProvider>
              </ReduxProvider>
            </Providers>
          </NextIntlClientProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
