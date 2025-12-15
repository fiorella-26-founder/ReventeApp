// src/navigation/TabNavigator.tsx
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen';
// import SearchScreen from '../screens/Search/SearchScreen';
// import PublishScreen from '../screens/Publish/PublishScreen';
// import ActivityScreen from '../screens/Activity/ActivityScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}/>
      {/* <Tab.Screen name="Search" component={SearchScreen}/>
      <Tab.Screen name="Publish" component={PublishScreen}/>
      <Tab.Screen name="Activity" component={ActivityScreen}/> */}
    </Tab.Navigator>
  );
}
