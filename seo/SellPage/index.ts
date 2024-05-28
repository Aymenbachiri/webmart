import type { Metadata } from "next";
import { metadata as metadataEn } from "./SellPageSeoEN";
import { metadata as metadataFr } from "./SellPageSeoFR";
import { metadata as metadataAr } from "./SellPageSeoAR";

const metadataConfig: { [key: string]: Metadata } = {
  en: metadataEn,
  fr: metadataFr,
  ar: metadataAr,
};

export async function getMetadata(locale: string): Promise<Metadata> {
  return metadataConfig[locale] || metadataConfig.en;
}
