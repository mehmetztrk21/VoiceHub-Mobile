import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [last, setLast] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const jsonValue = await AsyncStorage.getItem('user');
      const user = jsonValue != null ? JSON.parse(jsonValue) : null;
      setUser(user);
    };

    const getLast = async () => {
      const jsonValue = await AsyncStorage.getItem('lasts');
      const user = jsonValue != null ? JSON.parse(jsonValue) : null;
      setLast(last);
    };

    getUser();
    getLast();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, last, setLast }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
