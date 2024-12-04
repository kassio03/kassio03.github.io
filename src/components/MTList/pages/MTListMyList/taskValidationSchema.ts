import * as Yup from 'yup';

const taskValidationSchema = Yup.object({
  title: Yup.string().required('Um título é necessário.'),
  description: Yup.string(),
  date: Yup.string().required(),
});

export default taskValidationSchema;
