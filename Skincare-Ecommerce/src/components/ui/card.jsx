// src/components/ui/Card.jsx
import React from "react";

// Main Card wrapper
export const Card = ({ children, className = "" }) => {
  return (
    <div className={`bg-white shadow-md rounded-2xl p-6 ${className}`}>
      {children}
    </div>
  );
};

// CardContent wrapper
export const CardContent = ({ children, className = "" }) => {
  return (
    <div className={`p-4 ${className}`}>
      {children}
    </div>
  );
};
