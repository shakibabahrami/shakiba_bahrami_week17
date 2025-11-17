import { useContext } from "react";
import { ContactsContext } from "../context/contact/ContactContext.jsx";

function ContactsList() {
  const { state, dispatch } = useContext(ContactsContext);
  
  if (!state.contacts || state.contacts.length === 0) {
    return <p>No contacts found</p>;
  }

  return (
    <ul>
      {state.contacts.map((contact) => (
        <li key={contact.id}>
          {contact.name} - {contact.email}
        </li>
      ))}
    </ul>
  );
}

export default ContactsList;
