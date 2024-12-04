import { Form, Formik } from 'formik';
import { toast } from 'react-toastify';

import MTListButton from '../../components/MTListButton';
import MTListInput from '../../components/MTListInput';
import taskValidationSchema from './taskValidationSchema';

const MTListMyList = () => {
  const weekday = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];
  // eslint-disable-next-line prettier/prettier
  const month = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  const handleFormikSubmit = (
    values: { title: string; description: string; date: string },
    { setSubmitting }: any,
  ) => {
    /* dispatch(actions.loginRequest({ email: values.email, password: values.password })); */
    console.log(values.title);
    console.log(values.description);
    console.log(values.date);
    toast.success(`Tarefa criada.`, { pauseOnFocusLoss: false, closeOnClick: true });
    setSubmitting(false);
  };
  return (
    <>
      <Formik
        initialValues={{
          title: '',
          description: '',
          date: new Date().toISOString().slice(0, 10),
        }}
        validationSchema={taskValidationSchema}
        validateOnMount={false}
        validateOnChange={false}
        validateOnBlur={true}
        onSubmit={handleFormikSubmit}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <Form
            className="flex gap-8 rounded-[10px] border-2 border-[#FFB573] px-6 py-3"
            onSubmit={handleSubmit}
          >
            <div className="flex w-full flex-col">
              <div>
                <label htmlFor="title" className="block pb-2 font-bold text-[#FFB573]">
                  Tarefa
                </label>
                <MTListInput
                  id="title"
                  customClassInput="border-b-0 indent-3 font-bold"
                  name="title"
                  placeholder="Título da tarefa"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                />
                {errors.title && touched.title && (
                  <p className="-mb-4 mt-1 text-[#FF7375]">{errors.title}</p>
                )}
              </div>
              <div>
                <label htmlFor="description" className="mt-3 block pb-2 font-bold text-[#FFB573]">
                  Descrição (opcional)
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="min-h-[70px] w-full rounded-[10px] border-2 border-t-0 border-[#FFB573] bg-transparent px-3 pt-1 font-bold placeholder-[#FFB573]/50"
                  placeholder="Adicionar uma descrição a uma tarefa traz clareza sobre o que precisa ser feito."
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                />
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div className="relative min-w-[200px]">
                <label htmlFor="date" className="block pb-2 font-bold text-[#FFB573]">
                  Para que dia?
                </label>
                <div className="h-10 rounded-[10px] border-2 border-[#FFB573] p-2">
                  <p>
                    {weekday[new Date(values.date).getDay()]},{' '}
                    {values.date.toString().split('-')[2]} de{' '}
                    {month[Number(values.date.toString().split('-')[1]) - 1]}.{' '}
                    {new Date(values.date).getFullYear()}
                  </p>
                </div>
                <MTListInput
                  type="date"
                  id="date"
                  name="date"
                  customClassContainer="!absolute h-full w-full top-0"
                  customClassInput="indent-3 border-0 text-[0px]  h-full"
                  placeholder="Adicionar uma descrição a uma tarefa traz clareza sobre o que precisa ser feito."
                  onChange={handleChange}
                  onBlur={handleBlur}
                  min="2024-03-12"
                />
              </div>
              <MTListButton className="mb-5" type="submit" disabled={isSubmitting}>
                ADICIONAR TAREFA
              </MTListButton>
            </div>
          </Form>
        )}
      </Formik>
      <hr className="my-8 border-[#FFB57350]" />
      <div className="flex">
        <MTListButton>TODAS</MTListButton>
        <MTListButton>ABERTAS</MTListButton>
        <MTListButton>CONCLUÍDAS</MTListButton>
        <MTListButton>ARQUIVADAS</MTListButton>
      </div>
      <div></div>
    </>
  );
};

export default MTListMyList;
