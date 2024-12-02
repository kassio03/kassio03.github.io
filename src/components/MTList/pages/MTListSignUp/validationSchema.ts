import * as Yup from 'yup';

const signUpValidationSchema = Yup.object({
  name: Yup.string().required('O nome é obrigatório.'),
  email: Yup.string().email('Endereço de email inválido.').required('O email é obrigatório.'),
  password: Yup.string()
    .min(8, 'Deve ter no mínimo 8 caracteres.')
    .required('É necessário uma senha.'),
  repeatPassword: Yup.string()
    .min(8, 'Deve ter no mínimo 8 caracteres.')
    .required('Repita a senha.'),
  terms: Yup.bool().oneOf([true], 'Deve-se aceitar os termos.'),
});

export default signUpValidationSchema;
