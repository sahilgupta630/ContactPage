import React from "react";
import { Users, Search, Sparkles } from "lucide-react";
import ContactCard from "./ContactCard";

const ContactList = ({ contacts, onEdit, onDelete }) => {
  if (!contacts.length) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4">
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
          <div className="relative bg-linear-to-br from-blue-50 to-purple-50 p-6 rounded-full">
            <Users className="w-12 h-12 text-blue-600" />
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          No contacts yet
        </h3>
        <p className="text-gray-500 text-center max-w-sm">
          Start building your connections/network by adding your first contact
        </p>
        <div className="mt-6 flex items-center gap-2 text-sm text-gray-400">
          <Sparkles className="w-4 h-4" />
          <span>Your contact list will appear here</span>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-linear-to-br from-blue-500 to-purple-600 p-2 rounded-lg shadow-lg">
            <Users className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-100">
             Contact List :
            </h2>
            <p className="text-sm text-gray-500">
              {contacts.length} {contacts.length === 1 ? "contact" : "contacts"}{" "}
              total
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {contacts.map((c, index) => (
          <div
            key={c.id}
            className="animate-in fade-in slide-in-from-bottom-4 duration-500"
            style={{
              animationDelay: `${index * 50}ms`,
              animationFillMode: "backwards",
            }}
          >
            <ContactCard
              contact={c}
              onEdit={() => onEdit(c)}
              onDelete={() => onDelete(c.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactList;
