"use client";
import useCurrentLanguage from "@/hooks/useCurrentLanguage";
import { CartCheckoutProps } from "@/types/types";
import Link from "next/link";
import React from "react";

export default function CartCheckout({
  totalPrice,
  handleResetCart,
}: CartCheckoutProps) {
  const currentLangauage = useCurrentLanguage();
  return (
    <main>
      <div className="mt-6 border-t border-b py-2">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-400">Subtotal</p>
          <p className="text-lg font-semibold text-gray-900">${totalPrice}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-400">Shipping</p>
          <p className="text-lg font-semibold text-gray-900">Free</p>
        </div>
      </div>
      <div className="mt-6 border-b flex items-center justify-between">
        <p className="text-sm font-medium text-gray-900">Total</p>
        <p className="text-2xl font-semibold text-gray-900">
          <span className="text-xs font-normal text-gray-400">USD</span>{" "}
          {totalPrice}
        </p>
      </div>
      <div className="mt-8  flex items-center justify-between">
        <button
          onClick={handleResetCart}
          type="button"
          className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
          Reset
        </button>
      </div>
      <div className="mt-6 text-center flex items-center gap-4">
        <button
          type="button"
          className="group inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
        >
          Checkout
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>
        <Link
          href={`/${currentLangauage}/products`}
          className="group inline-flex w-full items-center justify-center rounded-md bg-green-900 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-green-800"
        >
          Continue Shopping
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </Link>
      </div>
    </main>
  );
}
