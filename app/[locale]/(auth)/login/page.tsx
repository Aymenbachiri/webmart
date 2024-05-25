"use client";
import Email from "@/svg/form/Email";
import Password from "@/svg/form/Password";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function LoginPage() {
  const router = useRouter();
  const [err, setErr] = useState<Error>();
  const [captcha, setCaptcha] = useState(false);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const email = (target[0] as HTMLInputElement).value;
    const password = (target[1] as HTMLInputElement).value;

    try {
      const res: any = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (!res.ok) {
        throw new Error(res.error);
      }
      if (!captcha) {
        throw new Error("Captcha failed you must be a robot");
      }
      if (res.ok && captcha) {
        alert("Welcome Back");
        router.push("/dashboard");
      }
    } catch (error) {
      if (error instanceof Error) {
        // Handle specific errors of type Error
        console.error("An error occurred:", error.message);
        setErr(error);
      } else {
        // Handle other types of errors
        console.error("An unknown error occurred:", error);
      }

      console.log(error);
    }
  };
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>
        <p className="mt-4 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
          nulla eaque error neque ipsa culpa autem, at itaque nostrum!
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="mx-auto mb-0 mt-8 max-w-md space-y-4"
      >
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <div className="relative">
            <input
              type="email"
              className="w-full rounded-lg border border-gray-400 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter email"
            />
            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <Email />
            </span>
          </div>
        </div>
        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <div className="relative">
            <input
              type="password"
              className="w-full rounded-lg border border-gray-400 p-4 pe-12 text-sm shadow-sm"
              placeholder="Enter password"
            />
            <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
              <Password />
            </span>
          </div>
        </div>
        <ReCAPTCHA
          onChange={() => setCaptcha(true)}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
          className="mx-auto"
        />
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">
            No account?
            <a className="underline" href="#">
              Sign up
            </a>
          </p>
          <button
            type="submit"
            className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}
