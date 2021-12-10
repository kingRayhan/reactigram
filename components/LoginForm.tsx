import React, { useState } from "react";
import * as Yup from "yup";

import Card from "@/components/Card";
import Button from "@/components/Button";
import AppForm from "./Form/AppForm";
import AppInput from "./Form/AppInput";

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().min(6).max(30).required("Password is required"),
});

const LoginForm = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Card>
      <img
        src="/images/logo.png"
        alt="Instagram"
        className="w-6/12 mx-auto mb-3"
      />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        debug={false}
      >
        <div className="flex flex-col space-y-2">
          <AppInput name="email" placeholder="Email address" />
          <AppInput name="password" type="password" placeholder="Password" />
          <Button>Login</Button>
        </div>
      </AppForm>
    </Card>
  );
};

export default LoginForm;
