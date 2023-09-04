import React from "react";
import Flex from "@/Components/Flex/Flex";
import Grid from "@/Components/Grid/Grid";
import { Button, Input, Select, Option, Typography } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

const InputFieldGroup = ({ formik, field, children }) => {
  const addInputField = (field) => {
    if (formik.values[field].length < 5) {
      formik.setFieldValue(field, [...formik.values[field], ""]);
    }
  };

  const removeInputField = (field, index) => {
    const newValues = [...formik.values[field]];
    newValues.splice(index, 1);
    formik.setFieldValue(field, newValues);
  };

  return (
    <Grid className='gap-2'>
      {formik.values[field].map((value, index) => {
        const isFieldTouched = formik.touched[field] && formik.touched[field][index];
        const fieldError = isFieldTouched && formik.errors[field] && formik.errors[field][index];

        return (
          <Grid className='gap-2' key={index + field}>
            <Flex className='flex items-center gap-2'>
              <div className='!w-full'>{children(value, index)}</div>
            </Flex>
            <Flex className='justify-end gap-1'>
              {fieldError && (
                <Typography className='mr-auto' color='red' variant='small'>
                  {Array.isArray(fieldError) ? fieldError.join(" ") : fieldError}
                </Typography>
              )}
              {index !== 0 && (
                <Button className='!p-1 !h-max !px-2' size='sm' color='gray' onClick={() => removeInputField(field, index)}>
                  <FontAwesomeIcon icon={faTrash} size='xs' />
                </Button>
              )}

              {index === formik.values[field].length - 1 && formik.values[field].length < 5 && (
                <Button onClick={() => addInputField(field)} type='button' className='!p-1 !h-max !px-2' size='sm' color='teal'>
                  <FontAwesomeIcon icon={faPlus} size='xs' />
                </Button>
              )}
            </Flex>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default InputFieldGroup;
