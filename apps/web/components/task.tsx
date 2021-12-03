import { ITask } from '@todos/shared/interfaces';
import React, { Fragment } from 'react';
import { useAppDispatch } from '../context/app';
import { FORM_TYPE } from '../reducers/form';
import classNames from 'classNames';
import { CheckedIcon } from './checked-button';
import { CheckButton } from './check-button';
import { DeleteButton } from './delete-button';

interface IProps {
  task: ITask;
}

export const Task: React.FC<IProps> = ({ task }) => {
  const dispatch = useAppDispatch();

  return (
    <li
      className={classNames(
        'px-4 py-2 border border-gray-200 rounded-md shadow-sm h-16 transition-all cursor-pointer hover:shadow-md'
      )}
      onClick={() =>
        dispatch({ type: FORM_TYPE.OPEN_UPDATE, payload: { _id: task._id } })
      }
      id={task.title}
    >
      <div className="flex flex-row justify-between items-center flex-1">
        <div>
          <p
            className={classNames('text-lg truncate', {
              'text-green-500 line-through': task.isCompleted,
            })}
            id="task-title"
          >
            {task.title}
          </p>
        </div>
        <div className="flex flex-row space-x-2 flex-none">
          {task.isCompleted && <CheckedIcon />}
          {!task.isCompleted && (
            <Fragment>
              <CheckButton taskId={task._id} />
              <DeleteButton taskId={task._id} />
            </Fragment>
          )}
        </div>
      </div>
    </li>
  );
};
