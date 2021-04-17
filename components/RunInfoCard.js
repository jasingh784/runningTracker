import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Card } from 'react-native-paper';

export default function RunInfoCard() {
    return (
        <View style={styles.cardContainer}>
            <Card style={styles.card}>
                <View style={styles.cardRow1}>
                <View style={styles.textView1}><Text style={styles.cardText}>04/14/2021</Text></View>
                <View style={styles.textView}><Text style={styles.cardText}>{5} Miles</Text></View>
                </View>
                <View style={styles.cardRow2}>
                <View style={styles.textView1}><Text style={styles.cardText}>2:02 Hours</Text></View>
                <View style={styles.textView}><Text style={styles.cardText}>2.5 Miles/Hour</Text></View>
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        paddingHorizontal: 8,
        paddingVertical: 6,
    },
    card: {
        
    },
    cardRow1: {
      flexDirection: "row",
      justifyContent: "space-between",
      borderBottomWidth: 1,
      borderBottomColor: 'black',
      borderStyle: "dashed",
      marginVertical: 2,
    },
    cardRow2: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginVertical: 2,
    },
    textView1: {
      borderRightWidth: 1,
      borderStyle: "dashed",
      flex: 1,
    },
    textView: {
      flex: 1,
    },
    cardText: {
      margin: 10,
    }
  });
