import React from "react";
import { Formik, Form, FieldArray, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.css";

const handleSubmit = (values, actions) => {
  console.log(values, actions.props);
  actions.setSubmitting(false);
  return;
};

let vehicles = ["car", "motorcycle", "airplane", "rocket"];

const MultiCheckbox = () => (
  <div className="container">
    <div className="row mb-5">
      <div className="col-lg-12 text-center">
        <h1 className="mt-5">Multi Array Form</h1>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12">
        <Formik
          initialValues={{ vehicles: vehicles }}
          validate={values => {
            let errors = [];
            if (!values.vehicles.length)
              errors.vehicles = "At least one vehicle is required";
            return errors;
          }}
          onSubmit={handleSubmit}
          render={formProps => (
            <Form>
              <FieldArray
                name="vehicles"
                render={arrayHelpers => (
                  <div>
                    {formProps.values.vehicles.map((vehicle, index) => (
                      <div key={index}>
                        <Field name={`vehicles.${index}`} />
                        <button
                          type="button"
                          onClick={() => arrayHelpers.remove(index)}
                        >
                          Remove
                        </button>
                        <button
                          type="button"
                          onClick={() => arrayHelpers.insert(index, "")}
                        >
                          Add Vehicle at this index
                        </button>
                      </div>
                    ))}
                    <button type="button" onClick={() => arrayHelpers.push("")}>
                      Add Vehicle
                    </button>
                  </div>
                )}
              />
            </Form>
          )}
        />
      </div>
    </div>
  </div>
);

export default MultiCheckbox;
