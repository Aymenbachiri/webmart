import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webmart | Votre boutique en ligne tout-en-un",
  description:
    "Découvrez une large gamme de produits à des prix imbattables. Achetez maintenant sur Webmart pour l'électronique, la mode, les articles ménagers, et plus encore.",
  openGraph: {
    url: "https://webmart-sigma.vercel.app/fr",
    title: "Webmart | Votre boutique en ligne tout-en-un",
    description:
      "Découvrez une large gamme de produits à des prix imbattables. Achetez maintenant sur Webmart pour l'électronique, la mode, les articles ménagers, et plus encore.",
    images: [
      {
        url: "https://webmart-sigma.vercel.app/images/logo.png",
        width: 800,
        height: 600,
        alt: "Logo Webmart",
      },
      {
        url: "https://webmart-sigma.vercel.app/images/homepage-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Bannière de la page d'accueil de Webmart",
      },
    ],
    siteName: "Webmart",
    locale: "fr",
  },
  alternates: {
    canonical: "https://webmart-sigma.vercel.app/fr",
  },
};
