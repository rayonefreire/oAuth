import React, { useContext, useEffect, useState } from 'react';

import {
  Image,
  Text,
  View
} from 'react-native';
import { Button } from '../../components/Button';
import { Context } from '../../context/auth';
import { styles } from './styles';

type Profile = {
  given_name: string;
  picture: string;
  email: string;
}

export function Home(){
  const [profile, setProfile] = useState({} as Profile);
  const { accessToken, logOut } = useContext(Context);

  async function loadProfile() {
    const response = await fetch(`https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${accessToken}`);
    const userInfo = await response.json();
    setProfile(userInfo);
  }

  useEffect(() => {
    loadProfile();
  },[]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: profile.picture }}
          style={styles.avatar}
        />
        <Text style={styles.title}>Olá, { profile.given_name }</Text>
      </View>

      <Text style={styles.email}>{ profile.email }</Text>

      <View style={styles.footer}>
        <Button
          title='Sair'
          name='power'
          onPress={logOut}
        />
      </View>
    </View>
  );
}