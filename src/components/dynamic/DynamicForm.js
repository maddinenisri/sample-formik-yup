import React from "react";
import { Formik, Form, Field } from "formik";
import { TextField, SelectBox, Checkbox } from "../common";

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
    <Field
      key={field.name}
      name={field.name}
      render={innerProps => <Checkbox label={field.label} {...innerProps} />}
    />
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
    <Field
      key={field.name}
      name={field.name}
      render={innerProps => (
        <SelectBox
          label={field.label}
          placeholder={field.placeholder}
          options={selectOptions}
          {...innerProps}
        />
      )}
    />
  );
};

const renderFields = (fields, form) => {
  return fields.map(field => {
    if (field.type === "select") {
      return renderSelectField(field, form);
    }

    if (field.type === "checkbox") {
      return renderCheckBox(field, form);
    }
    return (
      <Field
        key={field.name}
        name={field.name}
        render={innerProps => (
          <TextField
            label={field.label}
            name={field.name}
            placeholder={field.placeholder}
            {...innerProps}
          />
        )}
      />
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
