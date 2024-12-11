import 'react-toastify/dist/ReactToastify.css';

import { Form, Formik } from 'formik';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as actions from '../../../../store/modules/mtlist/auth';
import { RootReducerState } from '../../../../store/modules/rootReducer';
import EmailSvg from '../../assets/email.svg?react';
import LockSvg from '../../assets/lock.svg?react';
import SignInSvg from '../../assets/sign-in.svg?react';
import MTListButton from '../../components/MTListButton';
import MTListCheckbox from '../../components/MTListCheckbox';
import MTListInput from '../../components/MTListInput';
import { Pages, useEndpoint } from '../../contexts/EndpointContext';
import signInValidationSchema from './validationSchema';

const MTListSignIn = () => {
  const dispatch = useDispatch();
  const result = useSelector((state: RootReducerState) => state.AuthReducer);
  const { setCurrentPage } = useEndpoint();

  const handleFormikSubmit = (
    values: { email: string; password: string },
    { setSubmitting }: any,
  ) => {
    dispatch(actions.loginRequest({ email: values.email, password: values.password }));
    setSubmitting(false);
  };

  useEffect(() => {
    if (result.user) setCurrentPage(Pages.myList);
  }, [result.user, setCurrentPage]);
  return (
    <motion.div
      className="mt-8 flex"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex flex-shrink flex-grow items-center justify-center">
        <Formik
          initialValues={{
            email: '',
            password: '',
            keepConnected: true,
          }}
          validationSchema={signInValidationSchema}
          validateOnMount={false}
          validateOnChange={false}
          validateOnBlur={true}
          className="w-full max-w-[352px]"
          onSubmit={handleFormikSubmit}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
            <Form className="w-full max-w-[352px]" onSubmit={handleSubmit}>
              <MTListInput
                Svg={EmailSvg}
                name="email"
                type="email"
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && (
                <p className="-mb-4 mt-1 text-[#FF7375]">{errors.email}</p>
              )}
              <MTListInput
                customClassContainer="mt-6"
                Svg={LockSvg}
                name="password"
                type="password"
                placeholder="Senha"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && (
                <p className="-mb-4 mt-1 text-[#FF7375]">{errors.password}</p>
              )}
              <div className="mt-6 flex hidden justify-between">
                <div className="flex items-center">
                  <MTListCheckbox
                    id="keepConnected"
                    defaultChecked
                    name="keepConnected"
                    onClick={handleChange}
                  />
                  <label className="-ml-5 cursor-pointer pl-7" htmlFor="keepConnected">
                    Manter conectado
                  </label>
                </div>
                <a className="cursor-pointer font-bold text-[#FFB573] underline underline-offset-4">
                  Esqueceu a senha?
                </a>
              </div>
              <p className="mb-8 mt-3">
                Não possui uma conta?{' '}
                <a
                  className="cursor-pointer font-bold text-[#FFB573] underline underline-offset-4"
                  onClick={() => setCurrentPage(Pages.signUp)}
                >
                  Crie uma!
                </a>
              </p>
              <MTListButton type="submit" disabled={isSubmitting}>
                ENTRAR
              </MTListButton>
            </Form>
          )}
        </Formik>
      </div>
      <div className="hidden flex-grow basis-[200px] md:block min-[1024px]:hidden min-[1192px]:block">
        <SignInSvg className="ml-auto max-h-[350px]" />
      </div>
    </motion.div>
  );
};

export default MTListSignIn;
