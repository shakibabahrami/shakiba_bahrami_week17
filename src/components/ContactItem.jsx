import React from "react";
import Styles from "./ContactsItem.module.css";

function ContactItem({
  data: { id, name, lastName, email, phone },
  contacts,
  setContacts,
  showCheckbox,
  setSelectedArray,
  selectedArray,
  editing,
  setEditing,
  nameInput,
  setNameInput,
  setLastNameInput,
  setEmailInput,
  setPhoneInput,
  setContact,
  changeHandler,
  contact,
  isModalOpen,
  setIsModalOpen,
  modalTitle,
  setModalTitle,
  modalContent,
  setModalContent,
  alert,
  setAlert,
  alertType,
  setAlertType,
}) {
  const checkboxHandler = (id) => {
    selectedArray.findIndex((item) => item === id) === -1
      ? setSelectedArray((selectedArray) => [...selectedArray, id])
      : setSelectedArray((selectedArray) => [
          ...selectedArray.filter((item) => item !== id),
        ]);
  };

  const deleteHandler = (id) => {
    setModalTitle("Warning!!!");
    setModalContent(
      <>
        <p className={Styles.modalText}>
          Are you sure you want to delete this contact?
        </p>
        <button
          className={Styles.deleteButton}
          onClick={() => {
            const newContacts = contacts.filter((contact) => contact.id !== id);
            setContacts(newContacts);
            setIsModalOpen(false);
            setAlert("contact deleted");
            setAlertType(true);
            setTimeout(() => {
              setAlert("");
            }, 3000);
          }}
        >
          Yes
        </button>
        {/* <button onClick={() => setIsModalOpen(false)}>Cancel</button> */}
      </>
    );
    setIsModalOpen(true);
    // const newContacts = contacts.filter((contact) => contact.id !== id);
    // setContacts(newContacts);
  };

  const editHandler = (id) => {
    console.log("id", id);
    console.log("ed", editing);
    setEditing(true);
    console.log("ed", editing);

    const contactToChange = contacts.find((contact) => contact.id === id);
    if (!contactToChange) return;
    const { name, lastName, email, phone } = contactToChange;
    setNameInput(name);
    setLastNameInput(lastName);
    setEmailInput(email);
    setPhoneInput(phone);
    console.log(contactToChange);
    setContact({ ...contactToChange });
  };
  // const editHandler = () => {
  //   const contactToEdit = contacts.find((c) => c.id === id);
  //   if (!contactToEdit) return;
  //   setEditing(true);
  //   setContact(contactToEdit);
  //   const { name, lastName, email, phone } = contactToEdit;
  //   setNameInput(name);
  //   setLastNameInput(lastName);
  //   setEmailInput(email);
  //   setPhoneInput(phone);
  // };

  // const editHandler = (id) => {
  //   console.log(id);
  //   setEditing(true);
  //   {
  //     const editingContact = contacts.find((contact) => contact.id === id);
  //     setContact({
  //       name: editingContact.name,
  //       lastName: editingContact.lastName,
  //       email: editingContact.email,
  //       phone: editingContact.phone,
  //       id: editingContact.id,
  //     });
  //   }
  // };

  return (
    <li key={id}>
      {showCheckbox && (
        <input
          className={Styles.checkbox}
          type="checkbox"
          onClick={() => checkboxHandler(id)}
        />
      )}
      <p>
        {name} {lastName}
      </p>
      <p>
        <span>📞</span> {phone}{" "}
      </p>
      <p>
        <span>📧</span>
        {email}
      </p>
      <span className={Styles.delete} onClick={() => deleteHandler(id)}>
        🗑️
      </span>
      <span className={Styles.edit} onClick={() => editHandler(id)}>
        ✏️
      </span>
    </li>
  );
}

export default ContactItem;
