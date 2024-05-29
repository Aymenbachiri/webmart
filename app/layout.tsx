import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  alternates: {
    canonical: "https://webmart-sigma.vercel.app",
    languages: {
      en: "https://webmart-sigma.vercel.app/en",
      fr: "https://webmart-sigma.vercel.app/fr",
      ar: "https://webmart-sigma.vercel.app/ar",
    },
    media: {
      "only screen and (max-width: 600px)":
        "https://webmart-sigma.vercel.app/mobile",
    },
    types: {
      "application/rss+xml": "https://webmart-sigma.vercel.app/rss",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
