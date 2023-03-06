import React from "react";
import Select from "react-select";

export default function SelectField({ label, options, changeHandler }) {
  return (
    <label className="select-label">
      {label}
      <Select
        onChange={changeHandler}
        options={options}
        theme={(theme) => ({
          ...theme,
          borderRadius: "4px",
          fontWeight: 400,
          colors: {
            ...theme.colors,
            primary25: "#F3F8FF",
            primary: "#181923",
          },
        })}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderWidth: "2px",
            borderColor: "#cbd5e1",
            borderRadius: "4px",
            fontWeight: 400,
          }),
        }}
      />
    </label>
  );
}
