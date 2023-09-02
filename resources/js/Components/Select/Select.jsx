// resources/js/Components/Select/Select.jsx
import React, { useState } from "react";
import cn from "classnames";
import "./Select.scss";
const Select = ({ props, className, onChange, children, label, labelClass, name, defaultValue }) => {
  return (
    <>
      <div {...props} className={cn("select", className)}>
        <select onChange={onChange} name={name} defaultValue={defaultValue} className='select-text' required>
          <option disabled></option>
          {children}
        </select>
        <span className='select-highlight'></span>
        <span className='select-bar'></span>
        <label className={cn("select-label peer w-full h-full bg-transparent text-blue-gray-500 font-sans font-normal text-left  disabled:bg-blue-gray-50 disabled:border-0 transition-all  text-sm", labelClass)}>{label}</label>
      </div>
    </>
  );
};

export default Select;
