import React from "react";
import classNames from "classnames";
import InputFeedback from "./InputFeedback";

const RadioButtonGroup = ({
  value,
  error,
  touched,
  id,
  label,
  className,
  children
}) => {
  const classes = classNames(
    "form-control h-100",
    {
      "is-success": value || (!error && touched),
      "is-invalid": !!error && touched
    },
    className
  );
  return (
    <div className="form-group h-100">
      <div className={classes}>
        <label>{label}</label>
        {children}
      </div>
      {touched && <InputFeedback error={error} />}
    </div>
  );
};

export default RadioButtonGroup;
