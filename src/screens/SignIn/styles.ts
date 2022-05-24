import { StyleSheet } from 'react-native';
import { FONTS } from '../../styles/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF'
  },
  title: {
    fontSize: 28,
    fontFamily: FONTS.bold,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontFamily: FONTS.regular,
    marginHorizontal: 24,
    textAlign: 'center',
    marginBottom: 30,
  }
});