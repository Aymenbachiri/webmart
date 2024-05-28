"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ImagesSlider } from "./ImagesSlider";
import useCurrentLanguage from "@/hooks/useCurrentLanguage";

export function ImagesSliderDemo() {
  const currentLanguage = useCurrentLanguage();
  const images = [
    "https://img.freepik.com/free-photo/interior-clothing-store-with-stylish-merchandise-racks-fashionable-brand-design-casual-wear-modern-boutique-empty-fashion-showroom-shopping-centre-with-elegant-merchandise_482257-65537.jpg?t=st=1716471656~exp=1716475256~hmac=ce0c30506cef84eddaa6df0290754729cc1b1afeefe8bb440055b38b4b2f16a9&w=996",
    "https://img.freepik.com/free-photo/cheerful-shopper-holding-orange-shopping-bag-shoulder-turn-around-camera-with-thumbs-up-recomm_1258-164210.jpg?t=st=1716471664~exp=1716475264~hmac=1b35588c8e4139eeee0358f14c3fbbba8d8affebe4c114e58078062fe84cf275&w=996",
    "https://img.freepik.com/free-photo/beautiful-clothes-shopping-store_1203-2233.jpg?t=st=1716471666~exp=1716475266~hmac=b441e0dfc81272d78517d1d2997afc4507e2530cc55678592cc5533e5d72170e&w=1380",
    "https://img.freepik.com/free-photo/shopping-center-showroom-with-clothes-from-trendy-collections-retail-market-boutique-with-modern-fashionable-wear-empty-clothing-store-filled-with-new-trends-fashion-brands_482257-61769.jpg?t=st=1716471673~exp=1716475273~hmac=4a119578dfc6ac17c01b7115209885ff335f055b9bca18bc0c2a2c45d0057f9e&w=996",
    "https://img.freepik.com/free-photo/clothing-store-with-blurred-effect_23-2148164768.jpg?t=st=1716471681~exp=1716475281~hmac=16f9ab17ae1246a628787e1afdeeae5a6c58f74d2545d8d17f2faa203577ebef&w=1380",
  ];
  return (
    <ImagesSlider className="h-[50rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.h1 className="font-bold text-xl md:text-6xl text-center bg-clip-text text-gray-400 dark:text-white bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          Shop with ease, shop with us!
        </motion.h1>
        <motion.h2 className="font-semibold text-md md:text-xl text-center bg-clip-text text-gray-400 dark:text-white bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          Easy-to-find products.
        </motion.h2>
        <motion.p className=" text-center bg-clip-text text-gray-400 dark:text-white bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          Your one-stop online destination for all your shopping needs.
        </motion.p>
        <Link
          href={`/${currentLanguage}/products`}
          className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4"
        >
          <span>Discover now →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </Link>
      </motion.div>
    </ImagesSlider>
  );
}
