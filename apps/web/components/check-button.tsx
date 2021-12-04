import { IProfessor } from '@todos/shared/interfaces';
import React from 'react';
import { mutate } from 'swr';
import { mutateUpdateProfessor } from '../lib/mutate-utils';

interface IProp {
  professorId: string;
}

export const CheckButton: React.FC<IProp> = ({ professorId }) => {
  const handleClick = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation(); // Prevents further propagation of the current event in the bubbling phase

    mutate('/api/professors', async (professors: IProfessor[]) =>
      mutateUpdateProfessor(professors, {
        professorId: professorId,
        formData: { isCompleted: true },
      })
    );
  };

  return (
    <button
      className="w-12 h-12 inline-flex items-center justify-cent text-green-500 hover:bg-green-500 hover:text-white px-2 rounded-full cursor-pointer"
      onClick={handleClick}
      id="check-button"
    >
      <svg
        className="w-8 h-8"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
};
