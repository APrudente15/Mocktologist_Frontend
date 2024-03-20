import { useState, useEffect } from 'react'
import { View, Text, ImageBackground } from "react-native";
import { useAuth } from '../hooks/useAuth'
import styles from '../style'

export default function Dash() {
    const { firstName } = useAuth();

    return (
        <ImageBackground source={require("../assets/background.png")} style={styles.background}>
            <View style={styles.container}>
                <View style={styles.headingContainer}>
                    <Text style={styles.heading}> How's it going, {firstName}? </Text>
                </View>
            </View>
        </ImageBackground>
    );
}