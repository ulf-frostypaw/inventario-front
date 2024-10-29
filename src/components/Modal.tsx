import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-white rounded-lg overflow-hidden shadow-lg z-10 w-1/3">
        <div className="p-4">
          <button className="text-gray-500" onClick={onClose}>
            &times; {/* Icono de cerrar */}
          </button>
          <div className="mt-2">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
