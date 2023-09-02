// Step1.jsx

import Grid from "@/Components/Grid/Grid";
import FormInput from "./../FormInput/FormInput";
import StateSelect from "../StateSelect/StateSelect";
import { Button, Input, Option, Radio, Select, Typography } from "@material-tailwind/react";
import CountrySelect from "../CountrySelect/CountrySelect";
import SelectBirthdayMonth from "../SelectBirthdayMonth/SelectBirthdayMonth";
import SelectBirthdayDay from "../SelectBirthdayDay/SelectBirthdayDay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCake, faMarsAndVenus } from "@fortawesome/free-solid-svg-icons";
import SelectBirthdayYear from "../SelectBirthdayYear/SelectBirthdayYear";
import cn from "classnames";
const Step1 = ({ formik, walletAddress, className }) => {
  return (
    <div className={cn(className, "flex flex-col gap-4")}>
      <Grid className='grid-cols-2 gap-2'>
        <FormInput formik={formik} name='first_name' label='Firstname' />
        <FormInput formik={formik} name='last_name' label='Lastname' />
      </Grid>
      <Grid className='grid-cols-2 gap-2'>
        <CountrySelect formik={formik} />
        <StateSelect formik={formik} selectedCountry={formik.values.country_code} />
      </Grid>
      <Grid className={"grid-cols-3 gap-3"}>
        <Typography className='mb-2 col-span-3 flex items-center gap-2 '>
          <FontAwesomeIcon size='sm' className='opacity-80' icon={faCake}></FontAwesomeIcon>
          Your Birthday
        </Typography>
        <SelectBirthdayYear value={formik.values.birthday_year} formik={formik}></SelectBirthdayYear>
        <SelectBirthdayMonth formik={formik}></SelectBirthdayMonth>
        <SelectBirthdayDay formik={formik}></SelectBirthdayDay>
      </Grid>
      <Grid className={"grid-cols-5 items-center gap-3"}>
        <Typography className='items-center col-span-2 flex gap-2'>
          <FontAwesomeIcon size='sm' className='opacity-80' icon={faMarsAndVenus}></FontAwesomeIcon>
          Select Gender
        </Typography>
        <label className='border-b border-black/30 items-center justify-center'>
          <Radio name='gender' color='blue' label='Male' value={"male"} onChange={(gender) => formik.setFieldValue("gender", gender.target.value)} />
        </label>
        <label className='border-b border-black/30 items-center justify-center'>
          <Radio name='gender' color='blue' label='Female' value={"female"} onChange={(gender) => formik.setFieldValue("gender", gender.target.value)} />
        </label>
        <label className='border-b border-black/30 items-center justify-center'>
          <Radio name='gender' color='blue' label='Other' value={"other"} onChange={(gender) => formik.setFieldValue("gender", gender.target.value)} />
        </label>
      </Grid>
      <Grid>
        <Typography className='mb-1  items-center  flex '>Your wallet Address</Typography>
        <div className='relative'>
          <Button variant='text' color='blue' className='!absolute !bg-transparent  right-0 top-0 bottom-0 !cursor-pointer z-10'>
            not you?
          </Button>
          <Input variant='static' label='Your wallet address' value={walletAddress} disabled={true} className='!border-b !text-base relative !bg-transparent'></Input>
        </div>
      </Grid>
      <Grid>
        <Typography className='text-center text-base text-black/80'>The terms and conditions will be shown in the last step.</Typography>
      </Grid>
    </div>
  );
};

export default Step1;
