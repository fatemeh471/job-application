import React from 'react';
import { InputType } from './form.type';

const Input: React.FC<InputType> = ({ label, type, value, onChange }) => {
  return (
    <>
      <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-1">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="shadow appearance-none bg-with dark:bg-gray-600 border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
      />
    </>
  );
};

export default Input;
