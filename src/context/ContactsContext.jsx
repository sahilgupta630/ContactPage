import React, { createContext, useContext, useEffect, useReducer } from "react";
import {
  loadContacts,
  saveContacts,
  generateId,
} from "../services/contactService";

const ContactsContext = createContext(null);

const initialState = {
  contacts: loadContacts(),
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return { ...state, contacts: [action.payload, ...state.contacts] };
    case "UPDATE":
      return {
        ...state,
        contacts: state.contacts.map((c) =>
          c.id === action.payload.id ? action.payload : c,
        ),
      };
    case "DELETE":
      return {
        ...state,
        contacts: state.contacts.filter((c) => c.id !== action.payload),
      };
    case "SET":
      return { ...state, contacts: action.payload };
    default:
      return state;
  }
}

export function ContactsProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    saveContacts(state.contacts);
  }, [state.contacts]);

  const addContact = (data) => {
    const contact = { id: generateId(), ...data, createdAt: Date.now() };
    dispatch({ type: "ADD", payload: contact });
    return contact;
  };

  const updateContact = (id, data) => {
    const updated = { id, ...data };
    dispatch({ type: "UPDATE", payload: updated });
    return updated;
  };

  const deleteContact = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  return (
    <ContactsContext.Provider
      value={{
        contacts: state.contacts,
        addContact,
        updateContact,
        deleteContact,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
}

export function useContacts() {
  const ctx = useContext(ContactsContext);
  if (!ctx) throw new Error("useContacts must be used inside ContactsProvider");
  return ctx;
}
