import { useRef } from "react";
import styles from "./Modal.module.css";

export default function Modal({ children, isOpen }) {
  const modalRef = useRef(null);

  const openModal = () => modalRef.current.showModal();

  if (isOpen) openModal();

  return (
    <dialog
      ref={modalRef}
      className={`${styles.modal} ${isOpen && styles.activeModal}`}
    >
      {children}
    </dialog>
  );
}
