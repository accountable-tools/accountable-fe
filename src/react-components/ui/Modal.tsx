import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 flex justify-center items-center">
      <div className="bg-white p-4 rounded shadow-md">
        {children}
        <button onClick={onClose} className="mt-4 text-red-600">
          Close
        </button>
      </div>
    </div>
  );
}
