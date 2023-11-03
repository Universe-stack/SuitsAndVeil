// AuthContext.tsx
import React, { createContext, useContext, } from 'react';

type User = {
  username: string;
  email: string;
  name: string;
  role: string;
  password: string;
};

type AuthState = {
  user: User | null;
  loading: boolean;
  error: string | null;
  isAuthenticated:boolean
};

type AuthAction =
  | { type: 'SIGNUP'; payload: User }
  | { type: 'SIGNIN'; payload: User }
  | { type: 'ERROR'; payload: string };

type AuthContextType = {
  state: AuthState;
  dispatch: React.Dispatch<AuthAction>;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

 export const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
  isAuthenticated:false
};

 export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'SIGNUP':
      return { ...state, user: action.payload, loading: false, error: null, isAuthenticated: true };
    case 'SIGNIN':
      return { ...state, user: action.payload, loading: false, error: null, isAuthenticated:true };
    case 'ERROR':
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
