import React, { VFC } from 'react';
import { IProfessor } from '@todos/shared/interfaces';
import { Professor } from './professor';
import useSWR from 'swr';

export const ProfessorList: VFC = () => {
  const { data: professors } = useSWR<IProfessor[]>('/api/professors');

  if (!professors) {
    return (
      <ul className="flex flex-col space-y-2" id="professors-loading">
        <li className="px-4 py-2 rounded-md shadow-sm h-12 animate-pulse bg-gray-100" />
        <li className="px-4 py-2 rounded-md shadow-sm h-12 animate-pulse bg-gray-100" />
        <li className="px-4 py-2 rounded-md shadow-sm h-12 animate-pulse bg-gray-100" />
        <li className="px-4 py-2 rounded-md shadow-sm h-12 animate-pulse bg-gray-100" />
        <li className="px-4 py-2 rounded-md shadow-sm h-12 animate-pulse bg-gray-100" />
      </ul>
    );
  }

  return (
    <ul className="flex flex-col space-y-2" id="professors-list">
      {professors.map((professor) => (
        <Professor professor={professor} key={professor._id} />
      ))}
    </ul>
  );
};
