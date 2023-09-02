// CountrySelect.jsx

import { useState } from "react";
import { Country } from "country-state-city";
import { Select, Option } from "@material-tailwind/react";

const CountrySelect = ({ formik, placeholder, variant = "standard" }) => {
  return (
    <Select
      variant={variant}
      label='Country'
      placeholder={placeholder}
      name='country_code'
      onChange={(e) => {
        formik.setFieldValue("country_code", e);
      }}
      onBlur={formik.handleBlur}
    >
      {Country.getAllCountries().map((country) => (
        <Option key={country.isoCode.toString()} value={country.isoCode}>
          {country.name}
        </Option>
      ))}
    </Select>
  );
};

export default CountrySelect;
