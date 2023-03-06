import React from "react";

export default function InputField({
  type = "text",
  label,
  placeholder,
  value,
  changeHandler,
  required = false,
}) {
  return (
    <label>
      {label}
      <input
        type={type}
        value={value}
        onChange={changeHandler}
        placeholder={placeholder}
        required={required}
      />
    </label>
  );
}
