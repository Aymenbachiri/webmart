"use client";
import CartCheckout from "@/components/cart/CartCheckout";
import CartItem from "@/components/cart/CartItem";
import EmptyCart from "@/components/cart/EmptyCart";
import useCart from "@/hooks/useCart";

export default function Cart() {
  const {
    products,
    totalPrice,
    handleResetCart,
    handleDecreaseQuantity,
    handleIncreaseQuantity,
    handleRemoveFromCart,
  } = useCart();
  return (
    <>
      {products?.length > 0 ? (
        <section className="h-[90vh]  my-[110px]">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center">
              <h1 className="text-2xl font-semibold text-gray-900">My Cart</h1>
            </div>
            <div className="mx-auto mt-8 max-w-2xl md:mt-12">
              <div className="bg-white rounded-md shadow">
                <div className="px-4 py-6 sm:px-8 sm:py-10">
                  <div className="flow-root">
                    <ul className="-my-8">
                      {products.map((item) => (
                        <CartItem
                          key={item.id}
                          item={item}
                          onDecrease={handleDecreaseQuantity}
                          onIncrease={handleIncreaseQuantity}
                          onRemove={handleRemoveFromCart}
                        />
                      ))}
                    </ul>
                  </div>
                  <CartCheckout
                    totalPrice={totalPrice}
                    handleResetCart={handleResetCart}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <EmptyCart />
      )}
    </>
  );
}
