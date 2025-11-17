import { useContext } from "react";
import { ContactsContext } from "../context/contact/ContactContext.jsx";
import Styles from "./ContactsList.module.css";
import ContactItem from "./ContactItem.jsx";

function ContactsList({ showCheckbox, selectedArray }) {
  const { state, dispatch } = useContext(ContactsContext);

  if (!state.contacts || state.contacts.length === 0) {
    return <p>No contacts found</p>;
  }

  const handleDelete = (contactId) => {
    dispatch({
      type: "DELETE_CONTACT",
      payload: contactId,
    });
  };

  return (
    <div className={Styles.container}>
      <h3>Contacts List</h3>
      <ul>
        {state.contacts.map((contact) => (
          <ContactItem
            key={contact.id}
            data={contact}
            dispatch={dispatch} 
            // handleDelete={handleDelete} 
          />
        ))}
      </ul>
    </div>
  );
}

export default ContactsList;
