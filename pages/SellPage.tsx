"use client";

import InputField from "@/components/InputField";
import { useFormState } from "@/hooks/useFormState";
import { useHandleSubmit } from "@/hooks/useHandleSubmit";

interface SellPageProps {
  session: any;
  currentLanguage: string;
  userEmail: string;
}

export default function SellPage({
  session,
  currentLanguage,
  userEmail,
}: SellPageProps) {
  const [formState, handleChange] = useFormState({
    title: "",
    category: "",
    price: "",
    description: "",
    imageurl: "",
    rating: "",
  });
  const { title, category, price, description, imageurl, rating } = formState;

  const handleSubmit = useHandleSubmit(formState, currentLanguage, userEmail);

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="text-2xl py-4 px-6 bg-gray-900 text-white text-center font-bold uppercase">
        Add a Product
      </div>
      <form onSubmit={handleSubmit} className="py-4 px-6">
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
          label="Image URL"
          name="imageurl"
          value={imageurl}
          onChange={handleChange}
          placeholder="Example: www.unsplash.com/photos/1352"
        />
        <InputField
          label="Price in $$"
          name="price"
          value={price}
          onChange={handleChange}
          type="number"
          placeholder="Enter the price"
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
            className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
}
