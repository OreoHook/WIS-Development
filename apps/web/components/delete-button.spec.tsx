import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DeleteButton } from './delete-button';
import * as swr from 'swr';
import * as libMutate from '../lib/mutate-utils';

describe('Delete Button', () => {
  it('calls mutate and mutateDeleteProfessor', () => {
    const mutate = jest.spyOn(swr, 'mutate');

    const mutateDeleteProfessor = jest
      .spyOn(libMutate, 'mutateDeleteProfessor')
      .mockImplementation(() => Promise.resolve([]));

    const { container } = render(<DeleteButton professorId="professor_id" />);

    fireEvent.click(container.querySelector('#delete-button'));
    expect(mutate).toHaveBeenCalled();
    expect(mutateDeleteProfessor).toHaveBeenCalled();
  });
});
