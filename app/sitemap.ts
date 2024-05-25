import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.API_URL;
  const languages = ["en", "ar", "fr"];

  if (!baseUrl) {
    throw new Error("API_URL environment variable is not defined");
  }

  const response = await fetch(`${baseUrl}/product`);
  const products = await response.json();

  const productEntries: MetadataRoute.Sitemap = products
    .map(({ id }: any) => {
      return languages.map((language) => ({
        url: `${baseUrl}/${language}/products/${id}`,
        alternates: languages.reduce((acc, lang) => {
          acc[lang] = `${baseUrl}/${lang}/products/${id}`;
          return acc;
        }, {} as { [key: string]: string }),
      }));
    })
    .flat();

  const staticEntries: MetadataRoute.Sitemap = [
    "",
    "products",
    "edit-profile",
    "dashboard",
    "cart",
    "login",
    "register",
  ].map((path) => ({
    url: `${baseUrl}/en/${path}`,
    alternates: languages.reduce((acc, lang) => {
      acc[lang] = `${baseUrl}/${lang}/${path}`;
      return acc;
    }, {} as { [key: string]: string }),
  }));

  return [...staticEntries, ...productEntries];
}
