import ReactDOM from "react-dom";
import Styles from "./Modal.module.css";
type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const index = ({ isOpen, children }: ModalProps) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={Styles.overlayStyle}>
      <div className={Styles.modalStyle}>{children}</div>
    </div>,
    document.body,
  );
};

export default index;
