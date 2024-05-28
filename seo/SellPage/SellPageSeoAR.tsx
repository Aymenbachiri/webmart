import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "بيع منتجاتك | إضافة منتج",
  description:
    "قم ببيع منتجاتك على منصتنا. املأ النموذج لإضافة منتج جديد، بما في ذلك العنوان والفئة والسعر والوصف ورابط الصورة والتقييم.",
  openGraph: {
    url: "https://webmart-sigma.vercel.app/ar/sell",
    title: "بيع منتجاتك | إضافة منتج",
    description:
      "قم ببيع منتجاتك على منصتنا. املأ النموذج لإضافة منتج جديد، بما في ذلك العنوان والفئة والسعر والوصف ورابط الصورة والتقييم.",
    images: [
      {
        url: "https://webmart-sigma.vercel.app/images/sell-product.jpg",
        width: 800,
        height: 600,
        alt: "بيع منتجاتك",
      },
    ],
    siteName: "https://webmart-sigma.vercel.app",
    locale: "ar",
  },
  alternates: {
    canonical: "https://webmart-sigma.vercel.app/ar/sell",
  },
};
