"use client";
import { CommonProps } from "@/constants/Constants";
import Cart from "@/svg/Cart";
import { Button, Typography } from "@material-tailwind/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";

export default function NavList() {
  const cart = useSelector((state: any) => state.shop.products);
  const pathName = usePathname();
  const currentLanguage = pathName.split("/")[1] || "en";
  const session = useSession();
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
          Home
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
          Products
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
          Sell My Product
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
              Log in
            </Button>
          </Link>
        </Typography>
      )}
    </ul>
  );
}
