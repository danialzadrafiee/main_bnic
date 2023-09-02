// resources/js/Pages/User/UserCreate/SelectBirthdayDay/SelectBirthdayDay.jsx

import React, { useEffect, useState } from "react";
import { Select, Option } from "@material-tailwind/react";
const SelectBirthdayDay = ({ props, formik, className }) => {
  const [birthday_years, setBirthdayYears] = useState(Array.from({ length: 124 }, (_, i) => 2023 - i));

  return (
    <>
      <Select
        variant='static'
        value={formik.values.birthday_year}
        label='Year'
        onChange={(value) => {
          formik.setFieldValue("birthday_year", value);
        }}
      >
        {birthday_years.map((birthday_year) => (
          <Option value={birthday_year.toString()} key={birthday_year}>
            {birthday_year}
          </Option>
        ))}
      </Select>
    </>
  );
};

export default SelectBirthdayDay;
