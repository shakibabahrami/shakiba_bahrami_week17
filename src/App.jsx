import Contacts from "./components/Contacts";
import ContactsList from "./components/ContactsList";
import SidebarMenu from "./components/SidebarMenu";
import Modal from "./components/Modal";

import { useState } from "react";
import Styles from "./components/App.module.css";

const contactsData = JSON.parse(localStorage.getItem("data")) || [];

function App() {
  const [contacts, setContacts] = useState(contactsData);
  const [editing, setEditing] = useState(false);
  const [showCheckbox, setShowCheckbox] = useState(false);
  const [selectedArray, setSelectedArray] = useState([]);
  const [alert, setAlert] = useState("");
  const [alertType, setAlertType] = useState(true);
  const [nameInput, setNameInput] = useState(contacts.name);
  const [lastNameInput, setLastNameInput] = useState(contacts.lastName);
  const [emailInput, setEmailInput] = useState(contacts.email);
  const [phoneInput, setPhoneInput] = useState(contacts.phone);
  const [isSearching, setIsSearching] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");

  const [contact, setContact] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  localStorage.setItem("data", JSON.stringify(contacts));

  const deleteButton = () => {
    setShowCheckbox((value) => !value);
    setAlert("please select contacts that you want to delete together");
    setAlertType(true);
    setTimeout(() => {
      setAlert("");
    }, 3000);
  };

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContact((contact) => ({ ...contact, [name]: value }));
  };

  return (
    <div className={Styles.container}>
      <Modal
        isOpen={isModalOpen}
        title={modalTitle}
        onClose={() => setIsModalOpen(false)}
      >
        {modalContent}
      </Modal>
      <div className={Styles.leftSideContainer}>
        {/* <p>{isModalOpen ? "Modal is open ✅" : "Modal is closed ❌"}</p> */}

        <Contacts
          contacts={contacts}
          setContacts={setContacts}
          changeHandler={changeHandler}
          alert={alert}
          setAlert={setAlert}
          alertType={alertType}
          setAlertType={setAlertType}
          contact={contact}
          setContact={setContact}
          editing={editing}
          setEditing={setEditing}
          nameInput={nameInput}
          setNameInput={setNameInput}
          lastNameInput={lastNameInput}
          emailInput={emailInput}
          phoneInput={phoneInput}
          setLastNameInput={setLastNameInput}
          setEmailInput={setEmailInput}
          setPhoneInput={setPhoneInput}
        />
        {contacts.length ? (
          <ContactsList
            contacts={contacts}
            setContacts={setContacts}
            showCheckbox={showCheckbox}
            setSelectedArray={setSelectedArray}
            selectedArray={selectedArray}
            changeHandler={changeHandler}
            editing={editing}
            setEditing={setEditing}
            nameInput={nameInput}
            setNameInput={setNameInput}
            setLastNameInput={setLastNameInput}
            setEmailInput={setEmailInput}
            setPhoneInput={setPhoneInput}
            setContact={setContact}
            isSearching={isSearching}
            setIsSearching={setIsSearching}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            modalTitle={modalTitle}
            setModalTitle={setModalTitle}
            modalContent={modalContent}
            setModalContent={setModalContent}
            setAlert={setAlert}
            alertType={alertType}
            setAlertType={setAlertType}
          />
        ) : (
          <>
            <h3 className={Styles.header}>Contacts List</h3>
            <p className={Styles.nothingAdded}>No Contacts Added yet!</p>
          </>
        )}
      </div>
      <SidebarMenu
        className={Styles.sidebar}
        contacts={contacts}
        setContacts={setContacts}
        deleteButton={deleteButton}
        showCheckbox={showCheckbox}
        selectedArray={selectedArray}
        isSearching={isSearching}
        setIsSearching={setIsSearching}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        modalTitle={modalTitle}
        setModalTitle={setModalTitle}
        modalContent={modalContent}
        setModalContent={setModalContent}
        setShowCheckbox={setShowCheckbox}
      />
    </div>
  );
}

export default App;
