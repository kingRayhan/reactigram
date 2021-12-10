import { useFormikContext } from "formik";
import React from "react";

const AppInput = ({ name, ...restProps }) => {
  const { handleChange, errors, touched, handleBlur } = useFormikContext();

  return (
    <div>
      <input
        name={name}
        onBlur={handleBlur}
        onChange={handleChange}
        className="w-full h-2 px-4 py-5 text-sm border rounded text-gray-base border-gray-primary focus:outline-none"
        {...restProps}
      />

      {touched[name] && errors[name] && (
        <div className="text-xs text-red-500">{errors[name]}</div>
      )}
    </div>
  );
};

export default AppInput;
