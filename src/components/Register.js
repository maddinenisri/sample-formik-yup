import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.css";

const RegisterSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  password: Yup.string()
    .min(3, "Password must be at least 3 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required")
});

const RegisterForm = props => (
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
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: ""
          }}
          validationSchema={RegisterSchema}
          onSubmit={(values, actions) => {
            console.log(values, actions);
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }}
          render = {({ errors, status, touched, isSubmitting }) => (
            <Form>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <Field
                  type="text"
                  name="firstName"
                  placeholder="Enter First Name"
                  className={`form-control ${
                    touched.firstName && errors.firstName ? "is-invalid" : ""
                  }`}
                />
                <ErrorMessage
                  component="div"
                  name="firstName"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <Field
                  type="text"
                  name="lastName"
                  placeholder="Enter Last name"
                  className={`form-control ${
                    touched.lastName && errors.lastName ? "is-invalid" : ""
                  }`}
                />
                <ErrorMessage
                  component="div"
                  name="lastName"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  className={`form-control ${
                    touched.email && errors.email ? "is-invalid" : ""
                  }`}
                />
                <ErrorMessage
                  component="div"
                  name="email"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  className={`form-control ${
                    touched.password && errors.password ? "is-invalid" : ""
                  }`}
                />
                <ErrorMessage
                  component="div"
                  name="password"
                  className="invalid-feedback"
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <Field
                  type="password"
                  name="confirmPassword"
                  placeholder="Enter password"
                  className={`form-control ${
                    touched.confirmPassword && errors.confirmPassword
                      ? "is-invalid"
                      : ""
                  }`}
                />
                <ErrorMessage
                  component="div"
                  name="confirmPassword"
                  className="invalid-feedback"
                />
              </div>

              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-primary mr-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Please wait..." : "Submit"}
                </button>
                <button type="reset" className="btn btn-secondary">
                  Reset
                </button>
              </div>
            </Form>
          )}
        />
      </div>
    </div>
  </div>
);

export default RegisterForm;
