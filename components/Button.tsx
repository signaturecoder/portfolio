import React from "react";

const Button = ({ children}) => {
  return (
    <>
      <button className="bg-indigo-500 px-2 py-2 rounded-full">
        {children}
      </button>
    </>
  );
};

export default Button;
