import React from 'react';

import {
    Text,
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native';

import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';

type Props = TouchableOpacityProps & {
  title: string;
  name: React.ComponentProps<typeof Ionicons>['name']
}

export function Button({ title, name, ...rest } : Props){
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.5}
      {...rest}
    >
      <Ionicons name={name} size={24} color="black" />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}