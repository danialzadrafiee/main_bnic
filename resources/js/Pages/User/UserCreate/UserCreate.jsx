import React, { useEffect, useState } from "react";
import { Formik, useFormik } from "formik";
import { useAccount } from "wagmi";
import { router } from "@inertiajs/react";
import GlobalLayout from "@/Layout/GlobalLayout/GlobalLayout";
import Sidebar from "./Sidebar/Sidebar";
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import { Typography } from "@material-tailwind/react";
import FormButton from "@/Pages/User/UserCreate/FormButton/FormButton";
import Grid from "@/Components/Grid/Grid";
import Flex from "@/Components/Flex/Flex";
import * as Yup from "yup";
import Step3 from "./Step3/Step3";

const UserCreate = () => {
  const [step, setStep] = useState(1);

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      country_code: "",
      state_code: "",
      birthday_year: "2023",
      birthday_month: "1",
      birthday_day: "1",
      gender: "",
      education: [{ country: "", university: "", field: "", degree: "" }],
    },
    validationSchema: Yup.object({
      first_name: Yup.string().max(80, "Field should have maximum 80 characters").min(3, "Field should have minimum 3 characters").required("Required"),
      last_name: Yup.string().max(80, "Field should have maximum 80 characters").min(3, "Field should have minimum 3 characters").required("Required"),
      country_code: Yup.string().required("Required"),
      state_code: Yup.string().required("Required"),
      birthday_year: Yup.string().required("Required"),
      birthday_month: Yup.string().required("Required"),
      birthday_day: Yup.string().required("Required"),
      gender: Yup.string().required("Required"),
      education: Yup.array()
        .of(
          Yup.object({
            country: Yup.string().required(),
            university: Yup.string().required(),
            field: Yup.string().required(),
            degree: Yup.string().required(),
          })
        )
        .min(1, "Please provide information educational background")
        .required("Required"),
    }),

    onSubmit: (values) => {
      console.log(values);
    },
  });

  const stepFields = {
    step0: [],
    step1: ["first_name", "last_name", "country_code", "state_code", "birthday_year", "birthday_month", "birthday_day", "gender"],
    step2: ["education"],
  };

  const isStepValid = (step) => stepFields[step].every((field) => formik.values[field] && !formik.errors[field]);

  const account = useAccount();
  const [walletAddress, setWalletAddress] = useState("");

  useEffect(() => {
    if (!account.address) {
      router.get(route("user.login"));
    } else {
      setWalletAddress(account.address);
    }
  }, [account]);

  const steps = [
    {
      key: 0,
      title: "Unlock Your Wallet",
      describe: "Sign your Polygon wallet.",
      status: "done",
    },
    {
      key: 1,
      title: "Who Are You?",
      describe: "Authenticate your identity.",
      status: "active",
    },
    {
      key: 2,
      title: "Flaunt Your Knowledge",
      describe: "Share your academics.",
      status: "wait",
    },
    {
      key: 3,
      title: "Your Professional Saga",
      describe: "Detail your occupation.",
      status: "wait",
    },
    {
      key: 4,
      title: "Connect & Converse",
      describe: "Add social details.",
      status: "wait",
    },
    {
      key: 5,
      title: "The Sacred Scroll",
      describe: "Accept our terms.",
      status: "wait",
    },
  ];

  return (
    <GlobalLayout>
      <main>
        <div className='flex gap-4'>
          <Sidebar steps={steps} />
          <section className='basis-3/4 h-screen items-center p-2 flex justify-center'>
            <Formik isStepValid={isStepValid} formik={formik} step={step} setStep={setStep}>
              <form className='container max-w-2xl grid space-y-6' onSubmit={formik.handleSubmit}>
                <Grid>
                  <Typography variant='h5' className='uppercase text-black/40 text-center'>
                    Get started
                  </Typography>
                  <Typography variant='h2' className='text-center max-w-md mx-auto font-bold'>
                    Empower Your Digital Identity
                  </Typography>
                </Grid>
                <Step1 formik={formik} walletAddress={walletAddress} className={step == 1 ? "" : "hidden"} />
                <Step2 formik={formik} className={step == 2 ? "" : "hidden"} />
                <Step3 formik={formik} className={step == 3 ? "" : "hidden"} />
                <Flex className='gap-4'>
                  {step > 1 && (
                    <FormButton size={"lg"} className={"w-full"} onClick={() => setStep(step - 1)}>
                      Previous
                    </FormButton>
                  )}
                  {step < 3 && (
                    <FormButton disabled={!isStepValid(`step${step}`)} size={"lg"} className={"w-full"} onClick={() => setStep(step + 1)}>
                      Next
                    </FormButton>
                  )}
                  {step === 3 && (
                    <FormButton size={"lg"} className={"w-full"} type='submit'>
                      Submit
                    </FormButton>
                  )}
                  <button
                    type='button'
                    onClick={() => {
                      console.log(formik.values);
                    }}
                  >
                    test
                  </button>
                </Flex>
              </form>
            </Formik>
          </section>
        </div>
      </main>
    </GlobalLayout>
  );
};

export default UserCreate;
