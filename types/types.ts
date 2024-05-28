export interface commonPropsTypes {
  placeholder: string;
  children: string;
  onPointerEnterCapture: () => void;
  onPointerLeaveCapture: () => void;
}
export interface ProductProps {
  _id: string;
  title: string;
  description: string;
  category: string;
  imageurl: string;
  price: number;
  updatedAt: string;
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

export interface ProductDetails {
  _id: string;
  title: string;
  description: string;
  category: string;
  imageurl: string;
  price: number;
  rating: number;
  creator: string;
}

export interface CartState {
  products: Product[];
}
export interface StateProps {
  shop: {
    productData: Product[];
  };
}

export interface ProductDetailsProps {
  id: string;
  title: string;
  category: string;
  price: number;
  description: string;
  imageurl: string;
  rating: number;
  creator: string;
}

export interface InputFieldProps {
  label: string;
  name: string;
  value: string | number;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
  type?: string;
  placeholder?: string;
  options?: { value: string; label: string }[]; // For select input
}

export interface ProductCardProps {
  product: ProductProps;
  mutate: () => void;
  currentLanguage: string;
}

export interface CartItemProps {
  item: Product;
  onDecrease: (id: string) => void;
  onIncrease: (id: string) => void;
  onRemove: (id: string) => void;
}

export interface CartCheckoutProps {
  totalPrice: number;
  handleResetCart: () => void;
}

export interface PageProps {
  params: { locale: string };
}

export interface HreflangProps {
  supportedLanguages: string[];
  defaultLocale: string;
}
