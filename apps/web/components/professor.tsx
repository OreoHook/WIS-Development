import { IProfessor } from '@todos/shared/interfaces';
import React, { FC, Fragment } from 'react';
import { useAppDispatch } from '../context/app';
import { FORM_TYPE } from '../reducers/form';
import classNames from 'classNames';
import { CheckedIcon } from './checked-button';
import { CheckButton } from './check-button';
import { DeleteButton } from './delete-button';

interface IProps {
  professor: IProfessor;
}

export const Professor: FC<IProps> = ({ professor }) => {
  const dispatch = useAppDispatch();

  return (
    <li
      className={classNames(
        'px-4 py-2 border border-gray-200 rounded-md shadow-sm h-16 transition-all cursor-pointer hover:shadow-md'
      )}
      onClick={() =>
        dispatch({
          type: FORM_TYPE.OPEN_UPDATE,
          payload: { _id: professor._id },
        })
      }
      id={professor.fullName}
    >
      <div className="flex flex-row justify-between items-center flex-1">
        <div>
          <p
            className={classNames('text-lg truncate', {
              'text-green-500 line-through': professor.isCompleted,
            })}
            id="professor-full-name"
          >
            {professor.fullName}
          </p>
        </div>
        <div className="flex flex-row space-x-2 flex-none">
          {professor.isCompleted && <CheckedIcon />}
          {!professor.isCompleted && (
            <Fragment>
              {/* <CheckButton professorId={professor._id} /> */}
              <DeleteButton professorId={professor._id} />
            </Fragment>
          )}
        </div>
      </div>
    </li>
  );
};
