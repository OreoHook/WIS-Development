import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { UndoButton } from './undo-button';
import * as swr from 'swr';
import * as libMutate from '../lib/mutate-utils';

describe('Undo Button', () => {
  it('calls mutate and mutateUpdateTask', () => {
    const mutate = jest.spyOn(swr, 'mutate');

    const mutateUpdateTask = jest
      .spyOn(libMutate, 'mutateUpdateTask')
      .mockImplementation(() => Promise.resolve([]));

    const { container } = render(<UndoButton taskId="task_id" />);

    fireEvent.click(container.querySelector('#undo-task'));
    expect(mutate).toHaveBeenCalled();
    expect(mutateUpdateTask).toHaveBeenCalled();
  });
});
