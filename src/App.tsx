import { useState } from "react";
import "./App.css";
import Button from "./ui/Button";
import Modal from "./ui/Modal";
import Form from "./components/Form";
function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="parent_section">
      <div className="parent">
        <h1>User Details Modal</h1>
        <Button onClick={() => setOpen(!open)} label="Open Form" />

        <Modal isOpen={open} onClose={() => setOpen(false)}>
          <Form />
        </Modal>
      </div>
    </div>
  );
}

export default App;
