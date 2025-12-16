// src/navigation/TabNavigator.tsx
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen';
import MyTicketsScreen from '../screens/home/MyTicketsScreen';
import Favoritescreen from '../screens/home/FavoritesScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Inicio" component={HomeScreen} />
      <Tab.Screen name="Mis entradas" component={MyTicketsScreen} />
      <Tab.Screen name="Mis favoritos" component={Favoritescreen} />
    </Tab.Navigator>
  );
}

