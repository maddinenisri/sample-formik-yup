import React from "react";
import { ErrorMessage } from "formik";
import { combineClassNames } from "./Util";

const TextField = ({ label, placeholder, field, form }) => (
  <div className="form-group" key={field.name}>
    <label htmlFor={field.name}>{label}</label>
    <input
      type="text"
      name={field.name}
      placeholder={placeholder}
      {...field}
      className={combineClassNames(
        field,
        form.errors,
        form.touched,
        "form-control"
      )}
    />
    <ErrorMessage
      component="div"
      name={field.name}
      className="invalid-feedback"
    />
  </div>
);

export default TextField;
