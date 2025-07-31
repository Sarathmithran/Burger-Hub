import * as yup from 'yup';

export const profileSchema = yup.object().shape({
  email: yup.string().required('Email is required').email('Invalid email'),
  fullName: yup.string().required('Full Name is required').min(3, 'Full Name must be at least 3 characters'),
  phone: yup.string().required('Phone Number is required').min(10, 'Phone Number must be at least 10 characters'),
  address: yup.string().required('Address is required')
});