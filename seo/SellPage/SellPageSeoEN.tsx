import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sell Your Products | Add a Product",
  description:
    "Sell your products on our platform. Fill out the form to add a new product, including title, category, price, description, image URL, and rating.",
  openGraph: {
    url: "https://webmart-sigma.vercel.app/en/sell",
    title: "Sell Your Products | Add a Product",
    description:
      "Sell your products on our platform. Fill out the form to add a new product, including title, category, price, description, image URL, and rating.",
    images: [
      {
        url: "https://webmart-sigma.vercel.app/images/sell-product.jpg",
        width: 800,
        height: 600,
        alt: "Sell Your Products",
      },
    ],
    siteName: "https://webmart-sigma.vercel.app",
    locale: "en",
  },
  alternates: {
    canonical: "https://webmart-sigma.vercel.app/en/sell",
  },
};
