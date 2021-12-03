import { ActionMap } from './common';
import { FormActions } from './form';

export enum LOADER_TYPE {
  OPEN = 'OPEN_LOADER',
  CLOSE = 'CLOSE_LOADER'
}

type LoaderPayload = {
  [LOADER_TYPE.OPEN]: undefined;
  [LOADER_TYPE.CLOSE]: undefined;
};

export type LoaderActions = ActionMap<LoaderPayload>[keyof ActionMap<
  LoaderPayload
>];

export const loaderInitialState = {
  isOpen: false
};

export type LoaderState = typeof loaderInitialState;

export const loaderReducer = (
  state: LoaderState,
  action: LoaderActions | FormActions
): LoaderState => {
  switch (action.type) {
    case LOADER_TYPE.OPEN:
      return { isOpen: true };
    case LOADER_TYPE.CLOSE:
      return { isOpen: false };
    default:
      return state;
  }
};
