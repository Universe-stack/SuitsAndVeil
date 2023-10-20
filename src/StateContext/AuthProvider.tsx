import React, { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import {authReducer} from './AuthContext';
import {initialState} from './AuthContext';

export const AuthProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);
  
    return (
      <AuthContext.Provider value={{ state, dispatch }}>
        {children}
      </AuthContext.Provider>
    );
  };