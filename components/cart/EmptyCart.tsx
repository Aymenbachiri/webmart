import Link from "next/link";

export default function EmptyCart() {
  return (
    <div className="flex-col md:flex md:flex-row justify-center items-center my-[110px]">
      <div className="flex justify-center px-2">
        <img
          src="https://metro-website-images.s3.eu-west-1.amazonaws.com/plugins/user/images/emptycart.png"
          loading="lazy"
          alt="empty cart"
          className="rounded-full"
        />
      </div>
      <div className="max-w-[500px] p-4 py-8  flex flex-col gap-4 items-center rounded-md shadow-lg">
        <h1 className="text-xl font-bold uppercase">Your Cart feels lonely.</h1>
        <p className="text-sm text-center px-10 -mt-2">
          Your Shopping cart lives to serve. Give it purpose - fill it with
          books, electronics, videos, etc. and make it happy.
        </p>
        <Link
          href={"/products"}
          className=" rounded-md cursor-pointer hover:bg-black active:bg-gray-900 px-8 py-2 font-semibold text-lg hover:text-white duration-300"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
