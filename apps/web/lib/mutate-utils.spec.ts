import {
  mutateCreateProfessor,
  mutateDeleteProfessor,
  mutateUpdateProfessor,
} from './mutate-utils';

import * as api from './api';
import { IProfessor } from '@todos/shared/interfaces';
describe('mutate', () => {
  describe('mutateCreateProfessor', () => {
    it('it should call createProfessor', async () => {
      const createProfessor = jest
        .spyOn(api, 'createProfessor')
        .mockImplementation(() => Promise.resolve({ _id: 'id' }));

      const response = await mutateCreateProfessor([], { _id: 'id' });

      expect(response).toHaveLength(1);
      expect(createProfessor).toBeCalled();
    });
  });

  describe('mutateUpdateProfessor', () => {
    it('it should call updateProfessor', async () => {
      const mockUpdatedProfessor = { _id: 'id' };

      const updateProfessor = jest
        .spyOn(api, 'updateProfessor')
        .mockImplementation(() => Promise.resolve(mockUpdatedProfessor));

      const response = await mutateUpdateProfessor([], {
        professorId: 'id-1',
        formData: { _id: 'id' },
      });

      expect(response).toEqual([mockUpdatedProfessor]);
      expect(updateProfessor).toBeCalled();
    });
  });

  describe('mutateDeleteProfessor', () => {
    it('it should call deleteProfessor', async () => {
      const mockUpdatedProfessor = { _id: 'id-1' };

      const deleteProfessor = jest
        .spyOn(api, 'deleteProfessor')
        .mockImplementation(() => Promise.resolve(mockUpdatedProfessor));

      const response = await mutateDeleteProfessor(
        [mockUpdatedProfessor] as IProfessor[],
        {
          professorId: 'id-1',
        }
      );

      expect(response).toEqual([]);
      expect(deleteProfessor).toBeCalled();
    });
  });
});
