import React, { createContext, useCallback, useState } from 'react';
import api from '../service/api';

interface AuthState {
  token: string;
  name: string;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  name: string;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@SisCad: token');
    const name = localStorage.getItem('@SisCad: name');

    if (token && name) {
      return { token, name };
    }

    return {} as AuthState;
  });
  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('login', {
      name: 'Usuário',
      email,
      password,
      token: '12312312312312',
    });

    const { token, name } = response.data;

    localStorage.setItem('@SisCad: token', token);
    localStorage.setItem('@SisCad: name', name);

    setData({ token, name });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@SisCad: token');
    localStorage.removeItem('@SisCad: name');

    setData({} as AuthState);
  }, []);
  return (
    <AuthContext.Provider value={{ name: data.name, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
