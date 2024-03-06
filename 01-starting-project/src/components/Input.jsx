import { useState } from "react";

const Input = ({ lable }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <span>
      <label htmlFor={lable}>{lable}</label>
      <input type="number" value={value} onChange={handleChange} />
    </span>
  );
};

export default Input;
