import { MetadataRoute } from "next";

const baseUrl = process.env.API_URL || "https://webmart-sigma.vercel.app";
const languages = ["en", "ar", "fr"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const allProducts = await Promise.all(
      languages.map(async (lang) => {
        const response = await fetch(`${baseUrl}/${lang}/product`);
        if (!response.ok) {
          throw new Error(
            `Failed to fetch products for ${lang}: ${response.statusText}`
          );
        }
        const products = await response.json();
        return { lang, products };
      })
    );

    const productEntries: MetadataRoute.Sitemap = allProducts.flatMap(
      ({ lang, products }) =>
        products.map(({ id }: any) => ({
          url: `${baseUrl}/${lang}/products/${id}`,
          alternates: languages.reduce((acc, lang) => {
            acc[lang] = `${baseUrl}/${lang}/products/${id}`;
            return acc;
          }, {} as { [key: string]: string }),
        }))
    );

    const staticEntries: MetadataRoute.Sitemap = languages.flatMap((lang) =>
      [
        "",
        "products",
        "edit-profile",
        "dashboard",
        "cart",
        "login",
        "register",
      ].map((path) => ({
        url: `${baseUrl}/${lang}/${path}`,
        alternates: languages.reduce((acc, lang) => {
          acc[lang] = `${baseUrl}/${lang}/${path}`;
          return acc;
        }, {} as { [key: string]: string }),
      }))
    );

    return [...staticEntries, ...productEntries];
  } catch (error) {
    console.error("Error generating sitemap:", error);
    throw new Error("Error generating sitemap");
  }
}
