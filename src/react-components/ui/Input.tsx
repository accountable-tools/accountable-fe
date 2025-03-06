import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function Input({ label, ...props }: InputProps) {
  return (
    <label className="block my-2">
      {label && <span className="text-sm font-semibold">{label}</span>}
      <input
        className="mt-1 block w-full border-gray-300 rounded"
        {...props}
      />
    </label>
  );
}
