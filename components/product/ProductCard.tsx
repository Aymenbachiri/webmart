"use client";
import Link from "next/link";
import { ProductDetails } from "@/types/types";
import useAddToCart from "@/hooks/useAddToCart";

const ProductCard = ({
  product,
  currentLanguage,
}: {
  product: ProductDetails;
  currentLanguage: string;
}) => {
  const addToCart = useAddToCart();

  return (
    <div className="relative m-10 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
      <Link
        href={`/${currentLanguage}/products/${product._id}`}
        className="mx-auto text-center"
      >
        <img
          className="h-60 rounded-t-lg object-cover mx-auto"
          src={product.imageurl}
          alt="product image"
        />
      </Link>
      <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-[#ec413d] text-center text-sm text-white">
        Sale
      </span>
      <div className="mt-4 px-5 pb-5">
        <Link href={`/products/${product._id}`}>
          <h5 className="text-xl font-semibold tracking-tight text-slate-900">
            {product.title.substring(0, 25)}...
          </h5>
        </Link>
        <Link
          href={`/products/${product._id}`}
          className="mt-2.5 mb-5 flex items-center"
        >
          <span className="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
            {product.rating}
          </span>
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              aria-hidden="true"
              className="h-5 w-5 text-yellow-300"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          ))}
        </Link>
        <div className="flex items-center justify-between gap-2">
          <p className="flex items-end gap-2">
            <span className="text-3xl font-bold text-slate-900">
              ${product.price}
            </span>
          </p>
          <button
            onClick={() =>
              addToCart({
                id: product._id,
                title: product.title,
                description: product.description,
                category: product.category,
                imageurl: product.imageurl,
                price: product.price,
                rating: product.rating,
                creator: product.creator,
                quantity: 1,
              })
            }
            className="flex items-center rounded-md bg-[#ec413d] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
