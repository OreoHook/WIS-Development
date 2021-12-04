import fetch from 'isomorphic-unfetch';

export const createProfessor = async ({ formData }) =>
  fetch('/api/professors', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  }).then((r) => r.json());

export const updateProfessor = async ({ professorId, formData }) => {
  const { _id, ...data } = formData;

  return fetch(`/api/professors/${professorId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then((r) => r.json());
};

export const deleteProfessor = async ({ professorId }) =>
  fetch(`/api/professors/${professorId}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  }).then((r) => r.json());
