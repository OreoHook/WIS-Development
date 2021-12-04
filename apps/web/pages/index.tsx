import React from 'react';
import { AddProfessorButton } from '../components/add-professor-button';
import { ProfessorList } from '../components/professor-list';

function Index() {
  return (
    <div className="px-4">
      <h1 className="text-2xl text-gray-900 font-semibold my-4">
        Система учета преподавателей
      </h1>
      <ProfessorList />
      <div className="fixed bottom-4 block left-1/2 right-1/2">
        <div className="flex items-center justify-center">
          <AddProfessorButton />
        </div>
      </div>
    </div>
  );
}

export default Index;
