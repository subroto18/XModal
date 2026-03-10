import { useState } from "react";
import Input from "../ui/Input";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });
  const [fullName, setFullName] = useState("");

  const HEADLING = "Full Name Display";
  const BTN_TEXT = "Submit";

  const inputs = [
    { label: "First Name", type: "text", id: "firstName", name: "firstName" },
    { label: "Last Name", type: "text", id: "lastName", name: "lastName" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fullName = `${formData.firstName} ${formData.lastName}`;
    setFullName(fullName);
  };

  return (
    <div className="form">
      <h1 className="heading">{HEADLING}</h1>

      <form onSubmit={handleSubmit} method="post">
        {inputs.map((input) => (
          <div className="input_div" key={input.id}>
            <label htmlFor={input.id}>{input.label}:</label>

            <Input
              type={input.type}
              id={input.id}
              name={input.name}
              onChange={handleChange}
            />
          </div>
        ))}
        <div className="submit_btn">
          <button type="submit">{BTN_TEXT}</button>
        </div>
      </form>
      {fullName && <p>Full Name : {fullName}</p>}
    </div>
  );
};

export default Form;
