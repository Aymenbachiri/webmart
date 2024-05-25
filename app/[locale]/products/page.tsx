// components/Products.tsx
"use client";

import useCurrentLanguage from "@/hooks/useCurrentLanguage";
import useProducts from "@/hooks/useProducts";
import LoadingSpinner from "@/components/LoadingSpinner";
import ProductCard from "@/components/product/ProductCard";

export default function Products() {
  const { data, loading, error } = useProducts();
  const currentLanguage = useCurrentLanguage();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <p className="text-center text-red-500 mt-[110px]">{error}</p>;
  }

  return (
    <div className="container mx-auto p-4 mt-[110px]">
      <h1 className="text-center text-4xl font-bold">
        Discover the potential within you.
      </h1>
      <h1 className="text-center text-4xl font-bold">
        And unlock a world of endless possibilities with our products
      </h1>
      <div className="grid gap-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 mb-16 mt-16">
        {data.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            currentLanguage={currentLanguage}
          />
        ))}
      </div>
    </div>
  );
}
