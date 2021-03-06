import React, { FC } from 'react';
import { IProfessor } from '@todos/shared/interfaces';
import { mutate } from 'swr';
import { mutateDeleteProfessor } from '../lib/mutate-utils';
import { toast } from 'react-toastify';

interface IProp {
  professorId: string;
}

export const DeleteButton: FC<IProp> = ({ professorId }) => {
  const handleClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation(); // Prevents further propagation of the current event in the bubbling phase

    mutate('/api/professors', async (professors: IProfessor[]) =>
      mutateDeleteProfessor(professors, { professorId })
    ).then(() => {
      return toast.success('Преподаватель успешно удален!');
    });
  };

  return (
    <button
      className="w-12 h-12 inline-flex items-center justify-cent text-red-500 hover:bg-red-500 hover:text-white px-2 rounded-full cursor-pointer"
      onClick={handleClick}
      id="delete-button"
      type="button"
    >
      <svg
        className="w-8 h-8"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
};
