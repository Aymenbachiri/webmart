import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { FormEvent, useState } from "react";
import useCurrentLanguage from "@/hooks/useCurrentLanguage";

export const useLogin = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [err, setErr] = useState<Error | null>(null);
  const [captcha, setCaptcha] = useState(false);
  const [loading, setLoading] = useState(false);
  const currentLanguage = useCurrentLanguage();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      setErr(null);

      const res: any = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });

      if (!res.ok) {
        throw new Error(res.error);
      }

      if (!captcha) {
        throw new Error("Captcha failed; you must be a robot");
      }

      if (res.ok && captcha) {
        alert("Welcome Back");
        router.push(`/${currentLanguage}/dashboard`);
      }
    } catch (error) {
      if (error instanceof Error) {
        setErr(error);
      } else {
        setErr(new Error("An unknown error occurred"));
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    err,
    captcha,
    setCaptcha,
    handleChange,
    handleSubmit,
    loading,
  };
};
