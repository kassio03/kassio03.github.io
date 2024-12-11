import { Formik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form } from 'react-router-dom';

import * as actions from '../../../../store/modules/mtlist/task';
import Archive from '../../assets/archive.svg?react';
import Close from '../../assets/close.svg?react';
import Delete from '../../assets/delete.svg?react';
import Done from '../../assets/done.svg?react';
import Edit from '../../assets/edit.svg?react';
import MTListButton from '../MTListButton';
import MTListTextarea from '../MTListTextarea';
import taskValidationSchema from './taskValidationSchema';

interface MTListTaskProps {
  taskId: string;
  title: string;
  description?: string;
  state: actions.State;
}

const MTListTask = ({ taskId, title, description, state }: MTListTaskProps) => {
  const dispatch = useDispatch();

  const [canEdit, setCanEdit] = useState(true);

  const borderColor: { [key: string]: string } = {
    opened: 'border-[#FFB573]',
    archived: 'border-[#A4C0CA]',
    completed: 'border-[#88E475]',
  };
  const textColor: { [key: string]: string } = {
    opened: 'text-[#FFB573]',
    archived: 'text-[#A4C0CA]',
    completed: 'text-[#88E475]',
  };
  const lineThrough = state === 'completed' ? 'line-through' : 'no-underline';
  const editActive = !canEdit ? 'border-l-2 border-b-2 border-[#FFDE73] resize-y' : 'resize-none';

  const canEditTask = () => {
    setCanEdit(pv => !pv);
  };
  const saveEditedTask = (values: { title: string; description: string | undefined }) => {
    dispatch(
      actions.updateTask({
        id: taskId,
        state,
        title: values.title,
        description: values.description,
      }),
    );
    canEditTask();
  };
  const completeTask = () => {
    dispatch(actions.updateTask({ id: taskId, state: 'completed' }));
  };
  const archiveTask = () => {
    dispatch(actions.updateTask({ id: taskId, state: 'archived' }));
  };
  const deleteTask = () => {
    dispatch(actions.deleteTask({ id: taskId }));
  };
  const reopenTask = () => {
    dispatch(actions.updateTask({ id: taskId, state: 'opened' }));
  };
  return (
    <li
      className={`${!canEdit ? 'border-[#FFDE73]' : borderColor[state]} my-3 flex flex-col justify-between gap-3 rounded-[10px] border-2 py-3 pl-3 pr-3 md:flex-row md:gap-10 md:pl-9 md:pr-6`}
    >
      <div className="w-full">
        <Formik
          initialValues={{
            title,
            description,
          }}
          validationSchema={taskValidationSchema}
          validateOnMount={false}
          validateOnChange={false}
          validateOnBlur={true}
          onSubmit={saveEditedTask}
        >
          {({ values, handleChange, handleBlur, handleSubmit }) => (
            <Form id={`${'form-' + taskId}`} className="h-full w-full" onSubmit={handleSubmit}>
              <MTListTextarea
                className={`${textColor[state]} ${lineThrough} ${editActive} w-full bg-transparent text-base font-bold`}
                name="title"
                disabled={canEdit}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
              <MTListTextarea
                className={`${lineThrough} ${editActive} min-h-[24px] w-full rounded-es-[10px] bg-transparent`}
                name="description"
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={canEdit}
                value={values.description}
              />
            </Form>
          )}
        </Formik>
      </div>
      <div className="flex flex-col gap-6">
        <div className="mx-auto flex flex-wrap items-center justify-center gap-3 min-[375px]:flex-nowrap">
          <button
            className="rounded-[10px] border-2 border-[#FFDE73] bg-[#6C6C6C] px-3 py-2 hover:bg-[#5c5c5c]"
            onClick={canEditTask}
          >
            {canEdit ? <Edit /> : <Close />}
          </button>

          {state !== 'archived' ? (
            <button
              className="rounded-[10px] border-2 border-[#A4C0CA] bg-[#6C6C6C] px-3 py-2 hover:bg-[#5c5c5c]"
              onClick={archiveTask}
            >
              <Archive />
            </button>
          ) : (
            <button
              className="rounded-[10px] border-2 border-[#88E475] bg-[#6C6C6C] px-3 py-2 hover:bg-[#5c5c5c]"
              onClick={completeTask}
            >
              <Done width={26} height={24} fill="#88E475" />
            </button>
          )}
          <div className="group relative">
            <button
              className="rounded-[10px] border-2 border-[#FF7375] bg-[#6C6C6C] px-3 py-2 hover:bg-[#5c5c5c]"
              onDoubleClick={deleteTask}
            >
              <Delete />
            </button>
            <p className="invisible absolute right-0 mt-1 w-60 rounded-[5px] bg-black/80 p-1 text-center delay-500 group-hover:visible">
              Clique duas vezes para apagar.
            </p>
          </div>
        </div>
        <div className="mt-auto">
          {state === 'opened' && canEdit && (
            <MTListButton className="bg-[#88E475] hover:bg-[#78ca67]" onClick={completeTask}>
              CONCLUIR TAREFA
            </MTListButton>
          )}
          {state !== 'opened' && canEdit && (
            <MTListButton onClick={reopenTask}>REABRIR TAREFA</MTListButton>
          )}
          {!canEdit && (
            <MTListButton
              type="submit"
              className="bg-[#eacd70] hover:bg-[#d5bb67]"
              form={`${'form-' + taskId}`}
            >
              SALVAR ALTERAÇÕES
            </MTListButton>
          )}
        </div>
      </div>
    </li>
  );
};

export default MTListTask;
