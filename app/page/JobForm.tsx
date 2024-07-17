"use client";
import React, { useState } from "react";
import { useFormStore } from "../store/form-store/formStore";
import Input from "../shared/form/Input";
import ErrorMessage from "../shared/form/ErrorMessage";
import CheckboxMultiSelect from "../shared/form/multi-select/MultiSelect";
import { useFormSubmit } from "../hooks/useFormSubmit";
import { skillOptions } from "../constants/fixcureData";

const JobForm: React.FC = () => {
  const [currentValues, setCurrentValues] = useState<string[]>([]);
  const { formData, setFormData } = useFormStore();
  const { handleSubmit, errors, loading } = useFormSubmit(formData);

  const handleChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData(field, e.target.value);
    };

  const handleSkillsChange = () => {
    setFormData("skills", currentValues);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full bg-white flex flex-col gap-4 dark:bg-gray-700 md:w-[600px] rounded shadow-lg p-8"
      >
        <div>
          <Input
            label="Full Name"
            type="text"
            value={formData.fullName}
            onChange={handleChange("fullName")}
          />
          {errors.fullName && <ErrorMessage error={errors.fullName} />}
        </div>
        <div>
          <Input
            label="Email"
            type="email"
            value={formData.email}
            onChange={handleChange("email")}
          />
          {errors.email && <ErrorMessage error={errors.email} />}
        </div>
        <div>
          <Input
            label="Years of Experience"
            type="number"
            value={formData.experience}
            onChange={handleChange("experience")}
          />
          {errors.experience && <ErrorMessage error={errors.experience} />}
        </div>
        <div>
          <CheckboxMultiSelect
            options={skillOptions}
            label="Skills"
            setCurrentValues={setCurrentValues}
            currentValues={currentValues}
            onChange={handleSkillsChange}
          />
          {errors.skills && <ErrorMessage error={errors.skills} />}
        </div>
        <div>
          <button
            type="submit"
            className="bg-green-500 dark:bg-green-800 text-white px-4 w-full py-2 rounded mt-8"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </>
  );
};

export default JobForm;
