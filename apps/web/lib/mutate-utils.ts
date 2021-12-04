import { IProfessor } from '@todos/shared/interfaces';
import { createProfessor, deleteProfessor, updateProfessor } from './api';

export const mutateCreateProfessor = async (
  prevProfessors: IProfessor[],
  formData
) => {
  const newProfessor = await createProfessor({ formData });

  return [newProfessor, ...prevProfessors];
};

export const mutateUpdateProfessor = async (
  prevProfessors: IProfessor[],
  { professorId, formData }
) => {
  const updatedProfessor = await updateProfessor({ professorId, formData });

  const filteredProfessors = prevProfessors.filter(
    (t) => t._id !== professorId
  );

  return [...filteredProfessors, updatedProfessor];
};

export const mutateDeleteProfessor = async (
  prevProfessors: IProfessor[],
  { professorId }
) => {
  return deleteProfessor({ professorId }).then(() =>
    prevProfessors.filter((t) => t._id !== professorId)
  );
};
