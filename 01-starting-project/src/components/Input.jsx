import { useState } from "react";

const Input = ({ name, lable, onDetailsChange }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    onDetailsChange(name, event.target.value);
  };

  return (
    <span>
      <label htmlFor={lable}>{lable}</label>
      <input type="number" value={value} onChange={handleChange} min={0} />
    </span>
  );
};

export default Input;
