import React, { useState, useEffect, useRef, FC } from "react";
import CheckboxOption from "../checkbox-option/CheckboxOption";
import { MultiSelectType } from "./multiSelect.type";

const MultiSelect: FC<MultiSelectType> = ({
  options,
  currentValues,
  onChange,
  setCurrentValues,
  label,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleChange = (value: string) => {
    setCurrentValues((prevValues: string[]) =>
      prevValues.includes(value)
        ? prevValues.filter((item: string) => item !== value)
        : [...prevValues, value]
    );
    onChange(value);
  };

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <>
      <label className="block text-gray-700 dark:text-with text-sm font-bold mb-2">
        {label}
      </label>
      <button
        className="w-full h-11 px-1 py-2 rounded-md text-gray-900 dark:!text-gray-100 bg-no-repeat bg-right bg-[url('./assets/images/down-arrow.png')] flex bg-with border dark:bg-gray-700"
        onClick={toggleMenu}
      >
        {currentValues?.length > 0 ? currentValues.join(", ") : "select"}
      </button>
      {menuOpen && (
        <div className="overflow-y-auto flex gap-1 h-[140px] shadow bg-with dark:bg-gray-600">
          <ul className="py-4 px-3 flex-row">
            {options?.map((item: { value: string; label: string }) => (
              <CheckboxOption
                value={item.value}
                isChecked={currentValues.includes(item.label)}
                onChange={handleChange}
              >
                {item.label}
              </CheckboxOption>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default MultiSelect;
