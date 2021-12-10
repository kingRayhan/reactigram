import React from "react";
import * as Yup from "yup";
import Card from "@/components/Card";
import Button from "@/components/Button";
import AppForm from "./Form/AppForm";
import AppInput from "./Form/AppInput";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const RegisterForm = () => {
  return (
    <Card>
      <img
        src="/images/logo.png"
        alt="Instagram"
        className="w-6/12 mx-auto mb-3"
      />
      <AppForm
        initialValues={{ name: "", username: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <div className="flex flex-col space-y-2">
          <AppInput placeholder="Full name" name="name" />
          <AppInput placeholder="Username" name="username" />
          <AppInput placeholder="Email address" name="email" />
          <AppInput placeholder="Password" type="password" name="password" />
          <Button>Signup</Button>
        </div>
      </AppForm>
    </Card>
  );
};

export default RegisterForm;
