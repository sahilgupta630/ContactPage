import React, { useMemo, useState } from "react";
import { Plus, Users } from "lucide-react";
import SearchBar from "./SearchBar";
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";
import Modal from "../../components/Modal";
import ConfirmDialog from "./ConfirmDialog";
import { useContacts } from "../../context/ContactsContext";

const MainPage = () => {
  const { contacts, addContact, updateContact, deleteContact } = useContacts();
  const [query, setQuery] = useState("");
  const [editing, setEditing] = useState(null);
  const [formOpen, setFormOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [toDeleteId, setToDeleteId] = useState(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return contacts;
    return contacts.filter((c) =>
      [c.name, c.email, c.phone].join(" ").toLowerCase().includes(q)
    );
  }, [contacts, query]);

  const handleAdd = () => {
    setEditing(null);
    setFormOpen(true);
  };
  const handleEdit = (contact) => {
    setEditing(contact);
    setFormOpen(true);
  };
  const handleDeleteConfirm = (id) => {
    setToDeleteId(id);
    setConfirmOpen(true);
  };
  const handleDelete = () => {
    if (toDeleteId) deleteContact(toDeleteId);
    setConfirmOpen(false);
    setToDeleteId(null);
  };

  const handleSave = (data) => {
    if (editing) updateContact(editing.id, data);
    else addContact(data);
    setFormOpen(false);
    setEditing(null);
  };

  return (
    <div className="min-h-screen w-full  transition-colors duration-300 pt-8">
      <div className="w-full px-2 sm:px-6 md:px-10 py-10">
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div className="flex items-center gap-2">
              <div className="relative shrink-0">
                <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-30"></div>
                <div className="relative bg-linear-to-br from-blue-500 to-purple-600 p-2 rounded-2xl shadow-lg">
                  <Users className="w-7 h-7 text-white" />
                </div>
              </div>
              <div className="flex flex-col items-start">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                  Contacts
                </h1>
                <p className="text-sm none sm:visible text-start sm:text-base text-gray-500 dark:text-gray-400 mt-0.5">
                 Manage and organize your personal and professional contacts
                </p>
              </div>
            </div>

            <button
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-3 bg-linear-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 active:scale-95"
              onClick={handleAdd}
            >
              <Plus className="w-5 h-5" />
              <span>Add Contact</span>
            </button>
          </div>

        
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4">
            <SearchBar value={query} onChange={setQuery} />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4 sm:p-6">
          {filtered.length > 0 && (
            <div className="mb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Showing{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  {filtered.length}
                </span>{" "}
                of{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  {contacts.length}
                </span>{" "}
                contacts
              </div>
            </div>
          )}

          <ContactList
            contacts={filtered}
            onEdit={handleEdit}
            onDelete={(id) => handleDeleteConfirm(id)}
          />
        </div>
      </div>
      <Modal open={formOpen} onClose={() => setFormOpen(false)}>
        <ContactForm
          initial={editing || {}}
          onCancel={() => setFormOpen(false)}
          onSave={handleSave}
        />
      </Modal>

      <ConfirmDialog
        open={confirmOpen}
        message="Delete contact?"
        onCancel={() => setConfirmOpen(false)}
        onConfirm={handleDelete}
      />
    </div>
  );
};

export default MainPage;
