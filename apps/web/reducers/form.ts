import { ActionMap } from './common';
import { LoaderActions } from './loader';

export enum FORM_TYPE {
  OPEN_CREATE = 'OPEN_CREATE_FORM',
  OPEN_UPDATE = 'OPEN_UPDATE_FORM',
  CLOSE = 'CLOSE_FORM',
}

export enum FORM_METHOD {
  CREATE = 'CREATE',
  UPDATE = 'UPDATE',
}

interface IOpenUpdatePayload {
  _id: string;
}

type FormPayload = {
  [FORM_TYPE.OPEN_CREATE]: undefined;
  [FORM_TYPE.OPEN_UPDATE]: IOpenUpdatePayload;
  [FORM_TYPE.CLOSE]: undefined;
};

export type FormActions = ActionMap<FormPayload>[keyof ActionMap<FormPayload>];

export type FormState = {
  isOpen: boolean;
  _id?: string;
  method?: FORM_METHOD;
};

export const formInitialState: FormState = {
  isOpen: false,
  _id: null,
  method: null,
};

export const formReducer = (
  state: FormState,
  action: FormActions | LoaderActions
): FormState => {
  switch (action.type) {
    case FORM_TYPE.OPEN_CREATE:
      return { isOpen: true, _id: null, method: FORM_METHOD.CREATE };
    case FORM_TYPE.OPEN_UPDATE:
      return {
        isOpen: true,
        _id: action.payload._id,
        method: FORM_METHOD.UPDATE,
      };
    case FORM_TYPE.CLOSE:
      return { isOpen: false, _id: null, method: null };
    default:
      return state;
  }
};
