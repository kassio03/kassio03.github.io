import * as Yup from 'yup';

const createTaskValidationSchema = Yup.object({
  title: Yup.string().required('Um título é necessário.'),
  description: Yup.string(),
});

export default createTaskValidationSchema;
