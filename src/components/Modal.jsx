import React from "react";
import { X } from "lucide-react";

const Modal = ({ children, open, onClose }) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
      aria-modal="true"
      role="dialog"
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md transition-all duration-300"
        onClick={onClose}
      />
      <div className="relative z-50 w-full max-w-2xl animate-in zoom-in-95 slide-in-from-bottom-4 duration-300">
        <div className="absolute -inset-1 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-30" />

        <div className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
          <div className="h-1.5 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-200 hover:scale-110 hover:rotate-90 active:scale-95 shadow-lg"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="p-6 md:p-8 pt-12 md:pt-10">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
