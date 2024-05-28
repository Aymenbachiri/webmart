import ProductsPage from "@/pages/ProductsPage";
import { getMetadata } from "@/seo/ProductsPage";
import type { PageProps } from "@/types/types";
import type { Metadata } from "next";

export function generateMetadata({ params }: PageProps): Metadata {
  return getMetadata(params.locale);
}

export default function Products(): JSX.Element {
  return <ProductsPage />;
}
