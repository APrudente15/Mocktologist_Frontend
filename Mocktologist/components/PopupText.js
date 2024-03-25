import React from 'react'
import { View, Text } from 'react-native'
import styles from '../style'

function PopupText() {
    return (
        <View style={[styles.container2, { top: 10 }]}>
            <Text style={styles.heading}>Welcome to Mocktology!</Text>
            <Text style={styles.landingPageText2}>Your all-in-one app to get creative and make some delicious mocktails.</Text>
            <Text style={styles.landingPageText2}>Choose your preferences and our bartender will deliver a delicious recipe straight to your phone.</Text>
            <Text style={styles.landingPageText2}>Happy creating!</Text>
            <Text style={styles.landingPageText2}>With love: Tom, Zeph, Henrie, Jess, Jelly, Cem ❤️</Text>
        </View>
    )
}

export default PopupText