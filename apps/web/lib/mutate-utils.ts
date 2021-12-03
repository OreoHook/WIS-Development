import { ITask } from '@todos/shared/interfaces';
import { createTask, deleteTask, updateTask } from './api';

export const mutateCreateTask = async (prevTasks: ITask[], formData) => {
  const newTask = await createTask({ formData });

  return [newTask, ...prevTasks];
};

export const mutateUpdateTask = async (
  prevTasks: ITask[],
  { taskId, formData }
) => {
  const updatedTask = await updateTask({ taskId, formData });

  const filteredTasks = prevTasks.filter((t) => t._id !== taskId);

  return [...filteredTasks, updatedTask];
};

export const mutateDeleteTask = async (prevTasks: ITask[], { taskId }) => {
  return deleteTask({ taskId }).then(() =>
    prevTasks.filter((t) => t._id !== taskId)
  );
};
