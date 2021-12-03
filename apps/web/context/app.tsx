import * as React from 'react';
import { Dispatch, useReducer } from 'react';
import { reducer, InitialState, initialState } from '../reducers';
import { FormActions } from '../reducers/form';
import { LoaderActions } from '../reducers/loader';

export type AppDispatchType = Dispatch<LoaderActions | FormActions>;

export const StateContext = React.createContext<InitialState>(initialState);
StateContext.displayName = 'AppStateContext';

export const DispatchContext = React.createContext<AppDispatchType>(() => 0);
DispatchContext.displayName = 'AppDispatchContext';

export const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        {children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export const useAppContext = () => React.useContext<InitialState>(StateContext);

export const useAppDispatch = () =>
  React.useContext<AppDispatchType>(DispatchContext);
