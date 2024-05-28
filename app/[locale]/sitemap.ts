import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://webmart-sigma.vercel.app",
      lastModified: "2024-05-28",
      alternates: {
        languages: {
          en: "https://webmart-sigma.vercel.app/en",
          fr: "https://webmart-sigma.vercel.app/fr",
          ar: "https://webmart-sigma.vercel.app/ar",
        },
      },
    },
    {
      url: "https://webmart-sigma.vercel.app/products",
      lastModified: "2024-05-28",
      alternates: {
        languages: {
          en: "https://webmart-sigma.vercel.app/en/products",
          fr: "https://webmart-sigma.vercel.app/fr/products",
          ar: "https://webmart-sigma.vercel.app/ar/products",
        },
      },
    },
    {
      url: "https://webmart-sigma.vercel.app/sell",
      lastModified: "2024-05-28",
      alternates: {
        languages: {
          en: "https://webmart-sigma.vercel.app/en/sell",
          fr: "https://webmart-sigma.vercel.app/fr/sell",
          ar: "https://webmart-sigma.vercel.app/ar/sell",
        },
      },
    },
    {
      url: "https://webmart-sigma.vercel.app/cart",
      lastModified: "2024-05-28",
      alternates: {
        languages: {
          en: "https://webmart-sigma.vercel.app/en/cart",
          fr: "https://webmart-sigma.vercel.app/fr/cart",
          ar: "https://webmart-sigma.vercel.app/ar/cart",
        },
      },
    },
  ];
}
