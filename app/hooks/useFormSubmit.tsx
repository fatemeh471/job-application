import { useState } from "react";
import { validateForm } from "../constants/formValidations";
import { createPost } from "../services/api";
import { isEmpity } from "../helper/utils";

export const useFormSubmit = (formData: any) => {
  const [errors, setErrors] = useState<Partial<typeof formData>>({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (isEmpity(validationErrors)) {
      setLoading(true);
      try {
        const response = await createPost(formData);
        if (response.ok) {
          setLoading(false);
        } else {
          throw new Error("Failed to submit form");
        }
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
  };

  return {
    handleSubmit,
    errors,
    loading,
  };
};
