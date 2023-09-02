// FormInput.jsx

import { Input } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";

const FormInput = ({ placeholder, formik, name, label, variant = "standard", min, max, type }) => {
  return (
    <div>
      <Input min={min} max={max} type={type} placeholder={placeholder} label={label} variant={variant} name={name} value={formik.values[name]} onChange={formik.handleChange} onBlur={formik.handleBlur} />
      <Typography variant='small' color='red'>
        {formik.touched[name] && formik.errors[name] ? <>{formik.errors[name]}</> : " "}
      </Typography>
    </div>
  );
};

export default FormInput;
