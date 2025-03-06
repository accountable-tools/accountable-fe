import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // Add custom props here
}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button className="px-4 py-2 rounded bg-blue-600 text-white" {...props}>
      {children}
    </button>
  );
}
