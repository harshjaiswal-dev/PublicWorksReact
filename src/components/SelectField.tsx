import React from "react";

interface SelectFieldProps {
  options: string[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectField: React.FC<SelectFieldProps> = ({ options, value, onChange }) => {
  return (
    <select value={value} onChange={onChange} className="border p-2 rounded w-full">
      <option value="">Select Category</option>
      {options.map((opt, idx) => (
        <option key={idx} value={opt}>{opt}</option>
      ))}
    </select>
  );
};

export default SelectField;
