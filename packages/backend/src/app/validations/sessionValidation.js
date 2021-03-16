import * as Yup from 'yup';

const sessionSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

export default sessionSchema;
