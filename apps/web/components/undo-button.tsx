import { IProfessor } from '@todos/shared/interfaces';
import React, { FC } from 'react';
import { mutate } from 'swr';
import { useAppDispatch } from '../context/app';
import { mutateUpdateProfessor } from '../lib/mutate-utils';
import { FORM_TYPE } from '../reducers/form';

interface IProp {
  professorId: string;
}

export const UndoButton: FC<IProp> = ({ professorId }) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    mutate('/api/professors', async (professors: IProfessor[]) =>
      mutateUpdateProfessor(professors, {
        professorId: professorId,
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
      id="undo-professor"
    >
      UNDO
    </button>
  );
};
