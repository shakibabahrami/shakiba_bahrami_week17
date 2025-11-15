import React, { useState } from "react";

import Styles from "./SidebarButtons.module.css";
function SidebarButtons({
  contacts,
  setContacts,
  deleteButton,
  showCheckbox,
  selectedArray,
  setIsModalOpen,
  setModalTitle,
  setModalContent,
  setShowCheckbox,
}) {
  const [searchInputValue, setSearchInputValue] = useState("");

  const deleteSelected = () => {
    setModalTitle("Warning!!!");
    setModalContent(
      <>
        <p>Are you sure you want to delete ?</p>
        <button
          onClick={() => {
            const res = contacts.filter(
              (contact) => !selectedArray.includes(contact.id)
            );
            setContacts(res);
            setIsModalOpen(false);
            setShowCheckbox(false);
          }}
        >
          Yes
        </button>
        <button onClick={() => setIsModalOpen(false)}>Cancel</button>
      </>
    );
    setIsModalOpen(true);
  };

  const searchContact = () => {
    let res = contacts.find(
      (contact) =>
        searchInputValue === contact.name ||
        searchInputValue === contact.lastName ||
        searchInputValue === contact.phone ||
        searchInputValue === contact.email
    );
    if (res) {
      console.log(res.phone);

      setModalTitle("here you are :)");
      setModalContent(
        <>
          <p className={Styles.founded}>{`${res.name}
          
        ${res.lastName}
        ${res.email}
        ${res.phone}`}</p>
        </>
      );
      setIsModalOpen(true);
    }
    setSearchInputValue("");
  };

  return (
    <div className={Styles.sidebarButtons}>
      <input
        placeholder="search here"
        value={searchInputValue}
        onChange={(e) => setSearchInputValue(e.target.value)}
      />
      <button onClick={searchContact}>search</button>
      <button onClick={deleteButton}>Delete</button>
      {showCheckbox && (
        <button
          className={Styles.deleteSelectedButton}
          onClick={deleteSelected}
        >
          Delete Selected Contacts
        </button>
      )}
    </div>
  );
}

export default SidebarButtons;
