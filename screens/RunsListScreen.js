import React from 'react'
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native'
import RunInfoCard from '../components/RunInfoCard'

export default function RunsListScreen() {
    return (
        <SafeAreaView style={styles.container}>
           <RunInfoCard />
           <RunInfoCard />
           <RunInfoCard />
           <RunInfoCard />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
