import React, { useState } from "react";
import Button from "./Button";
import Card from "./Card";
import Input from "./Input";

const LoginForm = ({ onSubmitForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitForm(email, password);
  };

  return (
    <Card>
      <img
        src="/images/logo.png"
        alt="Instagram"
        className="w-6/12 mx-auto mb-3"
      />

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-2">
          <Input
            onChangeText={setEmail}
            placeholder="Email address"
            type="email"
          />
          <Input
            onChangeText={setPassword}
            placeholder="Password"
            type="password"
          />
          <Button>Login</Button>
        </div>
      </form>
    </Card>
  );
};

export default LoginForm;
