import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountScreen from './screens/AccountScreen';
import RouteScreen from './screens/RouteScreen';
import NewRunStackScreen from './screens/NewRunStackScreen';

import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDrA7w5ohDIeww_hrw_FhqX-mhAbiEHMcA",
  authDomain: "runningtracker-818ae.firebaseapp.com",
  projectId: "runningtracker-818ae",
  storageBucket: "runningtracker-818ae.appspot.com",
  messagingSenderId: "175313089708",
  appId: "1:175313089708:web:7a10911a4612f3b05edb09",
  measurementId: "G-YYP1WGTP3Y"
};

firebase.initializeApp(firebaseConfig);

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

