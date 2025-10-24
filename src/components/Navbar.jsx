import { ContactIcon } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <ContactIcon className="w-8 h-8" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            ContacPage
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
