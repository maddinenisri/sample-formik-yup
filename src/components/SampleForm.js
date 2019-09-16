import React from "react";
import DynamicForm from "./dynamic/DynamicForm";
import * as Yup from "yup";

const alpha = /^[a-zA-Z_]+( [a-zA-Z_]+)*$/;

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(alpha, { message: "Enter Valid Name", excludeEmptyString: true })
    .required("First Name is required field")
    .max(35),
  lastName: Yup.string()
    .matches(alpha, { message: "Enter Valid Name", excludeEmptyString: true })
    .required("Last Name is required field")
    .max(35),
  address: Yup.string().required("Address is required field"),
  city: Yup.string()
    .matches(alpha, { message: "Enter Valid Name", excludeEmptyString: true })
    .required("City is required field"),
  occupation: Yup.string()
    .test("county", "cannot be empty", value => value !== "Please Select")
    .required("required"),
  terms: Yup.string()
    .test("terms", "you must agree to terms", value => value !== false)
    .required("required")
});

const fields = [
  {
    label: "First Name",
    type: "input",
    name: "firstName",
    placeholder: "First Name"
  },
  {
    label: "Last Name",
    type: "input",
    name: "lastName",
    placeholder: "Last Name"
  },
  { label: "City", type: "input", name: "city", placeholder: "City" },
  { label: "Address", type: "input", name: "address", placeholder: "Address" },
  {
    label: "Occupation",
    type: "select",
    data: ["Teacher", "Software Engineer", "Doctor", "Lawyer"],
    name: "occupation",
    value: "Please Select"
  },
  {
    label: "Agree to Terms & Conditions",
    type: "checkbox",
    name: "terms",
    value: false
  }
];

const SampleForm = props => (
  <DynamicForm fields={fields} validationSchema={validationSchema} />
);

export default SampleForm;
