import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import { NavigationTheme } from '../theme/navigationTheme';
import EventDetailScreen from '../screens/home/EventDetailScreen';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  const isAuthenticated = false;

  return (
    <NavigationContainer theme={NavigationTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          <>
            <Stack.Screen name="App" component={DrawerNavigator} />
            <Stack.Screen
              name="EventDetail"
              component={EventDetailScreen}
            />
          </>
        ) : (
          <Stack.Screen name="Auth" component={AuthNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
