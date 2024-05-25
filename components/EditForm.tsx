"use client";

import { ProductDetailsProps } from "@/types/types";
import InputField from "@/components/InputField";
import { useFormState } from "@/hooks/useFormState";
import { useSession } from "next-auth/react";
import useCurrentLanguage from "@/hooks/useCurrentLanguage";
import { useHandleEdit } from "@/hooks/useHandleEdit";

export default function EditForm({
  id,
  title: initialTitle,
  category: initialCategory,
  price: initialPrice,
  description: initialDescription,
  imageurl: initialImageUrl,
  rating: initialRating,
}: ProductDetailsProps) {
  const session = useSession();
  const currentLanguage = useCurrentLanguage();

  const [formState, handleChange] = useFormState({
    title: initialTitle,
    category: initialCategory,
    price: initialPrice,
    description: initialDescription,
    imageurl: initialImageUrl,
    rating: initialRating,
  });
  const { title, category, price, description, imageurl, rating } = formState;

  const handleEdit = useHandleEdit(id, formState, currentLanguage);

  if (session && session.status === "authenticated") {
    return (
      <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="text-2xl py-4 px-6 bg-orange-600 text-white text-center font-bold uppercase">
          Edit a Product
        </div>
        <form onSubmit={handleEdit} className="py-4 px-6">
          <InputField
            label="Title"
            name="title"
            value={title}
            onChange={handleChange}
            placeholder="Enter product title"
          />
          <InputField
            label="Description"
            name="description"
            value={description}
            onChange={handleChange}
            type="textarea"
            placeholder="Enter product description"
          />
          <InputField
            label="Category"
            name="category"
            value={category}
            onChange={handleChange}
            type="select"
            placeholder="Select a category"
            options={[
              { value: "men", label: "Men" },
              { value: "women", label: "Women" },
              { value: "electronics", label: "Electronics" },
              { value: "jewelery", label: "Jewelery" },
            ]}
          />
          <InputField
            label="Image url"
            name="imageurl"
            value={imageurl}
            onChange={handleChange}
            placeholder="Example www.unsplash.com/photos/1352"
          />
          <InputField
            label="Price in $$"
            name="price"
            value={price}
            onChange={handleChange}
            type="number"
            placeholder="Enter the discount Price"
          />
          <InputField
            label="Rating"
            name="rating"
            value={rating}
            onChange={handleChange}
            type="number"
            placeholder="Enter a rating from 1-5"
          />
          <div className="flex items-center justify-center mb-4">
            <button
              className="bg-orange-600 font-bold text-white py-2 px-4 rounded hover:bg-orange-800 focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    );
  }

  return null;
}
