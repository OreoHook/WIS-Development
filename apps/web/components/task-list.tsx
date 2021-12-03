import React from 'react';
import { ITask } from '@todos/shared/interfaces';
import { Task } from './task';
import useSWR from 'swr';

export const TaskList = () => {
  const { data: tasks } = useSWR<ITask[]>('/api/tasks');

  if (!tasks) {
    return (
      <ul className="flex flex-col space-y-2" id="tasks-loading">
        <li className="px-4 py-2 rounded-md shadow-sm h-12 animate-pulse bg-gray-100" />
        <li className="px-4 py-2 rounded-md shadow-sm h-12 animate-pulse bg-gray-100" />
        <li className="px-4 py-2 rounded-md shadow-sm h-12 animate-pulse bg-gray-100" />
        <li className="px-4 py-2 rounded-md shadow-sm h-12 animate-pulse bg-gray-100" />
        <li className="px-4 py-2 rounded-md shadow-sm h-12 animate-pulse bg-gray-100" />
      </ul>
    );
  }

  return (
    <ul className="flex flex-col space-y-2" id="tasks-list">
      {tasks.map((task) => (
        <Task task={task} key={task._id} />
      ))}
    </ul>
  );
};
