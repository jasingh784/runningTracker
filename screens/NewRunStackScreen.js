import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from './MapScreen';
import NewRun from './NewRun';

const NewRunStack = createStackNavigator();

export default function NewRunStackScreen() {
    return (
        <NewRunStack.Navigator initialRouteName="New Run">
            <NewRunStack.Screen name="New Run" component={NewRun} />
            <NewRunStack.Screen name="Map" component={MapScreen} />
        </NewRunStack.Navigator>
    )
}
