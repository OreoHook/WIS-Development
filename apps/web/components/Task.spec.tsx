import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render } from '@testing-library/react';
import { Task } from './Task';

describe('Task', () => {
  describe('Checked Icon', () => {
    it('checked icon not toBeInTheDocument if isCompleted is false', () => {
      const task = {
        _id: 'id',
        title: 'title',
        dueDate: new Date(),
        isCompleted: false,
      };
      const { baseElement, container } = render(<Task task={task} />);
      expect(baseElement).toBeTruthy();
  
      const checkedIcon = container.querySelector('#checked-icon');
  
      expect(checkedIcon).not.toBeInTheDocument();
    });
  
    it('checked icon toBeInTheDocument if isCompleted is true', () => {
      const task = {
        _id: 'id',
        title: 'title',
        dueDate: new Date(),
        isCompleted: true,
      };
      const { baseElement, container } = render(<Task task={task} />);
      expect(baseElement).toBeTruthy();
  
      const checkedIcon = container.querySelector('#checked-icon');
  
      expect(checkedIcon).toBeInTheDocument();
    });
  });

  describe('Check Icon', () => {
    it('check icon toBeInTheDocument if isCompleted is false', () => {
      const task = {
        _id: 'id',
        title: 'title',
        dueDate: new Date(),
        isCompleted: false,
      };
      const { baseElement, container } = render(<Task task={task} />);
      expect(baseElement).toBeTruthy();
  
      const checkIcon = container.querySelector('#check-button');
  
      expect(checkIcon).toBeInTheDocument();
    });
  
    it('check icon not toBeInTheDocument if isCompleted is true', () => {
      const task = {
        _id: 'id',
        title: 'title',
        dueDate: new Date(),
        isCompleted: true,
      };
      const { baseElement, container } = render(<Task task={task} />);
      expect(baseElement).toBeTruthy();
  
      const checkIcon = container.querySelector('#check-button');
  
      expect(checkIcon).not.toBeInTheDocument();
    });
  });

  describe('Delete Icon', () => {
    it('delete icon toBeInTheDocument if isCompleted is false', () => {
      const task = {
        _id: 'id',
        title: 'title',
        dueDate: new Date(),
        isCompleted: false,
      };
      const { baseElement, container } = render(<Task task={task} />);
      expect(baseElement).toBeTruthy();
  
      const deleteIcon = container.querySelector('#delete-button');
  
      expect(deleteIcon).toBeInTheDocument();
    });
  
    it('delete icon not toBeInTheDocument if isCompleted is true', () => {
      const task = {
        _id: 'id',
        title: 'title',
        dueDate: new Date(),
        isCompleted: true,
      };
      const { baseElement, container } = render(<Task task={task} />);
      expect(baseElement).toBeTruthy();
  
      const deleteIcon = container.querySelector('#delete-button');
  
      expect(deleteIcon).not.toBeInTheDocument();
    });
  });
});
