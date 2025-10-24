import React, { useEffect, useState } from "react";
import { User, Mail, Phone, Save, X, Briefcase, Building } from 'lucide-react';

const FloatingLabelInput = ({ id, name, type = "text", value, onChange, placeholder, icon: Icon, required = false }) => {
    const [isFocused, setIsFocused] = useState(false);
    const hasValue = value && value.length > 0;

    return (
        <div className="relative pt-4">
            <label
                htmlFor={id}
                className={`
          absolute left-10 top-1/2 -translate-y-1/2 
          text-gray-400 dark:text-gray-500 
          transition-all duration-300 ease-in-out
          pointer-events-none
          ${(isFocused || hasValue) ? 'text-xs top-4 text-blue-500 dark:text-blue-400' : 'text-base'}
        `}
            >
                {placeholder} {required && '*'}
            </label>
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Icon className={`w-5 h-5 transition-colors duration-300 ${(isFocused || hasValue) ? 'text-blue-500' : 'text-gray-400'}`} />
            </div>
            <input
                type={type}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                required={required}
                className={`
          w-full p-3 pl-10 pr-4 
          bg-transparent 
          border-b-2 border-gray-300 dark:border-gray-600 
          text-gray-900 dark:text-white 
          focus:outline-none focus:border-blue-500 dark:focus:border-blue-400
          transition-all duration-300
        `}
            />
        </div>
    );
};


const ContactForm = ({ initial = {}, onCancel, onSave }) => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        ...initial,
    });

    useEffect(
        () => setForm({ name: "", email: "", phone: "", ...initial }),
        [initial],
    );

    const handleChange = (e) =>
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name.trim() || !form.email.trim()) {
            console.warn("Name and Email are required.");
            return;
        }

        const savedData = {};
        for (const key in form) {
            savedData[key] = typeof form[key] === 'string' ? form[key].trim() : form[key];
        }
        onSave(savedData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-1">
                {initial.id ? "Edit Contact" : "Create New Contact"}
            </h2>
            <p className="text-center text-gray-500 dark:text-gray-400 mb-8 mt-1">
                {initial.id ? "Update the details below." : "Please fill in the details below."}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                <FloatingLabelInput
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    icon={User}
                    required={true}
                />

                <FloatingLabelInput
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    icon={Mail}
                    required={true}
                />

                <FloatingLabelInput
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    icon={Phone}
                />
            </div>

            <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-4 pt-8">
                <button
                    type="button"
                    onClick={onCancel}
                    className="
            w-full sm:w-auto px-6 py-3 mt-2 sm:mt-0 
            flex items-center justify-center gap-2 
            bg-transparent 
            border-2 border-gray-300 dark:border-gray-600 
            hover:bg-gray-100 dark:hover:bg-gray-700
            text-gray-700 dark:text-gray-300 
            font-medium rounded-lg 
            transition-all duration-200 transform hover:scale-105 active:scale-95
          "
                >
                    <X className="w-4 h-4" />
                    Cancel
                </button>
                <button
                    type="submit"
                    className="
            w-full sm:w-auto px-6 py-3 
            flex items-center justify-center gap-2 
            bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 
            text-white 
            font-medium rounded-lg shadow-lg hover:shadow-blue-500/30
            transition-all duration-200 transform hover:scale-105 active:scale-95
          "
                >
                    <Save className="w-4 h-4" />
                    Save Contact
                </button>
            </div>
        </form>
    );
};

export default ContactForm;

