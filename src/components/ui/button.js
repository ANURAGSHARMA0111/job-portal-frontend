// src/components/ui/button.js

import React from "react";

export const Button = ({ children, className, onClick }) => {
  return (
    <button
      className={`py-2 px-4 rounded-md focus:outline-none transition-all duration-200 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
