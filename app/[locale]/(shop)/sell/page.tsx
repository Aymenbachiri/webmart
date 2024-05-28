import SellPage from "@/pages/SellPage";
import { getMetadata } from "@/seo/SellPage";
import { PageProps } from "@/types/types";
import type { Metadata } from "next";

export function generateMetadata({ params }: PageProps): Metadata {
  return getMetadata(params.locale);
}

export default function Sell(): JSX.Element {
  return <SellPage />;
}
