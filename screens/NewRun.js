import React from 'react'
import { View, Text, Button } from 'react-native'

export default function NewRun( { navigation } ) {
    return (
        <View>
            <Text>This screen will be used to start a new run</Text>
            <Button 
                title="Start"
                onPress={() => navigation.navigate('Map')}
            />
        </View>
    )
}
