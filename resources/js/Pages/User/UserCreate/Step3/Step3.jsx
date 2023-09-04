import cn from "classnames";
import { Button, Input, Select, Option } from "@material-tailwind/react";
import Grid from "@/Components/Grid/Grid";
import languages from "./languages";
import InputFieldGroup from "./InputFieldGroup/InputFieldGroup";

const Step3 = ({ formik, className }) => {
  const handleInputChange = (value, index, field) => {
    const newValues = [...formik.values[field]];
    newValues[index] = value;
    formik.setFieldTouched(`${field}[${index}]`, true);
    formik.setFieldValue(field, newValues);
  };
  return (
    <div className={cn(className, "flex flex-col gap-4")}>
      <Grid className='grid-cols-3 gap-4 items-start justify-start'>
        <InputFieldGroup formik={formik} field='profession' label='Profession'>
          {(value, index) => <Input onChange={(e) => handleInputChange(e.target.value, index, "profession")} label='Profession' variant='standard' value={value} />}
        </InputFieldGroup>

        <InputFieldGroup formik={formik} field='skill' label='Skill'>
          {(value, index) => <Input onChange={(e) => handleInputChange(e.target.value, index, "skill")} label='Skill' variant='standard' value={value} />}
        </InputFieldGroup>

        <InputFieldGroup formik={formik} field='language' label='Language'>
          {(value, index) => (
            <Select onChange={(newValue) => handleInputChange(newValue, index, "language")} label='Language' variant='standard'>
              {languages.map((language) => (
                <Option key={language.code} value={language.name}>
                  {language.name}
                </Option>
              ))}
            </Select>
          )}
        </InputFieldGroup>
      </Grid>
    </div>
  );
};

export default Step3;
