'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name?: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  signInWithGoogle: () => Promise<void>;
  signInWithEmail: (email: string, password: string) => Promise<{ user: User | null; session: any }>;
  signOut: () => Promise<void>;
  signUpWithEmail: (email: string, password: string) => Promise<{ data: { user: User | null } | null; error: Error | null }>;
  updatePassword: (newPassword: string) => Promise<void>;
  updateEmail: (newEmail: string) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  isSubscriber: boolean;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading] = useState(false);
  const [isSubscriber] = useState(false);

  const value = {
    user,
    isLoading,
    signInWithGoogle: async () => {
      // Fake Google sign in
      setUser({
        id: 'fake-user-1',
        email: 'demo@example.com',
        name: 'Demo User'
      });
    },
    signInWithEmail: async (email: string, password: string) => {
      // Fake email sign in
      const fakeUser = {
        id: 'fake-user-1',
        email: email,
        name: 'Demo User'
      };
      setUser(fakeUser);
      return { user: fakeUser, session: { access_token: 'fake-token' } };
    },
    signOut: async () => {
      setUser(null);
      window.location.assign('/login');
    },
    signUpWithEmail: async (email: string, password: string) => {
      const fakeUser = {
        id: 'fake-user-1',
        email: email,
        name: 'Demo User'
      };
      setUser(fakeUser);
      return { data: { user: fakeUser }, error: null };
    },
    updatePassword: async (newPassword: string) => {
      console.log('Fake password update:', newPassword);
    },
    updateEmail: async (newEmail: string) => {
      if (user) {
        setUser({ ...user, email: newEmail });
      }
    },
    resetPassword: async (email: string) => {
      console.log('Fake password reset for:', email);
    },
    isSubscriber,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);