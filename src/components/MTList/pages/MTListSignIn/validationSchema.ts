import * as Yup from 'yup';

const signInValidationSchema = Yup.object({
  email: Yup.string().email('Endereço de email inválido.').required('O email é obrigatório.'),
  password: Yup.string()
    .min(8, 'Deve ter no mínimo 8 caracteres.')
    .required('É necessário uma senha.'),
});

export default signInValidationSchema;
