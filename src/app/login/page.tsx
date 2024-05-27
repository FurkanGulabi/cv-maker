"use client";
import { motion } from "framer-motion";
import { Button, Input, Link } from "@nextui-org/react";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Page = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Geçersiz E-posta")
      .required("E-posta boş bırakılamaz."),
    password: Yup.string()
    .required("Şifre boş bırakılamaz."),
  });

  return (
    <div className="flex items-center flex-col justify-center min-h-screen w-full px-4 sm:px-6 lg:px-8">
      <h1 className="font-bold text-lg mb-5">Giriş Yap</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values, handleChange, handleBlur, errors }) => (
          <Form className="bg-white/[.06] p-8 rounded-lg border gap-6 flex justify-center items-center flex-col shadow-md w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/3">
            <div className="w-full">
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
            </div>
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
            <Button fullWidth type="submit">
              Giriş yap
            </Button>
          </Form>
        )}
      </Formik>
      <div className="label label-text mt-3">
        Hesabın yok mu ?{" "}
        <Link color="foreground" className="ml-1 font-bold" href={"/register"}>
          Kayıt ol
        </Link>
      </div>
    </div>
  );
};

export default Page;
