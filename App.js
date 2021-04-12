import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountScreen from './screens/AccountScreen';
import RouteScreen from './screens/RouteScreen';
import NewRunStackScreen from './screens/NewRunStackScreen';

const Tab = createBottomTabNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="New Run" component={NewRunStackScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
        <Tab.Screen name="Routes" component={RouteScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

