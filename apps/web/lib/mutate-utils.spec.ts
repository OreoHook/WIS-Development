import { mutateCreateTask, mutateDeleteTask, mutateUpdateTask } from './mutate-utils';

import * as api from './api';
import { ITask } from '@todos/shared/interfaces';
describe('mutate', () => {
  describe('mutateCreateTask', () => {
    it('it should call createTask', async () => {
      const createTask = jest
        .spyOn(api, 'createTask')
        .mockImplementation(() => Promise.resolve({ _id: 'id' }));

      const response = await mutateCreateTask([], { _id: 'id' });

      expect(response).toHaveLength(1);
      expect(createTask).toBeCalled();
    });
  });

  describe('mutateUpdateTask', () => {
    it('it should call updateTask', async () => {
      const mockUpdatedTask = { _id: 'id' };

      const updateTask = jest
        .spyOn(api, 'updateTask')
        .mockImplementation(() => Promise.resolve(mockUpdatedTask));

      const response = await mutateUpdateTask([], {
        taskId: 'id-1',
        formData: { _id: 'id' },
      });

      expect(response).toEqual([mockUpdatedTask]);
      expect(updateTask).toBeCalled();
    });
  });

  describe('mutateDeleteTask', () => {
    it('it should call deleteTask', async () => {
      const mockUpdatedTask = { _id: 'id-1' };

      const deleteTask = jest
        .spyOn(api, 'deleteTask')
        .mockImplementation(() => Promise.resolve(mockUpdatedTask));

      const response = await mutateDeleteTask([mockUpdatedTask] as ITask[], {
        taskId: 'id-1',
      });

      expect(response).toEqual([]);
      expect(deleteTask).toBeCalled();
    });
  });
});
