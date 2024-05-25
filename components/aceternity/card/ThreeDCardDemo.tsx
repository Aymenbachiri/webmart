"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import img from "/public/assets/404-status-code.png";
import { CardBody, CardContainer, CardItem } from "./3dCard";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Iphone 12 Pro Max
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
          doloribus facilis similique sed fuga distinctio quis nostrum
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={img}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            15$
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Add To Cart
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
