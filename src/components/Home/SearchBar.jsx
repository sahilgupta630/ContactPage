import React from "react";
import { Search, X } from "lucide-react";

const SearchBar = ({ value, onChange, placeholder = "Search contacts..." }) => {
    return (
        <div className="relative w-full">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 pointer-events-none transition-colors duration-200">
                <Search className="w-5 h-5" />
            </div>

            <input
                type="search"
                id="contact-search"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="block w-full py-3 pl-12 pr-10 text-sm sm:text-base text-gray-900 dark:text-white 
                   bg-gray-50 dark:bg-gray-700 
                   border border-gray-200 dark:border-gray-600 
                   rounded-xl 
                   placeholder-gray-400 dark:placeholder-gray-500 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-500 
                   focus:border-transparent dark:focus:border-transparent 
                   transition-all duration-200 ease-in-out
                   shadow-sm
                   focus:shadow-md"
                placeholder={placeholder}
                aria-label={placeholder}
            />
            {value && (
                <button
                    type="button"
                    onClick={() => onChange("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 
                     hover:text-gray-600 dark:hover:text-gray-300 
                     transition-colors duration-200
                     rounded-full p-0.5
                     hover:bg-gray-100 dark:hover:bg-gray-600"
                    aria-label="Clear search"
                >
                    <X className="w-4 h-4" />
                </button>
            )}
        </div>
    );
};

export default SearchBar;
