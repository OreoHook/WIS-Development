import React from 'react';
import { useAppDispatch } from '../context/app';
import { FORM_TYPE } from '../reducers/form';

export const AddTaskButton = () => {
  const dispatch = useAppDispatch();

  return (
    <button
      className=" w-16 h-16 p-3  inline-flex items-center justify-cent text-white bg-blue-500 hover:bg-blue-700 rounded-full cursor-pointer"
      onClick={() => dispatch({ type: FORM_TYPE.OPEN_CREATE })}
      id="add-task-button"
    >
      <svg
        className="w-10 h-10"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
};
