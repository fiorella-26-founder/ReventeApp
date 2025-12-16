// src/theme/navigationTheme.ts
import { DarkTheme } from '@react-navigation/native';
import { colors } from './colors';

export const NavigationTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: colors.background,
    text: colors.text,
    primary: colors.primary,
    card: colors.background,
  },
};
