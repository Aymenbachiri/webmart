import type { Metadata } from "next";
import { metadata as metadataEn } from "./ProductsPageSeoEN";
import { metadata as metadataFr } from "./ProductsPageSeoFR";
import { metadata as metadataAr } from "./ProductsPageSeoAR";

const metadataConfig: { [key: string]: Metadata } = {
  en: metadataEn,
  fr: metadataFr,
  ar: metadataAr,
};

export function getMetadata(locale: string): Metadata {
  return metadataConfig[locale] || metadataConfig.en;
}
