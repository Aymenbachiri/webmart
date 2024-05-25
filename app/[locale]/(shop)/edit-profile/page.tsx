"use client";
import useCurrentLanguage from "@/hooks/useCurrentLanguage";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function EditProfilePage() {
  const session = useSession();
  const currentLanguage = useCurrentLanguage();
  const router = useRouter();

  if (session.status === "unauthenticated") {
    router.push(`/${currentLanguage}/login`);
  }
  if (session.status === "authenticated") {
    return (
      <main className="w-full container mx-auto min-h-screen py-1 md:w-2/3 lg:w-3/4">
        <div className="p-2 md:p-4">
          <div className="w-full px-6 pb-8 mt-8  sm:rounded-lg">
            <h2 className="pl-6 text-2xl font-bold sm:text-xl">
              Public Profile
            </h2>
            <div className="grid max-w-2xl mx-auto mt-8">
              <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                <img
                  className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"
                  src="https://static.thenounproject.com/png/4035887-200.png"
                  alt="Bordered avatar"
                />
              </div>
              <div className="items-center mt-8 sm:mt-14 text-[#202142]">
                <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                  <div className="w-full">
                    <label
                      htmlFor="first_name"
                      className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                    >
                      Your name
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                      placeholder="Your first name"
                      value="Jane"
                      required
                    />
                  </div>
                </div>
                <div className="mb-2 sm:mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                    placeholder="your.email@mail.com"
                    required
                  />
                </div>
                <div className="mb-2 sm:mb-6">
                  <label
                    htmlFor="profession"
                    className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="profession"
                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                    placeholder="your password"
                    required
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="text-white bg-indigo-700  hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
