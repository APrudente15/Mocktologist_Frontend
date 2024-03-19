import React from 'react';
import { Text, View, Image, TouchableHighlight, ImageBackground } from 'react-native';
import styles from '../style'
import { useNavigation } from '@react-navigation/native';

export default function Landing() {
    const navigation = useNavigation();

    const handleLoginPress = () => {
        navigation.navigate('Login');
    };

    const handleRegisterPress = () => {
        navigation.navigate('Steps');
    };

    return (
        <ImageBackground source={require("../assets/background.png")} style={styles.background}>
            <View style={styles.container}>
                <TouchableHighlight style={styles.aboutButton} underlayColor="transparent" onPress={() => console.log("About pressed")}>
                    <Text style={styles.aboutText}>?</Text>
                </TouchableHighlight>
                <View style={styles.imageContainer}>
                    <Image source={require("../assets/icon.png")} style={styles.landingPageImage} resizeMode="contain" />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.landingPageText1}> A mocktail bar in your pocket. </Text>
                    <Text style={styles.landingPageText2}> Simply choose your favourite taste and we'll do the rest. </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableHighlight style={styles.button} underlayColor="#ED91C8" onPress={handleLoginPress}>
                        <Text style={styles.buttonText}> Login </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.button} underlayColor="#ED91C8" onPress={handleRegisterPress}>
                        <Text style={styles.buttonText}> Register </Text>
                    </TouchableHighlight>
                </View>
            </View>
        </ImageBackground>
    );
}

