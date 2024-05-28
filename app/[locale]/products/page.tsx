import ProductsPage from "@/pages/ProductsPage";
import { getMetadata } from "@/seo/ProductsPage";
import type { PageProps } from "@/types/types";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  return getMetadata(params.locale);
}

export default function Products(): JSX.Element {
  return <ProductsPage />;
}
