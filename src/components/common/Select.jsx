import React from "react";

const Select = ({ options, handleChange, selected }) => {
  return (
    <div className="select-container">
      <select name="propertyType" value={selected} onChange={handleChange}>
        <option selected="true" label={"Select"} disabled="disabled"></option>
        {options.map((m) => {
          return <option label={m.label} value={m.value}></option>;
        })}
      </select>
    </div>
  );
};

export default Select;
