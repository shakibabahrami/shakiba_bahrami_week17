import React from "react";
import Styles from "./Modal.module.css";

const Modal = ({ isOpen, title, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={Styles.modalOverlay}>
      <div className={Styles.modalContent}>
        <h2>{title}</h2>
        <button onClick={onClose}>Close</button>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
