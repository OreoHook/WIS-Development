import React, { useEffect, VFC } from 'react';
import { Transition } from '@headlessui/react';
import { componentWillAppendToBody } from 'react-append-to-body';
import { useAppContext, useAppDispatch } from '../context/app';
import { FORM_METHOD, FORM_TYPE } from '../reducers/form';
import { useForm } from 'react-hook-form';
import { IDepartment, IProfessor } from '@todos/shared/interfaces';
import dayjs from 'dayjs';
import useSWR, { mutate } from 'swr';
import { toast } from 'react-toastify';
import {
  mutateCreateProfessor,
  mutateUpdateProfessor,
} from '../lib/mutate-utils';
import { UndoButton } from './undo-button';

const FormModal: VFC = () => {
  const { form } = useAppContext();
  const dispatch = useAppDispatch();
  const { data: departments } = useSWR<IDepartment[]>('/api/departments');

  const { register, handleSubmit, errors, reset, watch } = useForm<IProfessor>({
    defaultValues: {
      _id: null,
      department: '',
      position: '',
      academicDegree: '',
      fullName: '',
      sex: '',
      passport: '',
      dateOfBirth: null,
      isCompleted: false,
    },
  });

  useEffect(() => {
    const fetchData = () => {
      fetch(`/api/professors/${form._id}`)
        .then((r) => r.json())
        .then((d) =>
          reset({
            ...d,
            dateOfBirth: dayjs(d.dateOfBirth).format('YYYY-MM-DD'),
          })
        );
    };

    if (form._id) {
      fetchData();
    }
  }, [form._id, reset]);

  const onSubmit = (formData: IProfessor) => {
    mutate('/api/professors', async (professors: IProfessor[]) => {
      if (form.method === FORM_METHOD.UPDATE) {
        return mutateUpdateProfessor(professors, {
          professorId: form._id,
          formData,
        });
      } else {
        return mutateCreateProfessor(professors, formData);
      }
    }).then(() => {
      dispatch({ type: FORM_TYPE.CLOSE });
      if (form.method === FORM_METHOD.UPDATE) {
        return toast.success('Данные преподавателя обновлены!');
      } else {
        return toast.success('Преподаватель создан!');
      }
    });
  };

  return (
    <Transition show={form.isOpen} className="fixed inset-0">
      <form
        className="flex flex-col items-center justify-center min-h-screen text-center"
        onSubmit={handleSubmit(onSubmit)}
        id="form-modal"
      >
        <Transition.Child
          enter="transition ease-in-expo duration-300"
          enterFrom="transform  translate-y-full"
          enterTo="transform translate-y-0"
          leave="transition ease-in-expo duration-300"
          leaveFrom="transform translate-y-0"
          leaveTo="transform translate-y-full"
          className="block align-bottom bg-white text-left overflow-hidden shadow-xl w-screen lg:w-3/4 pb-20 z-20 min-h-screen mx-auto"
        >
          <div className="sticky top-0 bg-white px-4 py-3">
            <div className="flex items-center">
              <div className="text-lg text-mine-shaft-500 font-semibold">
                {form.method} PROFESSOR
              </div>
              <div
                className="ml-auto text-gray-700 w-10 h-10 inline-flex items-center justify-cent hover:bg-gray-100 p-1 rounded-full cursor-pointer "
                onClick={() => dispatch({ type: FORM_TYPE.CLOSE })}
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
          <hr className="border-t border-gray-200 w-full" />
          <div className="grid grid-cols-1 gap-6 mx-4 py-8">
            <label className="block">
              <span className="text-gray-700">Кафедра</span>
              <select
                name="department"
                ref={register({ required: true })}
                className="form-select mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                {departments?.map((department: IDepartment) => (
                  <option key={department._id} value={department.title}>
                    {department.title}
                  </option>
                ))}
              </select>
              {errors.department && (
                <span
                  className="text-base text-red-400"
                  id="reqired-department"
                >
                  Обязательно для заполнения
                </span>
              )}
            </label>

            <label className="block">
              <span className="text-gray-700">Должность</span>
              <input
                type="text"
                name="position"
                ref={register({ required: true })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              {errors.position && (
                <span className="text-base text-red-400" id="reqired-position">
                  Обязательно для заполнения
                </span>
              )}
            </label>

            <label className="block">
              <span className="text-gray-700">Ученая степень</span>
              <input
                type="text"
                name="academicDegree"
                ref={register({ required: true })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              {errors.academicDegree && (
                <span
                  className="text-base text-red-400"
                  id="reqired-academic-degree"
                >
                  Обязательно для заполнения
                </span>
              )}
            </label>

            <label className="block">
              <span className="text-gray-700">ФИО</span>
              <input
                type="text"
                name="fullName"
                ref={register({ required: true })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              {errors.fullName && (
                <span className="text-base text-red-400" id="reqired-full-name">
                  Обязательно для заполнения
                </span>
              )}
            </label>

            <label className="block">
              <span className="text-gray-700">Пол</span>
              <input
                type="text"
                name="sex"
                ref={register({ required: true })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              {errors.sex && (
                <span className="text-base text-red-400" id="reqired-sex">
                  Обязательно для заполнения
                </span>
              )}
            </label>

            <label className="block">
              <span className="text-gray-700">Паспортные данные</span>
              <input
                type="text"
                name="passport"
                ref={register({ required: true })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              {errors.passport && (
                <span className="text-base text-red-400" id="reqired-passport">
                  Обязательно для заполнения
                </span>
              )}
            </label>

            <label className="block">
              <span className="text-gray-700">Дата рождения</span>
              <input
                type="date"
                name="dateOfBirth"
                ref={register({ required: true })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              {errors.dateOfBirth && (
                <span
                  className="text-base text-red-400"
                  id="reqired-date-of-birth"
                >
                  Обязательно для заполнения
                </span>
              )}
            </label>
          </div>
        </Transition.Child>
        <Transition.Child
          enter="transition ease-in-expo duration-200"
          enterFrom="transform opacity-75 translate-y-20"
          enterTo="transform opacity-100 translate-y-0"
          leave="transition ease-in-expo duration-200"
          leaveFrom="transform opacity-100 translate-y-0"
          leaveTo="transform opacity-75 translate-y-20"
          className="fixed bottom-0 w-screen lg:w-3/4 lg:max-w-lg px-4 py-4 border-t border-gray-200 bg-white z-20 space-x-2"
        >
          {form.method === FORM_METHOD.UPDATE && watch('isCompleted') && (
            <UndoButton professorId={form._id} />
          )}
          <button
            className="bg-blue-500 text-white text-2xl px-16 py-2 rounded-md"
            type="submit"
            id="form-modal-submit-button"
          >
            SAVE
          </button>
        </Transition.Child>
      </form>
    </Transition>
  );
};

export default componentWillAppendToBody(FormModal);
