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

const renderFields = (fields, values, errors, touched) => {
  return fields.map(field => {
    const classes = classNames("form-control", {
      "is-success": field.value || (!errors[field.name] && touched[field.name]),
      "is-invalid": errors[field.name] && touched[field.name]
    });
    return (
      <div className="form-group" key={field.name}>
        <label htmlFor={field.name}>{field.label}</label>
        <Field
          type={field.type}
          name={field.name}
          value={values[field.name]}
          error={errors[field.name]}
          touched={touched[field.name]}
          placeholder={field.placeholder}
          className={classes}
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
            render={({ values, errors, touched, isSubmitting }) => (
              <Form>
                {renderFields(fields, values, errors, touched)}
                <button type="submit" disabled={isSubmitting}>
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
