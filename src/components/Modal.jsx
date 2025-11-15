import React from "react";
import Styles from "./Modal.module.css";

function Modal({ isOpen, title, onClose , children }) {
  if (!isOpen) return null;
  return (
    <div className={Styles.modalBackdrop}>
      <div className={Styles.modal}>
        <h3>{title}</h3>
        <div className={Styles.modalContent}>{children}</div>
        <button onClick={onClose} className={Styles.closeButton}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
