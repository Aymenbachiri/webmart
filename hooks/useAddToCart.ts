import { useDispatch } from "react-redux";
import { addToCart } from "@/reduxToolkit/shoperStoreSlice";
import { Product } from "@/types/types";

const useAddToCart = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  return handleAddToCart;
};

export default useAddToCart;
