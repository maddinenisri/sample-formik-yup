import React from "react";
import { Formik, Form, FieldArray, Field, ErrorMessage } from "formik";
import classNames from "classnames";

const handleSubmit = (values, actions) => {
  setTimeout(() => {
    console.log(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
  }, 500);
};

const getInitialValues = fields => {
  const initialValues = {};
  fields.forEach(field => {
    if (!initialValues[field.name]) {
      initialValues[field.name] = field.value;
    }
  });
  return initialValues;
};

const renderCheckBox = (field, form) => {
  return (
    <div className="form-group" key={field.name}>
      <div className={combineClassNames(field, form.errors, form.touched, "form-check form-control")}>
        <label htmlFor={field.name} className="form-check-label">
          <Field
            name={field.name}
            id={field.name}
            type="checkbox"
            error={form.errors[field.name]}
            value={form.values[field.name]}
            checked={form.values[field.name]}
            className={combineClassNames(field, form.errors, form.touched, "form-check-input")}
          />
          {field.label}
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

const renderSelectField = (field, form) => {
  const defaultOption = (
    <option key="default" value="Please Select">
      Please Select
    </option>
  );
  const options = field.data.map(i => (
    <option key={i} value={i}>
      {" "}
      {i}{" "}
    </option>
  ));
  const selectOptions = [defaultOption, ...options];
  return (
    <div className="form-group" key={field.name}>
      <label htmlFor={field.name}>{field.label}</label>
      <Field
        component="select"
        name={field.name}
        value={form.values[field.name]}
        error={form.errors[field.name]}
        placeholder={field.placeholder}
        className={combineClassNames(field, form.errors, form.touched, "form-control")}
      >
        {selectOptions}
      </Field>
      <ErrorMessage
        component="div"
        name={field.name}
        className="invalid-feedback"
      />
    </div>
  );
};

const combineClassNames = (field, errors, touched, baseClassNames) =>
  classNames(baseClassNames, {
    "is-success": field.value || (!errors[field.name] && touched[field.name]),
    "is-invalid": errors[field.name] && touched[field.name]
  });

const renderFields = (fields, form) => {
  return fields.map(field => {
    if (field.type === "select") {
      return renderSelectField(field, form);
    }

    if (field.type === "checkbox") {
      return renderCheckBox(field, form);
    }
    return (
      <div className="form-group" key={field.name}>
        <label htmlFor={field.name}>{field.label}</label>
        <Field
          type={field.type}
          name={field.name}
          value={form.values[field.name]}
          error={form.errors[field.name]}
          placeholder={field.placeholder}
          className={combineClassNames(field, form.errors, form.touched, "form-control")}
        />
        <ErrorMessage
          component="div"
          name={field.name}
          className="invalid-feedback"
        />
      </div>
    );
  });
};

const DynamicForm = ({ fields, validationSchema }) => {
  return (
    <div className="container">
      <div className="row mb-5">
        <div className="col-lg-12 text-center">
          <h1 className="mt-5">Register Form</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <Formik
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            initialValues={getInitialValues(fields)}
            render={form => (
              <Form>
                {renderFields(fields, form)}
                <button type="submit" disabled={form.isSubmitting}>
                  Submit
                </button>
              </Form>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default DynamicForm;
