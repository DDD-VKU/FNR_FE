import React from "react";

interface InputFieldProps {
  label: string;
  type?: "input" | "select";
  defaultValue?: string;
  options?: string[];
  placeholder?: string;
  className?: string;
  isRequired?: boolean;
  isEmail?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "input",
  defaultValue,
  options,
  placeholder,
  className,
  isRequired = false,
  isEmail = false,
}) => (
  <div className={`w-full ${className}`}>
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    {type === "input" ? (
      <input
        type={isEmail ? "email" : "text"}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black break-words"
        required={isRequired}
      />
    ) : (
      <select
        defaultValue={defaultValue}
        className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black break-words"
      >
        {options &&
          options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
      </select>
    )}
  </div>
);

export default InputField;
