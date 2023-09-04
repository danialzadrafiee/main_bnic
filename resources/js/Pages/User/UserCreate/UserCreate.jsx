import React, { useEffect, useState } from "react";
import { Formik, useFormik } from "formik";
import { useAccount } from "wagmi";
import { router } from "@inertiajs/react";
import GlobalLayout from "@/Layout/GlobalLayout/GlobalLayout";
import Sidebar from "./Sidebar/Sidebar";
import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Step3 from "./Step3/Step3";
import Step4 from "./Step4/Step4";
import { Typography } from "@material-tailwind/react";
import FormButton from "@/Pages/User/UserCreate/FormButton/FormButton";
import Grid from "@/Components/Grid/Grid";
import Flex from "@/Components/Flex/Flex";
import * as Yup from "yup";

const UserCreate = () => {
  const [step, setStep] = useState(3);
  const useFormikSetup = () => {
    // Helper function for unique object checking in the education array
    const hasUniqueObjects = (array) => {
      const seenObjects = {};

      for (const item of array) {
        const itemString = JSON.stringify(item);

        if (seenObjects[itemString]) {
          return false;
        } else {
          seenObjects[itemString] = true;
        }
      }

      return true;
    };
    const hasUniqueEducationItems = (array) => {
      const seenCombos = {};

      for (const item of array) {
        const comboString = `${item.country}-${item.university}`;

        if (seenCombos[comboString]) {
          return false;
        } else {
          seenCombos[comboString] = true;
        }
      }

      return true;
    };

    // Helper function for duplicate checking in arrays of strings
    const hasDuplicates = (array) => {
      return new Set(array).size !== array.length;
    };

    // Formik setup
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
        profession: [""],
        skill: [""],
        language: ["-"],
        cv: "",
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
            Yup.object().shape({
              country: Yup.string().min(1, "Minimum 3 characters").required("Required"),
              university: Yup.string().min(1, "Minimum 3 characters").required("Required"),
              field: Yup.string().min(3, "Minimum 3 characters").required("Required"),
              degree: Yup.string().min(3, "Minimum 3 characters").required("Required"),
            })
          )
          .min(1, "At least 1 item should exist")
          .test("duplicate-education-check", "Countries and Universities should not be duplicated", (value) => hasUniqueEducationItems(value)),
        profession: Yup.array().of(Yup.string().min(3, "Minimum 3 characters required").required("Required")).min(1, "At least 1 item should exist"),
        //   .test("duplicate-check", "Items should not be duplicated", (value) => !hasDuplicates(value)),
        skill: Yup.array().of(Yup.string().min(3, "Minimum 3 characters required").required("Required")).min(1, "At least 1 item should exist"),
        //   .test("duplicate-check", "Items should not be duplicated", (value) => !hasDuplicates(value)),
        language: Yup.array()
          .of(Yup.string().notOneOf(["-"]).min(1, "Minimum 3 characters required").required("Required"))
          .min(1, "At least 1 item should exist"),
        //   .test("duplicate-check", "Items should not be duplicated", (value) => !hasDuplicates(value)),
        cv: Yup.string().min(3, "Minimum 3 characters required").required("Required"),
      }),
      onSubmit: (values) => {
        console.log(values);
      },
    });

    return formik;
  };

  // Usage:
  const formik = useFormikSetup();

  const stepFields = {
    step0: [],
    step1: ["first_name", "last_name", "country_code", "state_code", "birthday_year", "birthday_month", "birthday_day", "gender"],
    step2: ["education"],
    step3: ["profession","skill","language"],
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
                  <Typography variant='h2' className='text-center mxl:max-w-md mx-auto font-bold'>
                    Empower Your Digital Identity
                  </Typography>
                </Grid>
                <Step1 formik={formik} walletAddress={walletAddress} className={step == 1 ? "" : "hidden"} />
                <Step2 formik={formik} className={step == 2 ? "" : "hidden"} />
                <Step3 formik={formik} className={step == 3 ? "" : "hidden"} />
                <Step4 formik={formik} className={step == 4 ? "" : "hidden"} />
                <Flex className='gap-4'>
                  {step > 1 && (
                    <FormButton size={"lg"} className={"w-full"} onClick={() => setStep(step - 1)}>
                      Previous
                    </FormButton>
                  )}
                  {step < 4 && (
                    <FormButton disabled={!isStepValid(`step${step}`)} size={"lg"} className={"w-full"} onClick={() => setStep(step + 1)}>
                      Next
                    </FormButton>
                  )}
                  {step === 4 && (
                    <FormButton size={"lg"} className={"w-full"} type='submit'>
                      Submit
                    </FormButton>
                  )}
                  <button
                    type='button'
                    onClick={() => {
                      console.log(formik.values);
                      console.log(formik.errors);
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
