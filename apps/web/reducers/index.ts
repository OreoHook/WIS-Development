import { FormActions, formInitialState, formReducer } from './form';
import { loaderReducer, loaderInitialState, LoaderActions } from './loader';

export const initialState = {
  loader: loaderInitialState,
  form: formInitialState,
};

export type InitialState = typeof initialState;

export const reducer = (
  { loader, form }: InitialState,
  action: LoaderActions | FormActions
) => ({
  loader: loaderReducer(loader, action),
  form: formReducer(form, action),
});
