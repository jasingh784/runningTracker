import 'react-native-gesture-handler'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountScreen from './screens/AccountScreen';
import RunsListScreen from './screens/RunsListScreen';
import NewRunStackScreen from './screens/NewRunStackScreen';
import { firebaseConfig } from './config';

// import firebase from 'firebase/app';
// import "firebase/auth";
// import "firebase/firestore";

// firebase.initializeApp(firebaseConfig);

// const dbh = firebase.firestore();

// const runsRef = dbh.collection('Runs');
// const doc = runsRef.get()
// .then(doc => console.log(doc.data()))

const Tab = createBottomTabNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="New Run" component={NewRunStackScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
        <Tab.Screen name="Runs List" component={RunsListScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

