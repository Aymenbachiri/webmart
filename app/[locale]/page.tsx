import { ImagesSliderDemo } from "@/components/aceternity/slider/ImagesSliderDemo";
import { getMetadata } from "@/seo/Home";
import type { PageProps } from "@/types/types";
import type { Metadata } from "next";

export function generateMetadata({ params }: PageProps): Metadata {
  return getMetadata(params.locale);
}

export default function HomePage() {
  return (
    <main className="container mx-auto">
      <ImagesSliderDemo />
    </main>
  );
}
