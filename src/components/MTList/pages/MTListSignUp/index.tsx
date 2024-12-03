import { Form, Formik } from 'formik';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { store } from '../../../../store/configureStore';
import * as actions from '../../../../store/modules/mtlist/user';
import EmailSvg from '../../assets/email.svg?react';
import LockSvg from '../../assets/lock.svg?react';
import NameSvg from '../../assets/name.svg?react';
import SignUpvg from '../../assets/sign-up.svg?react';
import MTListButton from '../../components/MTListButton';
import MTListCheckbox from '../../components/MTListCheckbox';
import MTListDialog from '../../components/MTListDialog';
import MTListInput from '../../components/MTListInput';
import { Pages, useEndpoint } from '../../contexts/EndpointContext';
import signUpValidationSchema from './validationSchema';

const MTListSignUp = () => {
  const dispatch = useDispatch();

  const dialogRef = useRef(null);
  const [dialog, setDialog] = useState(false);

  const { setCurrentPage } = useEndpoint();

  const handleFormikSubmit = async (
    {
      name,
      email,
      password,
      repeatPassword,
    }: {
      name: string;
      email: string;
      password: string;
      repeatPassword: string;
    },
    { setSubmitting }: any,
  ) => {
    if (password === repeatPassword) {
      dispatch(actions.registerRequest({ name, email, password }));
      const unsubscribe = store.subscribe(() => {
        const state = store.getState().UserReducer;
        if (state.error) toast.error('Erro ao realizar cadastro. Tente novamente.');
        if (!state.loading) {
          toast.success('Cadastro realizado com sucesso!', {
            position: 'bottom-left',
            hideProgressBar: true,
            closeOnClick: true,
          });
          toast.info('Redirecionando para login', {
            delay: 2000,
            autoClose: 3000,
            onClose: () => setCurrentPage(Pages.signIn),
            position: 'bottom-left',
          });
          setSubmitting(false);
          unsubscribe();
        }
      });
    } else {
      toast.error('Senhas não coincidem.', {
        position: 'bottom-left',
        hideProgressBar: true,
        closeOnClick: true,
      });
    }
  };
  return (
    <motion.div
      className="mt-8 flex"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.2 }}
    >
      <div className="hidden flex-grow basis-[200px] md:block min-[1024px]:hidden min-[1192px]:block">
        <SignUpvg className="max-h-[350px]" />
      </div>
      <div className="flex flex-shrink flex-grow items-center justify-center">
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            repeatPassword: '',
            terms: false,
          }}
          validationSchema={signUpValidationSchema}
          validateOnMount={false}
          validateOnChange={false}
          validateOnBlur={true}
          className="w-full max-w-[352px]"
          onSubmit={handleFormikSubmit}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
            <Form className="w-full max-w-[352px]" onSubmit={handleSubmit}>
              <MTListInput
                name="name"
                Svg={NameSvg}
                placeholder="Nome"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errors.name && touched.name && (
                <p className="-mb-4 mt-1 text-[#FF7375]">{errors.name}</p>
              )}
              <MTListInput
                customClassContainer="mt-6"
                name="email"
                Svg={EmailSvg}
                placeholder="Email"
                type="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && (
                <p className="-mb-4 mt-1 text-[#FF7375]">{errors.email}</p>
              )}
              <MTListInput
                name="password"
                customClassContainer="mt-6"
                Svg={LockSvg}
                placeholder="Senha"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && (
                <p className="-mb-4 mt-1 text-[#FF7375]">{errors.password}</p>
              )}
              <MTListInput
                name="repeatPassword"
                customClassContainer="mt-6"
                Svg={LockSvg}
                placeholder="Repetir senha"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.repeatPassword}
              />
              {errors.repeatPassword && touched.repeatPassword && (
                <p className="-mb-4 mt-1 text-[#FF7375]">{errors.repeatPassword}</p>
              )}
              <div className="mt-6 flex items-center">
                <MTListCheckbox id="terms" name="terms" onClick={handleChange} />
                <label className="-ml-5 cursor-pointer pl-7 font-bold" htmlFor="terms">
                  Li e concordo com os{' '}
                  <a
                    className="cursor-pointer text-[#FFB573] underline underline-offset-4"
                    onClick={e => {
                      e.preventDefault();
                      setDialog(true);
                    }}
                  >
                    termos de uso.
                  </a>
                </label>
              </div>
              {errors.terms && touched.terms && (
                <p className="-mb-4 mt-1 text-[#FF7375]">{errors.terms}</p>
              )}
              <MTListButton className="mt-8" type="submit" disabled={isSubmitting}>
                CRIAR CONTA
              </MTListButton>
            </Form>
          )}
        </Formik>
      </div>
      {dialog && (
        <MTListDialog ref={dialogRef} setDialog={setDialog} closeButton>
          <h2 className="mt-2 font-bold text-[#FFB573]">Termos de Uso</h2>
          <p>
            Bem-vindo ao My Task List! Antes de continuar, por favor, leia atentamente os seguintes
            Termos de Uso.
          </p>
          <h3 className="mt-2 font-bold text-[#FFB573]">Uso Geral</h3>
          <p>
            Este aplicativo foi desenvolvido para fins de demonstração e aprendizado. As
            funcionalidades apresentadas têm como objetivo destacar habilidades técnicas e não
            representam um produto final ou comercial.
          </p>
        </MTListDialog>
      )}
    </motion.div>
  );
};

export default MTListSignUp;
