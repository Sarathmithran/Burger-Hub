import * as yup from 'yup';

// Reusable password validation
const passwordValidation = yup
  .string()
  .required('Password is required')
  .min(8, 'Password must be at least 8 characters')
  .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
  .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .matches(/[0-9]/, 'Password must contain at least one number')
  .matches(
    /[!@#$%^&*(),.?":{}|<>]/,
    'Password must contain at least one special character'
  );

export const loginSchema = yup.object().shape({
  email: yup.string().required('Email is required').email('Invalid email'),
  password: passwordValidation,
});

export const registerSchema = yup.object().shape({
  name: yup.string().required('Name is required').min(3, 'Name must be at least 3 characters'),
  email: yup.string().required('Email is required').email('Invalid email'),
  password: passwordValidation,
  confirmPassword: yup
    .string()
    .required('Confirm Password is required')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
    agree: yup.boolean().oneOf([true], 'You must agree to continue'),
});
