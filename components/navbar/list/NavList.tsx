"use client";
import { CommonProps } from "@/constants/Constants";
import useCart from "@/hooks/useCart";
import useCurrentLanguage from "@/hooks/useCurrentLanguage";
import Cart from "@/svg/Cart";
import { Button, Typography } from "@material-tailwind/react";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function NavList() {
  const cart = useCart();
  const currentLanguage = useCurrentLanguage();
  const session = useSession();
  const t = useTranslations("Navbar");
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        {...CommonProps}
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href="/" className="flex items-center">
          {t("home")}
        </Link>
      </Typography>
      <Typography
        {...CommonProps}
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link
          href={`/${currentLanguage}/products`}
          className="flex items-center"
        >
          {t("products")}
        </Link>
      </Typography>
      <Typography
        {...CommonProps}
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link href={`/${currentLanguage}/sell`} className="flex items-center">
          {t("sell my products")}
        </Link>
      </Typography>
      <Typography
        {...CommonProps}
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal hidden md:block"
      >
        <Link
          href={`/${currentLanguage}/cart`}
          className="flex items-center  relative"
        >
          <div className="absolute w-4 h-4 rounded-full z-10 right-[-3px] top-[-10px] flex items-center justify-center text-[10px] text-white bg-red-600">
            {cart.length}
          </div>
          <Cart />
        </Link>
      </Typography>
      {session.status === "unauthenticated" && (
        <Typography
          {...CommonProps}
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <Link
            href={`/${currentLanguage}/login`}
            className="flex items-center"
          >
            <Button
              {...CommonProps}
              variant="gradient"
              size="sm"
              className="inline-block"
            >
              {t("log in")}
            </Button>
          </Link>
        </Typography>
      )}
    </ul>
  );
}
