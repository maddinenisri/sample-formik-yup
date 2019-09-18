import React from "react";
import { ErrorMessage } from "formik";
import { combineClassNames } from "./Util";

const SelectBox = ({label, placeholder, field, form, options}) => (
    <div className="form-group" key={field.name}>
    <label htmlFor={field.name}>{label}</label>
    <select
      name={field.name}
      value={form.values[field.name]}
      error={form.errors[field.name]}
      placeholder={placeholder}
      onChange={form.handleChange}
      onBlur={form.handleBlur}
      className={combineClassNames(
        field,
        form.errors,
        form.touched,
        "form-control"
      )}
    >
      {options}
    </select>
    <ErrorMessage
      component="div"
      name={field.name}
      className="invalid-feedback"
    />
  </div>

);

export default SelectBox;