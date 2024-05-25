import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Product } from "@/types/types";

export const useHandleEdit = (
  id: string,
  formState: Product,
  currentLanguage: string
) => {
  const router = useRouter();

  const handleEdit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/products/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });
      if (res.ok) {
        router.push(`/${currentLanguage}/dashboard`);
      } else {
        throw new Error("Failed to edit product");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return handleEdit;
};
