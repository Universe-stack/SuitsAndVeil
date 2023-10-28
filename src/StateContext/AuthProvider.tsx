import React, { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import {authReducer} from './AuthContext';
import {initialState} from './AuthContext';

type AuthProps={
  children: React.ReactNode;
}

export const AuthProvider = (props:AuthProps) => {
    const [state, dispatch] = useReducer(authReducer, initialState);
  
    return (
      <AuthContext.Provider value={{ state, dispatch }}>
        {props.children}
      </AuthContext.Provider>
    );
  };