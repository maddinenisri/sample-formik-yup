import React from "react";
import classNames from "classnames";
import { ErrorMessage } from "formik";
import { combineClassNames } from "./Util";

const Checkbox = ({ label, field, form }) => {
  return (
    <div className="form-group">
      <div
        className={combineClassNames(
          field,
          form.errors,
          form.touched,
          "form-check form-control"
        )}
      >
        <label htmlFor={field.name} className="form-check-label">
          <input
            name={field.name}
            type="checkbox"
            value={form.values[field.name]}
            checked={form.values[field.name]}
            onChange={form.handleChange}
            className={classNames("form-check-input")}
          />
          {label}
        </label>
      </div>
      <ErrorMessage
        component="div"
        name={field.name}
        className="invalid-feedback"
      />
    </div>
  );
};

export default Checkbox;
