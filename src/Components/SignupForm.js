import React from "react";
import { Formik, Form, Field } from "formik";
import { SignupValidation } from "./SignupValidation";
import "./SignupForm.css";

const initialValues = {
  name: "",
  email: "",
  password: "",
  cpassword: "",
};

const SignupForm = () => {
  return (
    <div className="Signup">
      <h1>Form Handling and Validation using Formik and Yup</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupValidation}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          alert(JSON.stringify(values, null, 2));
          resetForm();
        }}
      >
        {({ errors }) => (
          <Form>
            <label htmlFor="name">Name</label><br />
            <Field className="field" type="text" name="name" /><br />
            {errors.name && <small>{errors.name}</small>}<br />

            <label htmlFor="email">Email</label><br />
            <Field className="field" type="email" name="email" /><br />
            {errors.email && <small>{errors.email}</small>}<br />

            <label htmlFor="password">Password</label><br />
            <Field className="field" type="password" name="password" /><br />
            {errors.password && <small>{errors.password}</small>}<br />

            <label htmlFor="cpassword">Confirm Password</label><br />
            <Field className="field" type="password" name="cpassword" /><br />
            {errors.cpassword && <small>{errors.cpassword}</small>}<br />

            <button type="submit">Sign Up</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignupForm;
