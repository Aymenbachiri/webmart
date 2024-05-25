"use client";
import { useHandleDelete } from "@/hooks/useHandleDelete";
import useTimestampFormatter from "@/hooks/useTimeStampFormatter";
import { ProductCardProps } from "@/types/types";
import Link from "next/link";
import React from "react";

const ProductCardOptions: React.FC<ProductCardProps> = ({
  product,
  mutate,
  currentLanguage,
}) => {
  const handleDelete = useHandleDelete(mutate);
  const formattedTimestamp = useTimestampFormatter(product.updatedAt);
  return (
    <div
      key={product._id}
      className="bg-transparent rounded-lg overflow-hidden shadow-lg ring-4 ring-red-500 ring-opacity-40 max-w-sm"
    >
      <div className="relative w-full h-[500px] bg-transparent">
        <img
          loading="lazy"
          className="w-auto h-auto object-cover bg-transparent"
          src={product.imageurl}
          alt="Product Image"
        />
        <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
          {product.price} $
        </div>
        <div className="absolute top-0 left-0 bg-green-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
          {product.category}
        </div>
      </div>
      <div className="p-4  h-[210px]">
        <h3 className="text-lg font-medium mb-2 h-10 ">
          {product.title.substring(0, 30)} ...
        </h3>
        <p className=" text-sm mb-4 h-10">
          {product.description.substring(0, 91)} ...
        </p>
        <div className="flex products-center justify-between text-center pt-4 ">
          <span className="font-bold text-lg">
            {formattedTimestamp.substring(0, 10)}{" "}
          </span>
          <Link
            href={`/${currentLanguage}/products/${product._id}`}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            View
          </Link>
          <button
            onClick={() => handleDelete(product._id)}
            className="bg-red-500 hover:bg-red-600 text-white font-bold p-2 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
          <Link
            href={`/${currentLanguage}/edit/${product._id}`}
            className="bg-gray-500 hover:bg-gray-600 text-white font-bold p-2 rounded-full text-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ProductCardOptions;
