import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import useCurrentLanguage from "./useCurrentLanguage";

const useRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [captcha, setCaptcha] = useState(false);
  const router = useRouter();
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
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (res.status === 201 && captcha) {
        alert("Registration completed Successfully");
        router.push(`/${currentLanguage}/login`);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error("Registration Failed:", error.message);
      } else {
        console.error("An unknown error occurred:", error);
      }
    }
  };

  return {
    formData,
    handleChange,
    captcha,
    setCaptcha,
    handleSubmit,
  };
};
export default useRegister;
