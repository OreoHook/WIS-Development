import fetch from 'isomorphic-unfetch';

export const createTask = async ({ formData }) =>
  fetch('/api/tasks', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  }).then((r) => r.json());

export const updateTask = async ({ taskId, formData }) => {
  const { _id, ...data } = formData;

  return fetch(`/api/tasks/${taskId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then((r) => r.json());
};

export const deleteTask = async ({ taskId }) =>
  fetch(`/api/tasks/${taskId}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  }).then((r) => r.json());
