import SessionWrapper from "@/components/SessionWrapper";
import { getMetadata } from "@/seo/SellPage";
import type { PageProps } from "@/types/types";
import type { Metadata } from "next";

export function generateMetadata({ params }: PageProps): Metadata {
  return getMetadata(params.locale);
}

export default function Sell() {
  return <SessionWrapper />;
}
