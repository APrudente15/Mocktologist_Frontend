import React from 'react'
import { Text, View } from 'react-native'
import styles from '../style'

const StepItem = ({ steps }) => {
    return (
        <View style={styles.stepBox}>
            <Text style={styles.stepText}>{steps}</Text>
        </View>
    )
}

export default StepItem