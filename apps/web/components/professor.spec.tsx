import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render } from '@testing-library/react';
import { Professor } from './professor';
import { IProfessor } from '@todos/shared/interfaces';

describe('Professor', () => {
  describe('Checked Icon', () => {
    it('checked icon not toBeInTheDocument if isCompleted is false', () => {
      const professor: IProfessor = {
        _id: 'id',
        department: 'department',
        position: 'position',
        academicDegree: 'academicDegree',
        fullName: 'fullName',
        sex: 'sex',
        passport: 'passport',
        dateOfBirth: new Date(),
        isCompleted: false,
      };
      const { baseElement, container } = render(
        <Professor professor={professor} />
      );
      expect(baseElement).toBeTruthy();

      const checkedIcon = container.querySelector('#checked-icon');

      expect(checkedIcon).not.toBeInTheDocument();
    });

    it('checked icon toBeInTheDocument if isCompleted is true', () => {
      const professor: IProfessor = {
        _id: 'id',
        department: 'department',
        position: 'position',
        academicDegree: 'academicDegree',
        fullName: 'fullName',
        sex: 'sex',
        passport: 'passport',
        dateOfBirth: new Date(),
        isCompleted: false,
      };
      const { baseElement, container } = render(
        <Professor professor={professor} />
      );
      expect(baseElement).toBeTruthy();

      const checkedIcon = container.querySelector('#checked-icon');

      expect(checkedIcon).toBeInTheDocument();
    });
  });

  describe('Check Icon', () => {
    it('check icon toBeInTheDocument if isCompleted is false', () => {
      const professor: IProfessor = {
        _id: 'id',
        department: 'department',
        position: 'position',
        academicDegree: 'academicDegree',
        fullName: 'fullName',
        sex: 'sex',
        passport: 'passport',
        dateOfBirth: new Date(),
        isCompleted: false,
      };
      const { baseElement, container } = render(
        <Professor professor={professor} />
      );
      expect(baseElement).toBeTruthy();

      const checkIcon = container.querySelector('#check-button');

      expect(checkIcon).toBeInTheDocument();
    });

    it('check icon not toBeInTheDocument if isCompleted is true', () => {
      const professor: IProfessor = {
        _id: 'id',
        department: 'department',
        position: 'position',
        academicDegree: 'academicDegree',
        fullName: 'fullName',
        sex: 'sex',
        passport: 'passport',
        dateOfBirth: new Date(),
        isCompleted: false,
      };
      const { baseElement, container } = render(
        <Professor professor={professor} />
      );
      expect(baseElement).toBeTruthy();

      const checkIcon = container.querySelector('#check-button');

      expect(checkIcon).not.toBeInTheDocument();
    });
  });

  describe('Delete Icon', () => {
    it('delete icon toBeInTheDocument if isCompleted is false', () => {
      const professor: IProfessor = {
        _id: 'id',
        department: 'department',
        position: 'position',
        academicDegree: 'academicDegree',
        fullName: 'fullName',
        sex: 'sex',
        passport: 'passport',
        dateOfBirth: new Date(),
        isCompleted: false,
      };
      const { baseElement, container } = render(
        <Professor professor={professor} />
      );
      expect(baseElement).toBeTruthy();

      const deleteIcon = container.querySelector('#delete-button');

      expect(deleteIcon).toBeInTheDocument();
    });

    it('delete icon not toBeInTheDocument if isCompleted is true', () => {
      const professor: IProfessor = {
        _id: 'id',
        department: 'department',
        position: 'position',
        academicDegree: 'academicDegree',
        fullName: 'fullName',
        sex: 'sex',
        passport: 'passport',
        dateOfBirth: new Date(),
        isCompleted: false,
      };
      const { baseElement, container } = render(
        <Professor professor={professor} />
      );
      expect(baseElement).toBeTruthy();

      const deleteIcon = container.querySelector('#delete-button');

      expect(deleteIcon).not.toBeInTheDocument();
    });
  });
});
