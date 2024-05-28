import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vendez vos produits | Ajouter un produit",
  description:
    "Vendez vos produits sur notre plateforme. Remplissez le formulaire pour ajouter un nouveau produit, y compris le titre, la catégorie, le prix, la description, l'URL de l'image et la note.",
  openGraph: {
    url: "https://webmart-sigma.vercel.app/fr/sell",
    title: "Vendez vos produits | Ajouter un produit",
    description:
      "Vendez vos produits sur notre plateforme. Remplissez le formulaire pour ajouter un nouveau produit, y compris le titre, la catégorie, le prix, la description, l'URL de l'image et la note.",
    images: [
      {
        url: "https://webmart-sigma.vercel.app/images/sell-product.jpg",
        width: 800,
        height: 600,
        alt: "Vendez vos produits",
      },
    ],
    siteName: "https://webmart-sigma.vercel.app",
    locale: "fr",
  },
  alternates: {
    canonical: "https://webmart-sigma.vercel.app/fr/sell",
  },
};
