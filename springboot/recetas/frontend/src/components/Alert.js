import React from "react";

const Alert = ({ alert }) => {
  return (
    <div className="alert">
      <h3 className="text-2xl font-bold mb-4 text-center">{alert}</h3>
    </div>
  );
};

export default Alert;