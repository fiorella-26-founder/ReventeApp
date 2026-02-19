// src/theme/theme.ts
import { StyleSheet } from 'react-native';
import { colors } from './colors';
import { fonts } from './font';

export const theme = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 16,
  },
  text: {
    color: colors.text,
    fontFamily: fonts.regular,
    fontSize: 16,
  },
  textSemibold: {
    color: colors.text,
    fontFamily: fonts.semibold,
    fontSize: 16,
  },
  title: {
    fontFamily: fonts.semibold,
    fontSize: 20,
    color: colors.text,
  },
  loginTitle: {
    fontFamily: fonts.bold,
    fontSize: 26,
    color: colors.text,
  }
});
