import React from "react";

const Input = ({ onChangeText, ...rest }) => {
  return (
    <div>
      <input
        onChange={(e) => onChangeText(e.target.value)}
        {...rest}
        className="w-full h-2 px-4 py-5 text-sm border rounded text-gray-base border-gray-primary focus:outline-none"
      />
    </div>
  );
};

export default Input;
