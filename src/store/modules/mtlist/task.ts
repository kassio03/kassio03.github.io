import axios, { AxiosResponse } from 'axios';
import localStorage from 'redux-persist/lib/storage';
import * as Eff from 'redux-saga/effects';
import { action as taction, PayloadAction } from 'typesafe-actions';

export enum TaskTypes {
  REQUEST_ALL_TASKS = '@MTLIST/REQUEST_ALL_TASKS',
  REQUEST_SUCCESS = '@MTLIST/REQUEST_SUCCESS',
  REQUEST_FAILURE = '@MTLIST/REQUEST_FAILURE',
  CREATE_TASK = '@MTLIST/CREATE_TASK',
  UPDATE_TASK = '@MTLIST/UPDATE_TASK',
  DELETE_TASK = '@MTLIST/DELETE_TASK',
}

export type State = 'opened' | 'archived' | 'completed';

export interface createTaskDto {
  title: string;
  description?: string;
  date: string;
}

export interface updateTaskDto extends Partial<Omit<createTaskDto, 'date'>> {
  id: string;
  state: State;
}

export interface Task extends createTaskDto {
  state: State;
  id: string;
  authorId: string;
  createdAt: string;
}

export interface TaskState {
  readonly tasks: Task[];
  readonly loading: boolean;
  readonly error: boolean;
}

const INITIAL_STATE: TaskState = {
  tasks: [],
  loading: false,
  error: false,
};

const reducer = (
  state = INITIAL_STATE,
  action: PayloadAction<TaskTypes, { tasks: Task[] }>,
): typeof INITIAL_STATE => {
  switch (action.type) {
    case TaskTypes.REQUEST_ALL_TASKS: {
      return {
        ...state,
        tasks: [],
        loading: true,
        error: false,
      };
    }
    case TaskTypes.REQUEST_SUCCESS: {
      return {
        ...state,
        tasks: action.payload.tasks,
        loading: false,
        error: false,
      };
    }
    case TaskTypes.REQUEST_FAILURE: {
      return {
        ...state,
        tasks: [],
        loading: false,
        error: true,
      };
    }
    case TaskTypes.CREATE_TASK:
    case TaskTypes.UPDATE_TASK:
    case TaskTypes.DELETE_TASK: {
      return {
        ...state,
        tasks: state.tasks,
        loading: true,
        error: false,
      };
    }
    default:
      return {
        ...state,
      };
  }
};

export const requestAllTasks = () => {
  return taction(TaskTypes.REQUEST_ALL_TASKS);
};
export const requestSuccess = ({ tasks }: { tasks: Task[] }) => {
  return taction(TaskTypes.REQUEST_SUCCESS, { tasks });
};
export const requestFailure = () => {
  return taction(TaskTypes.REQUEST_FAILURE);
};
export const createTask = ({ title, description, date }: createTaskDto) => {
  return taction(TaskTypes.CREATE_TASK, { title, description, date });
};
export const updateTask = ({ id, title, description, state }: updateTaskDto) => {
  return taction(TaskTypes.UPDATE_TASK, { id, title, description, state });
};
export const deleteTask = ({ id }: { id: string }) => {
  return taction(TaskTypes.DELETE_TASK, { id });
};

const BASE_URL =
  import.meta.env.VITE_ENVIRONMENT === 'production' ? 'production_url' : 'http://localhost:3000';

export function* mtlistGetAllTasks() {
  try {
    const response: AxiosResponse = yield Eff.call(axios.get, `${BASE_URL}/task`);
    yield Eff.put(requestSuccess({ tasks: response.data.body }));
  } catch (err) {
    yield Eff.put(requestFailure());
  }
}
export function* mtlistCreateTask(action: PayloadAction<TaskTypes, createTaskDto>) {
  const { title, description, date } = action.payload;
  try {
    yield Eff.call(axios.post, `${BASE_URL}/task`, {
      title,
      description,
      date,
    });
    yield mtlistGetAllTasks();
  } catch (err) {
    yield Eff.put(requestFailure());
  }
}
export function* mtlistUpdateTask(action: PayloadAction<TaskTypes, updateTaskDto>) {
  const { id, title, description, state } = action.payload;
  try {
    yield Eff.call(axios.patch, `${BASE_URL}/task/${id}`, {
      title,
      description,
      state,
    });
    yield mtlistGetAllTasks();
  } catch (err) {
    yield Eff.put(requestFailure());
  }
}
export function* mtlistDeleteTask(action: PayloadAction<TaskTypes, { id: string }>) {
  const { id } = action.payload;
  try {
    yield Eff.call(axios.delete, `${BASE_URL}/task/${id}`);
    yield mtlistGetAllTasks();
  } catch (err) {
    yield Eff.put(requestFailure());
  }
}

export default reducer;
