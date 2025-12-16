// src/theme/theme.ts
import { StyleSheet } from 'react-native';
import { colors } from './colors';
import { fonts } from './font';

export const theme = StyleSheet.create({
  screen: {
    flex: 1,
    color: colors.text,
    padding: 16,
  },
  text: {
    color: colors.text,
    fontFamily: fonts.regular,
    fontSize: 16,
  },
  title: {
    fontFamily: fonts.semibold,
    fontSize: 20,
    color: colors.text,
  },
});
