import React, { useContext } from 'react';

import {
  Text,
  View
} from 'react-native';

import { styles } from './styles';
import { Button } from '../../components/Button';
import { Context } from '../../context/auth';

import logoGoogle from './google-logo.json';
import Lottie from 'lottie-react-native';
import * as AuthSession from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AuthResponse = {
  type: string;
  params: {
    access_token: string;
  }
}

export function SignIn(){
  const { authLogin } = useContext(Context);

  async function handleHome() {
    const CLIENT_ID = '893102705299-8nqc0n5ku79ehg83ti2c2kc4uvq5h7h6.apps.googleusercontent.com';
    const REDIRECT_URI = 'https://auth.expo.io/@rayone/authGoogle';
    const RESPONSE_TYPE = 'token';
    const SCOPE = encodeURI('profile email');

    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
    const { type, params } = await AuthSession.startAsync({ authUrl }) as AuthResponse;

    if (type === "success") {
      AsyncStorage.setItem("@AUTH", JSON.stringify(params.access_token));
      authLogin();
    }
  }
    
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem vindo!</Text>
      <Text style={styles.subtitle}>Entre com sua conta do google para ver suas informações</Text>
      <Lottie source={logoGoogle} resizeMode="contain" autoPlay style={{ height: 400 }} loop />
      <Button
        title='Entrar com Google'
        name='logo-google'
        onPress={handleHome}
      />
    </View>
  );
}