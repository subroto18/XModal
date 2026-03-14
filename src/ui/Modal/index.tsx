import ReactDOM from "react-dom";
import "./Modal.css";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const index = ({ isOpen, children, onClose }: ModalProps) => {
  if (!isOpen) return null;

  const rootElement = document.getElementById("root");

  return ReactDOM.createPortal(
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    rootElement as HTMLElement,
  );
};

export default index;
