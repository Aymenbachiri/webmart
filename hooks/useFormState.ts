import { useState } from "react";

export function useFormState(initialValues: any) {
  const [formState, setFormState] = useState(initialValues);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    setFormState((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return [formState, handleChange] as const;
}
