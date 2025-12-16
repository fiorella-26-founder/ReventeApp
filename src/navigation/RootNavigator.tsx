import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import { NavigationTheme } from '../theme/navigationTheme';

export default function RootNavigator() {
  const isAuthenticated = true;

  return (
    <NavigationContainer theme={NavigationTheme}>
      {isAuthenticated ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
