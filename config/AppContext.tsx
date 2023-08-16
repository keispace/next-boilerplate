"use client"
import React, { createContext, useState, useContext } from 'react';


interface State {
  user: any;
}
interface Context {
  state: State,
  setState: (state: State) => void;
}
const initialState: State = {
  user: null,
}

const AppContext = createContext<Context>({ state: initialState, setState: () => {} });
export const AppProvider = ({ children }: any) => {
  const [state, setState] = useState(initialState);
  const value = { state, setState };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
export const useAppContext = () => useContext(AppContext)