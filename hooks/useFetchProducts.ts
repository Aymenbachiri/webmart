import useSWR from "swr";
import { ProductProps } from "@/types/types";

const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

export const useFetchProducts = (email: string | null | undefined) => {
  const { data, mutate, error, isLoading } = useSWR<ProductProps[]>(
    email ? `/api/myproducts?creator=${email}` : null,
    fetcher
  );

  return { data, mutate, error, isLoading };
};
