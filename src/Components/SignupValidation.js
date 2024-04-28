import * as Yup from 'yup'

export const SignupValidation = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Please enter your name'),
    email: Yup.string()
        .email('Invalid email')
        .required('Please enter your email'),
    password: Yup.string()
        .min(5, 'Too Short!')
        .max(10, 'Too Long!')
        .required('Please enter your password'),
    cpassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Please confirm your password') 
});