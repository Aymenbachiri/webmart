import { ProductDetailsProps } from "@/types/types";

export default function ProductInfo({
  title,
  category,
  price,
  rating,
  description,
  creator,
}: ProductDetailsProps) {
  return (
    <main>
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
        {title}
      </h2>
      <p className="text-black dark:text-gray-300 text-3xl uppercase mb-4">
        {category}
      </p>
      <div className="flex mb-4">
        <div className="mr-4 flex gap-2">
          <span className="font-bold text-gray-700 dark:text-gray-300">
            Price:
          </span>
          <span className="text-gray-600 dark:text-gray-300">${price}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-bold text-gray-700 dark:text-gray-300">
            Availability:
          </span>
          <span className="text-gray-600 dark:text-gray-300">In Stock</span>
        </div>
        <div className="flex items-center gap-2 ml-8">
          <span className="font-bold text-gray-700 dark:text-gray-300">
            Rating:
          </span>
          <span className="text-gray-600 dark:text-gray-300">{rating}</span>
        </div>
      </div>
      <div>
        <span className="font-bold text-gray-700 dark:text-gray-300">
          Product Description:
        </span>
        <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
          {description}
        </p>
      </div>
      <div className="mt-4">
        <span className="font-bold text-gray-700 dark:text-gray-300">
          Product Store:
        </span>
        <p className="text-black flex items-center gap-2 dark:text-gray-300 text-sm mt-2">
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
              d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
            />
          </svg>
          <span className="text-2xl uppercase underline">{creator}</span>
        </p>
      </div>
    </main>
  );
}
