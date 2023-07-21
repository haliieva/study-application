import * as Yup from 'yup';

export const signInReviewSchema = Yup.object({
  password: Yup.string().required('Password is required'),
  email: Yup.string().required('Email is required').email('Email is invalid'),
});
