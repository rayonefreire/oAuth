import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

type AuthData = {
  signed: boolean;
  accessToken: string | null;
  authLogin(): Promise<void>;
  logOut(): void;
}

type Children = {
  children: React.ReactNode;
}

export const Context = createContext({} as AuthData);

export function Provider({ children } : Children ) {
  const [accessToken, setAccessToken] = useState<string | null>(String);

  async function authLogin() {
    const token = await AsyncStorage.getItem("@AUTH");
    if (token !== null) {
      setAccessToken(JSON.parse(token));
    }
  }

  function logOut() {
    AsyncStorage.clear();
    setAccessToken(null);
  }

  useEffect(() => {
    authLogin();
  },[]);

  return (
    <Context.Provider value={{ signed: !!accessToken, authLogin, logOut, accessToken }}>
      { children }
    </Context.Provider>
  );
}