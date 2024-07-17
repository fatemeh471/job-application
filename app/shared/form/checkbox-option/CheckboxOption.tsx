import React, { ReactNode } from "react";
import { CheckboxOptionType } from "../form.type";

const CheckboxOption = ({
  value,
  isChecked,
  children,
  onChange,
}: CheckboxOptionType) => {
  return (
    <div className="flex gap-2">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => onChange(value)}
      />
      <div className="text-gray-900 dark:!text-gray-100">{children}</div>
    </div>
  );
};

export default CheckboxOption;
