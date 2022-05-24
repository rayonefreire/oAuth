import { StyleSheet } from 'react-native';
import { COLORS } from '../../styles/colors';
import { FONTS } from '../../styles/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: FONTS.bold,
    marginLeft: 10,
  },
  email: {
    fontSize: 16,
    fontFamily: FONTS.regular,
    color: COLORS.gray,
    marginTop: 10
  },
  footer: {
    marginTop: 70
  }
});