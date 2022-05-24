import { StyleSheet } from 'react-native';
import { FONTS } from '../../styles/fonts';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 300,
    backgroundColor: "#EEE",
    borderRadius: 7,
  },
  title: {
    fontSize: 18,
    fontFamily: FONTS.regular,
    marginLeft: 10,
  }
});