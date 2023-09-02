// StateSelect.jsx
import { State } from "country-state-city";
import { Select, Option } from "@material-tailwind/react";
const noStates = ["-"];

const StateSelect = ({ formik, selectedCountry, placeholder, variant = "standard" }) => {
  const states = State.getStatesOfCountry(selectedCountry);

  return (
    <>
      <Select
        variant={variant}
        label='State'
        placeholder={placeholder}
        name='state_code'
        onChange={(e) => {
          formik.setFieldValue("state_code", e);
        }}
      >
        {states.length === 0
          ? noStates.map((state) => (
              <Option key={state} value={state}>
                {state}
              </Option>
            ))
          : states.map((state) => (
              <Option key={state.isoCode} value={state.isoCode}>
                {state.name}
              </Option>
            ))}
      </Select>
    </>
  );
};

export default StateSelect;
