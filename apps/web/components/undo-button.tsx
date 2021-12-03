import { ITask } from '@todos/shared/interfaces';
import React from 'react';
import { mutate } from 'swr';
import { useAppDispatch } from '../context/app';
import { mutateUpdateTask } from '../lib/mutate-utils';
import { FORM_TYPE } from '../reducers/form';

interface IProp {
  taskId: string;
}

export const UndoButton: React.FC<IProp> = ({ taskId }) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    mutate('/api/tasks', async (tasks: ITask[]) =>
      mutateUpdateTask(tasks, {
        taskId: taskId,
        formData: { isCompleted: false },
      })
    ).then(() => {
      dispatch({ type: FORM_TYPE.CLOSE });
    });
  };

  return (
    <button
      type="button"
      className="bg-yellow-500 text-white text-2xl px-16 py-2 rounded-md mx-auto"
      onClick={handleClick}
      id="undo-task"
    >
      UNDO
    </button>
  );
};
