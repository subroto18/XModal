import Input from "../../ui/Input";
import Styles from "./Styles.module.css";
import Button from "../../ui/Button";
import { useState } from "react";
import { validateDate, validatePhone } from "../../validation";

type InputItem = {
  id: string;
  name: keyof FormDataProp;
  label: string;
  type: string;
  required?: boolean;
};

type FormDataProp = {
  username: string;
  email: string;
  phone: string;
  date: string;
};
const Index = () => {
  const [formData, setFormData] = useState<FormDataProp>({
    username: "",
    email: "",
    phone: "",
    date: "",
  });
  const inputList: InputItem[] = [
    {
      id: "username",
      name: "username",
      label: "Username:",
      type: "text",
      required: true,
    },
    {
      id: "email",
      name: "email",
      label: "Email Address:",
      type: "email",
      required: true,
    },
    {
      id: "phone",
      name: "phone",
      label: "Phone Number:",
      type: "text",
      required: true,
    },
    {
      id: "dob",
      name: "date",
      label: "Date of Birth:",
      type: "date",
      required: true,
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validatePhone(formData.phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
    } else if (!validateDate(formData.date)) {
      alert("Invalid date of birth. Date of birth cannot be in the future");
    } else {
      setFormData({
        username: "",
        email: "",
        phone: "",
        date: "",
      });
    }
  };

  return (
    <div className={Styles.form}>
      <h1 className={Styles.heading}>Fill Details</h1>
      <form onSubmit={handleFormSubmit}>
        {inputList.map((item) => {
          return (
            <div className="form_field">
              <Input
                value={formData[item.name] || ""}
                onChange={handleChange}
                {...item}
              />
            </div>
          );
        })}
        <div className={Styles.btn_div}>
          <Button className="submit-button" type="submit" label="Submit" />
        </div>
      </form>
    </div>
  );
};

export default Index;
