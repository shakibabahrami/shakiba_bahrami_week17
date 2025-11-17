import { ADD, DELETE, EDIT, SET_ALERT, TOGGLE_CHECKBOX, SET_MODAL, SET_CONTACT } from "./actionTypes";

const contactsReducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, contacts: [...state.contacts, action.payload] };

    case DELETE:
      return {
        ...state,
        contacts: state.contacts.filter((c) => !action.payload.includes(c.id)),
        selectedArray: [],
      };

    case EDIT:
      return {
        ...state,
        contacts: state.contacts.map((c) =>
          c.id === action.payload.id ? action.payload.contact : c
        ),
        contact: { name: "", lastName: "", email: "", phone: "" },
        editing: false,
      };

    case SET_CONTACT:
      return { ...state, contact: action.payload };

    case SET_ALERT:
      return { ...state, alert: action.payload.alert, alertType: action.payload.type };

    case TOGGLE_CHECKBOX:
      return { ...state, showCheckbox: !state.showCheckbox };

    case SET_MODAL:
      return { ...state, modal: action.payload };

    default:
      return state;
  }
};

export default contactsReducer;
