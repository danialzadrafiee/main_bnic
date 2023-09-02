// resources/js/Pages/User/UserCreate/SelectBirthdayMonth/SelectBirthdayMonth.jsx
import { Select , Option } from '@material-tailwind/react';
import React, { useState } from "react";
const months = [
  { id: "1", name: "January" },
  { id: "2", name: "February" },
  { id: "3", name: "March" },
  { id: "4", name: "April" },
  { id: "5", name: "May" },
  { id: "6", name: "June" },
  { id: "7", name: "July" },
  { id: "8", name: "August" },
  { id: "9", name: "September" },
  { id: "10", name: "October" },
  { id: "11", name: "November" },
  { id: "12", name: "December" },
];
const SelectBirthdayMonth = ({ props, formik, className }) => {
  return (
    <>
      <Select defaultValue="1" variant='static' label="Month" value={formik.values.birthday_month} onChange={(value) => formik.setFieldValue("birthday_month", value)}>
        {months.map((month) => (
          <Option value={month.id.toString()} key={month.id}>
            {month.name}
          </Option>
        ))}
      </Select>
    </>
  );
};

export default SelectBirthdayMonth;
