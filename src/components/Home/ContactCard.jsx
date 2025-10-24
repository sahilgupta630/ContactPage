import React, { useState } from "react";
import { Mail, Phone, Edit2, Trash2 } from "lucide-react";

const ContactCard = ({ contact, onEdit, onDelete }) => {
    const [isHovered, setIsHovered] = useState(false);

    const getInitials = (name) => {
        if (!name) return "?";
        return name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()
            .slice(0, 2);
    };

    const getAvatarGradient = (name) => {
        const gradients = [
            "from-blue-500 to-indigo-600",
            "from-purple-500 to-pink-600",
            "from-pink-500 to-rose-600",
            "from-green-500 to-emerald-600",
            "from-orange-500 to-amber-600",
            "from-cyan-500 to-blue-600",
        ];
        const index = (name || "").length % gradients.length;
        return gradients[index];
    };

    return (
        <div
            className="group relative backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200/50 dark:border-gray-700/50 hover:border-purple-300 dark:hover:border-purple-600"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="absolute -inset-px bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300"></div>

            <div className="relative p-3 sm:p-4">
                <div className="flex flex-col justify-between sm:flex-row sm:items-center gap-3">
                    <div className="flex gap-4">
                        <div
                            className={`shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-linear-to-br ${getAvatarGradient(contact.name)} flex items-center justify-center text-white font-bold text-sm sm:text-base shadow-lg transform group-hover:scale-105 transition-transform duration-300`}
                        >
                            {getInitials(contact.name)}
                        </div>

                        <div className="flex-1 min-w-0 flex flex-col justify-center">
                            <h3 className="text-base text-start sm:text-lg font-bold text-gray-900 dark:text-white truncate mb-1">
                                {contact.name || "Unnamed Contact"}
                            </h3>

                            <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-1 sm:gap-2 text-xs sm:text-sm">
                                <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                                    <Mail className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
                                    <span className="truncate">{contact.email}</span>
                                </div>

                                {contact.phone && (
                                    <>
                                        <span className="text-gray-300 dark:text-gray-600 hidden sm:inline">
                                            •
                                        </span>
                                        <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                                            <Phone className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
                                            <span className="truncate">{contact.phone}</span>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="flex  sm:flex-row gap-2 shrink-0 l">
                        <button
                            onClick={() => onEdit(contact)}
                            className="p-2 w-full  sm:p-2.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md transform hover:scale-110 active:scale-95 flex justify-center"
                            aria-label="Edit contact"
                        >
                            <Edit2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </button>

                        <button
                            onClick={() => onDelete(contact.id)}
                            className="p-2 w-full sm:p-2.5 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all duration-200 shadow-sm hover:shadow-md transform hover:scale-110 active:scale-95 flex justify-center"
                            aria-label="Delete contact"
                        >
                            <Trash2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 " />
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={`absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 transform origin-left transition-transform duration-300 ${isHovered ? "scale-x-100" : "scale-x-0"}`}
            ></div>
        </div>
    );
};

export default ContactCard;
