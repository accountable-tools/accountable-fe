import React from "react";

export default function Body({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-1 p-6 transition-all duration-300">
      {children}
    </div>
  );
}
