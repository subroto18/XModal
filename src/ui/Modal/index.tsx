import ReactDOM from "react-dom";
import "./Modal.module.css";
type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const index = ({ isOpen, children, onClose }: ModalProps) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={"modal"} onClick={onClose}>
      <div className={"modal-content"} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body,
  );
};

export default index;
