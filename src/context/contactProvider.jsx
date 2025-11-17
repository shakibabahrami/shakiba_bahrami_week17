import { useReducer } from "react";

import { ContactsContext } from "./ContactContext";

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
const ContactsProvider = ({ children }) => {
  const [Contacts, dispatchContacts] = useReducer(reducer, initialState);

  return (
    <ContactsContext.Provider
      value={{
        Contacts,
        dispatchContacts,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
};

export { ContactsProvider };
