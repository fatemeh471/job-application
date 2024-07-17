import { validateFormType } from "./formValidations.type";

export const validateForm = (data: validateFormType) => {
  const { fullName, email, experience, skills } = data;
  const errors: { [key: string]: string } = {};

  if (!fullName) errors.fullName = "Full Name is Required";
  if (!email) errors.email = "Email is Required";
  if (email && !/\S+@\S+\.\S+/.test(email)) errors.email = "Email is Invalid";
  if (!experience) errors.experience = "Years of Experience is Required";
  if (!skills.length) errors.skills = "At least one skill is required";

  return errors;
};
