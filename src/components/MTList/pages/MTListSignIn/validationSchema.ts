import * as Yup from 'yup';

const signInValidationSchema = Yup.object({
  email: Yup.string().email('Endereço de email inválido.'),
  password: Yup.string().min(8, 'Deve ter no mínimo 8 caracteres.'),
});

export default signInValidationSchema;
