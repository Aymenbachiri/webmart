import StickyNavbar from "@/components/navbar/StickyNavbar";
import Image from "next/image";
import React from "react";
import img from "/public/assets/404-status-code.png";

export default function Notfound() {
  return (
    <>
      <StickyNavbar />
      <section className="bg-white container mx-auto dark:bg-gray-900 ">
        <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
          <div className="wf-ull lg:w-1/2">
            <p className="text-sm font-medium text-blue-500 dark:text-blue-400">
              404 error
            </p>
            <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
              Page not found
            </h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Sorry, the page you are looking for doesn&apos;t exist.Here are
              some helpful links:
            </p>
            <div className="flex items-center mt-6 gap-x-3">
              <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 rtl:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>
                <span>Go back</span>
              </button>
              <button className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                Take me home
              </button>
            </div>
          </div>
          <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
            <Image
              priority={true}
              src={img}
              alt="not-found"
              sizes="(min-width: 1320px) 612px, (min-width: 1140px) 522px, (min-width: 960px) 432px, (min-width: 720px) 672px, (min-width: 580px) 492px, calc(92.31vw - 25px)"
            />
          </div>
        </div>
      </section>
    </>
  );
}
