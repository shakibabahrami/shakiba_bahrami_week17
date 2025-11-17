import { useContext } from "react";
import { ContactsContext } from "./context/contact/ContactContext.jsx";
import Contacts from "./components/Contacts";
import ContactsList from "./components/ContactsList";
import SidebarMenu from "./components/SidebarMenu";
import Modal from "./components/Modal";

import Styles from "./App.module.css";

function App() {
  const { state, dispatch } = useContext(ContactsContext);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: "SET_CONTACT",
      payload: { ...state.contact, [name]: value },
    });
  };

  // const deleteButton = () => {
  //   dispatch({ type: "TOGGLE_CHECKBOX" });
  //   dispatch({
  //     type: "SET_ALERT",
  //     payload: { alert: "Select contacts to delete", type: true },
  //   });
  //   setTimeout(() => {
  //     dispatch({ type: "SET_ALERT", payload: { alert: "", type: true } });
  //   }, 3000);
  // };

  return (
    <div className={Styles.container}>
      {/* <Modal
        isOpen={state.modal.isOpen}
        title={state.modal.title}
        onClose={() =>
          dispatch({
            type: "SET_MODAL",
            payload: { isOpen: false, title: "", content: "" },
          })
        }
      >
        {state.modal.content}
      </Modal> */}

      <div className={Styles.leftSideContainer}>
        <Contacts
        contacts={state.contacts}
        contact={state.contact}
        // changeHandler={changeHandler}
        dispatch={dispatch}
        alert={state.alert}
        alertType={state.alertType}
        editing={state.editing}
        className={Styles.Contacts}
      />

      <ContactsList
        contacts={state.contacts}
        dispatch={dispatch}
        showCheckbox={state.showCheckbox}
        selectedArray={state.selectedArray}
      />
      </div>

      {/* <SidebarMenu
        deleteButton={deleteButton}
        showCheckbox={state.showCheckbox}
        selectedArray={state.selectedArray}
      /> */}
    </div>
  );
}

export default App;
