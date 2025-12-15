// src/navigation/DrawerNavigator.tsx
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProfileScreen from '../screens/settings/ProfileScreen';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Main" component={TabNavigator} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}
