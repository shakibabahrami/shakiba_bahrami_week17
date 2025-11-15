import React from "react";
import { useState } from "react";
import Styles from "./Contacts.module.css";
import { v4 } from "uuid";

function Contacts({
  contacts,
  setContacts,
  changeHandler,
  alert,
  setAlert,
  alertType,
  setAlertType,
  contact,
  setContact,
  editing,
  setEditing,
  nameInput,
  setNameInput,
  lastNameInput,
  emailInput,
  phoneInput,
  setLastNameInput,
  setEmailInput,
  setPhoneInput,
}) {
  const inputs = [
    { class: nameInput, type: "text", name: "name", placeholder: "Name" },
    {
      class: lastNameInput,
      type: "text",
      name: "lastName",
      placeholder: "Last Name",
    },
    {
      class: emailInput,
      type: "email",
      name: "email",
      placeholder: "Email",
    },
    {
      class: phoneInput,
      type: "number",
      name: "phone",
      placeholder: "Phone",
    },
  ];

  const validation = () => {
    if (!contact.name.trim()) return "Name is required!!";
    if (!contact.lastName.trim()) return "Last Name is required!!";
    if (!contact.email.includes("@")) return "Invalid Email!!";
    if (contact.phone.length < 11) return "Phone Number must be 11 digits!!";
    return "";
  };

  const addHandler = () => {
    const error = validation();
    if (error) {
      setAlert(error);
      setAlertType(false);
      return;
    }

    if (
      !contact.name ||
      !contact.lastName ||
      !contact.email ||
      !contact.phone
    ) {
      setAlert("Please Enter Valid Data!");
      setAlertType(false);
      setTimeout(() => {
        setAlert("");
      }, 3000);
      return;
    }
    const newContact = { ...contact, id: v4() };
    setContacts((contacts) => [...contacts, newContact]);
    setContact({
      id: "",
      name: "",
      lastName: "",
      email: "",
      phone: "",
    });
    setAlert("contact added successfully!!");
    setAlertType(true);
    setTimeout(() => {
      setAlert("");
    }, 3000);
  };

  const changeEditHandler = (event) => {

    

    const { name, value } = event.target;
    setContact((contact) => ({ ...contact, [name]: value }));
    if (name === "name") setNameInput(value);
    if (name === "lastName") setLastNameInput(value);
    if (name === "email") setEmailInput(value);
    if (name === "phone") setPhoneInput(value);
  };
  const saveEditedHandler = () => {
    
    const error = validation();
    if (error) {
      setAlert(error);
      setAlertType(false);
      return;
    }

    const editedContacts = contacts.map((c) =>
      c.id === contact.id ? contact : c
    );
    setContacts(editedContacts);
    setNameInput("");
    setLastNameInput("");
    setEmailInput("");
    setPhoneInput("");
    setEditing(false);
    setContact({
      id: "",
      name: "",
      lastName: "",
      email: "",
      phone: "",
    });
    setAlert("contact edited successfully!");
    setAlertType(true);
    setTimeout(() => {
      setAlert("");
    }, 3000);
  };
  return (
    <>
      <div className={Styles.container}>
        <h3 className={Styles.header}>Add New Contact</h3>
        <div className={Styles.inputs}>
          {inputs.map((input, index) => (
            <input
              key={index}
              className={Styles.input}
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
              value={contact[input.name]}
              onChange={changeEditHandler}
            />
          ))}
          {editing ? (
            <button onClick={saveEditedHandler}>Edit</button>
          ) : (
            <button onClick={addHandler}>Add</button>
          )}
        </div>
      </div>
      <div
        className={`${Styles.alert} ${
          alertType ? Styles.successAlert : Styles.failedAlert
        }`}
      >
        {alert && <p>{alert}</p>}
      </div>
    </>
  );
}

export default Contacts;
