import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webmart | Your One-Stop Online Shop",
  description:
    "Discover a wide range of products at unbeatable prices. Shop now at Webmart for electronics, fashion, home goods, and more.",
  openGraph: {
    url: "https://webmart-sigma.vercel.app",
    title: "Webmart | Your One-Stop Online Shop",
    description:
      "Discover a wide range of products at unbeatable prices. Shop now at Webmart for electronics, fashion, home goods, and more.",
    images: [
      {
        url: "https://webmart-sigma.vercel.app/images/logo.png",
        width: 800,
        height: 600,
        alt: "Webmart Logo",
      },
      {
        url: "https://webmart-sigma.vercel.app/images/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Webmart Homepage Banner",
      },
    ],
    siteName: "Webmart",
    locale: "en",
  },
  alternates: {
    canonical: "https://webmart-sigma.vercel.app",
  },
};
