import AppLayout from "@/layouts/AppLayout";
import React from "react";
import AppForm from "@/components/Form/AppForm";
import AppInput from "@/components/Form/AppInput";

const test = () => {
  return (
    <AppLayout>
      <div className="w-6/12 mx-auto">
        <AppForm
          initialValues={{ email: "", password: "" }}
          onSubmit={(e) => console.log(e)}
        >
          <AppInput type="email" name="email" placeholder="Emaill adress" />

          <button type="submit">submit</button>
        </AppForm>
      </div>
    </AppLayout>
  );
};

export default test;
