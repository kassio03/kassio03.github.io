import { Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import * as actions from '../../../../store/modules/mtlist/task';
import { RootReducerState } from '../../../../store/modules/rootReducer';
import MTListButton from '../../components/MTListButton';
import MTListInput from '../../components/MTListInput';
import MTListLoading from '../../components/MTListLoading';
import MTListTask from '../../components/MTListTask';
import { useEndpoint } from '../../contexts/EndpointContext';
import taskValidationSchema from './createTaskValidationSchema';

const MTListMyList = () => {
  const weekday = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  // eslint-disable-next-line prettier/prettier
  const month = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

  const [tasksByDay, setTasksByDay] = useState<{ [key: string]: actions.Task[] }>({ '': [] });
  const [filterTaskByState, setFilterTaskByState] = useState<actions.State | 'anyone'>('anyone');

  const dispatch = useDispatch();
  const result = useSelector((state: RootReducerState) => state.TaskReducer);

  const { setCurrentPage } = useEndpoint();

  const handleFormikSubmit = (
    { title, description, date }: { title: string; description: string; date: string },
    { setSubmitting }: any,
  ) => {
    dispatch(
      actions.createTask({
        title,
        description,
        date: new Date(date + 'T03:00:00.000Z').toISOString(),
      }),
    );
    /* Exibir toast somente quando não houver erros. */
    toast.success(`Tarefa criada.`, { pauseOnFocusLoss: false, closeOnClick: true });
    setSubmitting(false);
  };

  useEffect(() => {
    dispatch(actions.requestAllTasks());
  }, [dispatch, setCurrentPage]);
  useEffect(() => {
    const formattedData = result.tasks.reduce((acum: { [key: string]: actions.Task[] }, task) => {
      if (filterTaskByState !== 'anyone' && !(filterTaskByState === task.state)) return acum;
      const date = task.date ? task.date : false;
      if (date) {
        if (!acum[date]) {
          acum[date] = [];
        }
        acum[date].push(task);
      }
      return acum;
    }, {});
    const orderedFormattedData = Object.fromEntries(
      Object.entries(formattedData).sort(
        ([dateA], [dateB]) => new Date(dateA).getTime() - new Date(dateB).getTime(),
      ),
    );
    setTasksByDay(orderedFormattedData);
  }, [filterTaskByState, result.tasks]);
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
            className="flex flex-wrap justify-center gap-8 overflow-hidden rounded-[10px] border-2 border-[#FFB573] px-6 py-3 md:flex-nowrap"
            onSubmit={handleSubmit}
          >
            <div className="flex w-full flex-col">
              <div>
                <label htmlFor="title" className="block pb-2 font-bold text-[#FFB573]">
                  Tarefa
                </label>
                <MTListInput
                  id="title"
                  customClassInput="border-b-0 rounded-b-[0px] indent-3 font-bold"
                  name="title"
                  placeholder="Escreva um título que resuma sua tarefa."
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                />
                {errors.title && touched.title && (
                  <p className="-mb-2 mt-1 text-[#FF7375]">{errors.title}</p>
                )}
              </div>
              <div>
                <label htmlFor="description" className="mt-3 block pb-2 font-bold text-[#FFB573]">
                  Descrição (opcional)
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="min-h-[70px] w-full rounded-b-[10px] border-2 border-t-0 border-[#FFB573] bg-transparent px-3 pt-1 font-bold placeholder-[#FFB573]/50"
                  placeholder="Adicionar uma descrição traz clareza sobre o que precisa ser feito."
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                />
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div className="relative min-w-[200px]">
                <label
                  htmlFor="date"
                  className="ml-6 block pb-2 font-bold text-[#FFB573] min-[375px]:ml-auto"
                >
                  Para que dia?
                </label>
                <div className="h-10 scale-75 rounded-[10px] border-2 border-[#FFB573] p-2 min-[375px]:scale-100">
                  <p>
                    {weekday[new Date(values.date + 'T03:00:00.000Z').getDay()]},{' '}
                    {values.date.split('-')[2]} de{' '}
                    {month[Number(values.date.toString().split('-')[1]) - 1]}.{' '}
                    {new Date(values.date).getFullYear()}
                  </p>
                </div>
                <MTListInput
                  type="date"
                  id="date"
                  name="date"
                  customClassContainer="!absolute h-full w-full top-0  scale-75 min-[375px]:scale-100"
                  customClassInput="indent-3 !border-0 text-[0px]  h-full"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <MTListButton className="my-5" type="submit" disabled={isSubmitting}>
                ADICIONAR TAREFA
              </MTListButton>
            </div>
          </Form>
        )}
      </Formik>
      <hr className="my-8 border-[#FFB57350]" />
      <div className="flex flex-wrap gap-6 md:flex-nowrap">
        <MTListButton
          className={filterTaskByState === 'anyone' ? 'bg-[#FFB573]' : '!bg-[#6C6C6C]'}
          onClick={() => setFilterTaskByState('anyone')}
        >
          TODAS
        </MTListButton>
        <MTListButton
          className={filterTaskByState === 'opened' ? 'bg-[#FFB573]' : '!bg-[#6C6C6C]'}
          onClick={() => setFilterTaskByState('opened')}
        >
          ABERTAS
        </MTListButton>
        <MTListButton
          className={filterTaskByState === 'completed' ? 'bg-[#FFB573]' : '!bg-[#6C6C6C]'}
          onClick={() => setFilterTaskByState('completed')}
        >
          CONCLUÍDAS
        </MTListButton>
        <MTListButton
          className={filterTaskByState === 'archived' ? 'bg-[#FFB573]' : '!bg-[#6C6C6C]'}
          onClick={() => setFilterTaskByState('archived')}
        >
          ARQUIVADAS
        </MTListButton>
      </div>
      {result.loading && <MTListLoading className="relative mt-8 bg-transparent" />}
      <div className="">
        {Object.keys(tasksByDay).map(date => {
          return (
            <div key={date}>
              <h2 className="mt-6 font-bold">
                {weekday[new Date(date).getDay()]}, {new Date(date).getDate()} de{' '}
                {month[new Date(date).getMonth()]}. de {new Date(date).getFullYear()}{' '}
              </h2>
              <ul>
                {tasksByDay[date].map(task => (
                  <MTListTask
                    key={task.id}
                    taskId={task.id}
                    title={task.title}
                    description={task.description}
                    state={task.state}
                  />
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MTListMyList;
