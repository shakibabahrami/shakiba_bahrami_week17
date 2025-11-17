import { createContext, useReducer, useState, useEffect } from "react";
import contactsReducer from "./contactReducer.js";

export const ContactsContext = createContext();

const initialState = {
  contacts: JSON.parse(localStorage.getItem("data")) || [],
  contact: { name: "", lastName: "", email: "", phone: "" },
  editing: false,
  alert: "",
  alertType: true,
  showCheckbox: false,
  selectedArray: [],
  modal: {
    isOpen: false,
    title: "",
    content: "",
  },
};

export const ContactsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(contactsReducer, initialState);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(state.contacts));
  }, [state.contacts]);

  return (
    <ContactsContext.Provider value={{ state, dispatch }}>
      {children}
    </ContactsContext.Provider>
  );
};
