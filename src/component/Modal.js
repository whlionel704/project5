import styles from "./Modal.module.css";

const Modal = ({ openModal, children }) => {
  if (!openModal) return null;

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalBox}>{children}</div>
    </div>
  );
};

export default Modal;
