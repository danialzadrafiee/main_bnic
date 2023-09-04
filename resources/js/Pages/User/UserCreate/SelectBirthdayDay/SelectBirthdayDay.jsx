// resources/js/Pages/User/UserCreate/SelectBirthdayDay/SelectBirthdayDay.jsx

import React, { useEffect, useState } from "react";
import { Select, Option, Typography } from "@material-tailwind/react";
const SelectBirthdayDay = ({ props, formik, className }) => {
  useEffect(() => {
    const numberOfDays = birthday_daysInMonth(formik.values.birthday_month, formik.values.year);
    setDays(Array.from({ length: numberOfDays }, (_, i) => i + 1));
  }, [formik.values.birthday_month, formik.values.year]);
  const [birthday_days, setDays] = useState(Array.from({ length: 31 }, (_, i) => i + 1)); // Default to 31 days
  const birthday_daysInMonth = (month, year) => {
    switch (month) {
      case "2": // February
        return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) ? 29 : 28;
      case "4":
      case "6":
      case "9":
      case "11": // April, June, September, November
        return 30;
      default:
        return 31;
    }
  };
  return (
    <>
      <Select
        variant='static'
        defaultValue='1'
        value={formik.values.birthday_day}
        label='Day'
        onChange={(value) => {
          formik.setFieldValue("birthday_day", value);
        }}
      >
        {birthday_days.map((birthday_day) => (
          <Option value={birthday_day.toString()} key={birthday_day}>
            {birthday_day}
          </Option>
        ))}
      </Select>
      <Typography variant='small' color='red'>
        {formik.touched[birthday_days] && formik.errors[birthday_days] ? <>{formik.errors[birthday_days]}</> : " "}
      </Typography>
    </>
  );
};

export default SelectBirthdayDay;
