import React from 'react';
import { AddTaskButton } from '../components/add-task-button';
import { TaskList } from '../components/task-list';

const Index = () => {
  return (
    <div className="px-4">
      <h1 className="text-2xl text-gray-900 font-semibold my-4">Simple Todos <span role="img" aria-label="tada  ">😎🎉</span></h1>
      <TaskList />
      <div className="fixed bottom-4 block left-1/2 right-1/2">
        <div className="flex items-center justify-center">
          <AddTaskButton />
        </div>
      </div>
    </div>
  );
};

export default Index;
