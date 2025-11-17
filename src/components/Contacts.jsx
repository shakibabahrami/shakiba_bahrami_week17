import { useContext } from "react";
import { ContactsContext } from "../context/contact/ContactContext.jsx";
import {
  ADD,
  EDIT,
  // SET_CONTACT_FIELD,
  // SET_ALERT,
  // CLEAR_ALERT,
} from "../context/contact/actionTypes";

import Styles from "./Contacts.module.css";

const Contacts = () => {
  const { state, dispatch } = useContext(ContactsContext);
  const { contact, editing, alert, alertType } = state;

  const validation = () => {
    if (!contact.name.trim()) return "Name is required!!";
    if (!contact.lastName.trim()) return "Last Name is required!!";
    if (!contact.email.includes("@")) return "Invalid Email!!";
    if (contact.phone.length < 11) return "Phone Number must be 11 digits!!";
    return "";
  };

  const handleChange = (e) => {
    dispatch({
      type: SET_CONTACT_FIELD,
      field: e.target.name,
      value: e.target.value,
    });
  };

  const addHandler = () => {
    const error = validation();
    if (error) {
      dispatch({ type: SET_ALERT, msg: error, alertType: false });
      return;
    }

    dispatch({ type: ADD });

    setTimeout(() => dispatch({ type: CLEAR_ALERT }), 3000);
  };

  const saveEditedHandler = () => {
    const error = validation();
    if (error) {
      dispatch({ type: SET_ALERT, msg: error, alertType: false });
      return;
    }

    dispatch({ type: EDIT });
    setTimeout(() => dispatch({ type: CLEAR_ALERT }), 3000);
  };

  const inputs = [
    { name: "name", placeholder: "Name", type: "text" },
    { name: "lastName", placeholder: "Last Name", type: "text" },
    { name: "email", placeholder: "Email", type: "email" },
    { name: "phone", placeholder: "Phone", type: "number" },
  ];

  return (
    <>
      <div className={Styles.container}>
        <h3 className={Styles.header}>Add New Contact</h3>

        <div className={Styles.inputs}>
          {inputs.map((input) => (
            <input
              key={input.name}
              className={Styles.input}
              name={input.name}
              type={input.type}
              placeholder={input.placeholder}
              value={contact[input.name]}
              onChange={handleChange}
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
};

export default Contacts;
