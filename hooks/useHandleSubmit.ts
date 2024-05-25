import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Product } from "@/types/types";

export const useHandleSubmit = (
  formState: Product,
  currentLanguage: string,
  userEmail: string | null | undefined
) => {
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formState, creator: userEmail }),
      });
      if (res.ok) {
        alert("Product added successfully");
        router.push(`/${currentLanguage}/products`);
      } else {
        throw new Error("Failed to add product");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return handleSubmit;
};
