import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ويب مارت | متجرك الإلكتروني الشامل",
  description:
    "اكتشف مجموعة واسعة من المنتجات بأسعار لا تقبل المنافسة. تسوق الآن على ويب مارت للإلكترونيات، الأزياء، السلع المنزلية، وأكثر من ذلك.",
  openGraph: {
    url: "https://webmart-sigma.vercel.app/ar",
    title: "ويب مارت | متجرك الإلكتروني الشامل",
    description:
      "اكتشف مجموعة واسعة من المنتجات بأسعار لا تقبل المنافسة. تسوق الآن على ويب مارت للإلكترونيات، الأزياء، السلع المنزلية، وأكثر من ذلك.",
    images: [
      {
        url: "https://webmart-sigma.vercel.app/images/logo.png",
        width: 800,
        height: 600,
        alt: "شعار ويب مارت",
      },
      {
        url: "https://webmart-sigma.vercel.app/images/homepage-banner.jpg",
        width: 1200,
        height: 630,
        alt: "لافتة الصفحة الرئيسية لويب مارت",
      },
    ],
    siteName: "ويب مارت",
    locale: "ar",
  },
  alternates: {
    canonical: "https://webmart-sigma.vercel.app/ar",
  },
};
