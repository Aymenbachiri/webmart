"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import useCurrentLanguage from "@/hooks/useCurrentLanguage";
import { ProductProps } from "@/types/types";
import ProductCardOptions from "@/components/product/ProductCardOptions";
import { useFetchProducts } from "@/hooks/useFetchProducts";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function Dashboard() {
  const session = useSession();
  const router = useRouter();
  const currentLanguage = useCurrentLanguage();
  const { data, mutate, error, isLoading } = useFetchProducts(
    session.data?.user?.email
  );

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (session.status === "unauthenticated") {
    router.push(`/${currentLanguage}/login`);
  }
  if (session.status === "authenticated") {
    return (
      <div className="container w-full mx-auto p-4 mt-[110px]">
        <h1 className="text-center text-4xl font-bold">My Products</h1>
        {data ? (
          <div className="grid gap-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
            {data.map((item: ProductProps) => (
              <ProductCardOptions
                key={item._id}
                product={item}
                mutate={mutate}
                currentLanguage={currentLanguage}
              />
            ))}
          </div>
        ) : (
          <>
            <h1 className="mt-10">
              You don&apos;t have any product.
              <Link className="ml-2 underline" href="/sell">
                Create One
              </Link>
            </h1>
          </>
        )}
      </div>
    );
  }
}
