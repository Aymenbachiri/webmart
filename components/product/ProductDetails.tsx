"use client";

import useAddToCart from "@/hooks/useAddToCart";
import { ProductDetailsProps } from "@/types/types";
import ProductInfo from "./ProductInfo";

export default function ProductDetails({
  id,
  title,
  category,
  price,
  description,
  imageurl,
  rating,
  creator,
}: ProductDetailsProps) {
  const addToCart = useAddToCart();
  return (
    <div className="bg-gray-100 dark:bg-gray-800 pt-[110px]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              <img
                className="w-full h-full object-cover"
                src={imageurl}
                alt="Product Image"
              />
            </div>
            <div className="flex -mx-2 mb-4">
              <div className="w-1/2 px-2">
                <button
                  onClick={() =>
                    addToCart({
                      id: id,
                      title: title,
                      description: description,
                      category: category,
                      imageurl: imageurl,
                      price: price,
                      rating: rating,
                      creator: creator,
                      quantity: 1,
                    })
                  }
                  className="w-full bg-[#ec413d] dark:bg-red-600 text-white py-2 px-4 rounded-full font-bold hover:bg-red-600 dark:hover:bg-gray-700"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          <ProductInfo
            title={title}
            category={category}
            price={price}
            rating={rating}
            description={description}
            creator={creator}
            id={""}
            imageurl={""}
          />
        </div>
      </div>
    </div>
  );
}
