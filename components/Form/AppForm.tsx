import { Formik } from "formik";
import React from "react";

const AppForm = ({
  initialValues,
  onSubmit,
  children,
  validationSchema,
  debug = false,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, values, errors, touched }) => (
        <>
          {debug && (
            <pre>{JSON.stringify({ values, errors, touched }, null, 2)}</pre>
          )}
          <form onSubmit={handleSubmit}>{children}</form>
        </>
      )}
    </Formik>
  );
};

export default AppForm;
