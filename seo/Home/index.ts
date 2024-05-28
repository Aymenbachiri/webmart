import type { Metadata } from "next";
import { metadata as metadataEn } from "./HomePageSeoEN";
import { metadata as metadataFr } from "./HomePageSeoFR";
import { metadata as metadataAr } from "./HomePageSeoAR";

const metadataConfig: { [key: string]: Metadata } = {
  en: metadataEn,
  fr: metadataFr,
  ar: metadataAr,
};

export function getMetadata(locale: string): Metadata {
  return metadataConfig[locale] || metadataConfig.en;
}
