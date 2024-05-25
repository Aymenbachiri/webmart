export interface commonPropsTypes {
  placeholder: string;
  children: string;
  onPointerEnterCapture: () => void;
  onPointerLeaveCapture: () => void;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  imageurl: string;
  price: number;
  rating: number;
  creator: string;
  quantity: number;
}

export interface CartState {
  products: Product[];
}
export interface StateProps {
  shop: {
    productData: Product[];
  };
}
