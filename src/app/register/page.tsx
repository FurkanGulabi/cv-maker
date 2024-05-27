/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { motion } from "framer-motion";
import { Button, Input, Link, Radio, RadioGroup } from "@nextui-org/react";
import { useMemo, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Page = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Ad boş bırakılamaz."),
    lastName: Yup.string().required("Soyad boş bırakılamaz."),
    email: Yup.string()
      .email("Geçersiz E-posta")
      .required("E-posta boş bırakılamaz."),
    password: Yup.string()
      .min(6, "Şifre en az 6 karakter olmalıdır.")
      .required("Şifre boş bırakılamaz."),
    gender: Yup.string().required("Lütfen cinsiyet seçin."),
  });

  return (
    <div className="flex items-center flex-col justify-center min-h-screen w-full px-4 sm:px-6 lg:px-8">
      <h1 className="font-bold text-lg mb-5">Kayıt ol</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          gender: "",
        }}
        validationSchema={validationSchema}
        isInitialValid
        onSubmit={(values, { setTouched }) => {
          setTouched({
            firstName: true,
            lastName: true,
            email: true,
            password: true,
            gender: true,
          });
          console.log(values);
        }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          setFieldValue,
          touched,
          errors,
        }) => (
          <Form className="bg-white/[.06] p-8 rounded-lg border gap-6 flex justify-center items-center flex-col shadow-md w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/3">
            <div className="flex w-full justify-center gap-2 items-center">
              <Field
                as={Input}
                isRequired
                type="text"
                label="Ad"
                fullWidth
                name="firstName"
                onChange={handleChange}
                onBlur={handleBlur}
                errorMessage={errors.firstName}
              />
              <Field
                as={Input}
                isRequired
                type="text"
                label="Soyad"
                fullWidth
                name="lastName"
                onChange={handleChange}
                onBlur={handleBlur}
                errorMessage={errors.lastName}
              />
            </div>
            <Field
              as={Input}
              isRequired
              type="email"
              label="E-posta"
              fullWidth
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              errorMessage={errors.email}
            />
            <div className="relative w-full">
              <Field
                as={Input}
                isRequired
                type={isVisible ? "text" : "password"}
                label="Şifre"
                fullWidth
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                errorMessage={errors.password}
                minLength={6}
              />
              <button
                type="button"
                onClick={toggleVisibility}
                className="absolute top-1/2 transform -translate-y-1/2 right-3 focus:outline-none"
              >
                {isVisible ? (
                  <FaEyeSlash className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <FaEye className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            </div>
            <div className="flex w-full justify-center items-center gap-2">
              <p className="label text-gray-200">Cinsiyet:</p>
              <Field
                as={RadioGroup}
                isRequired
                orientation="horizontal"
                name="gender"
                onChange={(value: any) =>
                  setFieldValue("gender", value.target.value)
                }
                errorMessage={"Cinsiyet boş bırakılamaz."}
              >
                <Radio className="mr-3" value="male">
                  Erkek
                </Radio>
                <Radio value="female">Kadın</Radio>
              </Field>
            </div>
            <Button fullWidth type="submit">
              Kayıt ol
            </Button>
          </Form>
        )}
      </Formik>
      <div className="label label-text mt-3">
        Zaten hesabın var mı ?{" "}
        <Link color="foreground" className="ml-1 font-bold" href={"/login"}>
          Giriş yap
        </Link>
      </div>
    </div>
  );
};

export default Page;
