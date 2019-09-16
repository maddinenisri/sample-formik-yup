import React from "react";
import {
  CheckboxGroup,
  Checkbox,
  RadioButtonGroup,
  RadioButton
} from "./common";
import { Formik, Field } from "formik";
import * as Yup from "yup";

const MultiFormFieldsSchema = Yup.object().shape({
  radioGroup: Yup.string().required("A radio option is required"),
  checkboxGroup: Yup.array().required("At least one checkbox is required")
});

const MultiFormFields = props => (
  <div className="container">
    <div className="row mb-5">
      <div className="col-lg-12 text-center">
        <h1 className="mt-5">Register Form</h1>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12">
        <Formik
          initialValues={{
            radioGroup: "",
            checkboxGroup: []
          }}
          validationSchema={MultiFormFieldsSchema}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              console.log(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 500);
          }}
          render={({
            handleSubmit,
            setFieldValue,
            setFieldTouched,
            values,
            errors,
            touched,
            isSubmitting
          }) => (
            <form onSubmit={handleSubmit}>
              <h2>Checkbox group</h2>
              <CheckboxGroup
                id="checkboxGroup"
                label="Which of these?"
                value={values.checkboxGroup}
                error={errors.checkboxGroup}
                touched={touched.checkboxGroup}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
              >
                <Field
                  component={Checkbox}
                  name="checkboxGroup"
                  id="checkbox1"
                  label="Option 1"
                />
                <Field
                  component={Checkbox}
                  name="checkboxGroup"
                  id="checkbox2"
                  label="Option 2"
                />
                <Field
                  component={Checkbox}
                  name="checkboxGroup"
                  id="checkbox3"
                  label="Option 3"
                />
              </CheckboxGroup>

              <h2>Radio group</h2>
              <RadioButtonGroup
                id="radioGroup"
                label="One of these please"
                value={values.radioGroup}
                error={errors.radioGroup}
                touched={touched.radioGroup}
              >
                <Field
                  component={RadioButton}
                  name="radioGroup"
                  id="radioOption1"
                  label="Choose this option"
                />
                <Field
                  component={RadioButton}
                  name="radioGroup"
                  id="radioOption2"
                  label="Or choose this one"
                />
              </RadioButtonGroup>

              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </form>
          )}
        />
      </div>
    </div>
  </div>
);

export default MultiFormFields;
