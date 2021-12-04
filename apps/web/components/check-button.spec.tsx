import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CheckButton } from './check-button';
import * as swr from 'swr';
import * as libMutate from '../lib/mutate-utils';

describe('Check Button', () => {
  it('calls mutate and mutateUpdateProfessor', () => {
    const mutate = jest.spyOn(swr, 'mutate');

    const mutateUpdateProfessor = jest
      .spyOn(libMutate, 'mutateUpdateProfessor')
      .mockImplementation(() => Promise.resolve([]));

    const { container } = render(<CheckButton professorId="professor_id" />);

    fireEvent.click(container.querySelector('#check-button'));
    expect(mutate).toHaveBeenCalled();
    expect(mutateUpdateProfessor).toHaveBeenCalled();
  });
});
