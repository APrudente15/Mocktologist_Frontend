import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Landing() {
    const navigation = useNavigation();

    const handleLoginPress = () => {
        navigation.navigate('+ New Drink');
    };

    const handleRegisterPress = () => {
        navigation.navigate('Steps');
    };

    return (
        <ImageBackground source={require("../assets/background.png")} style={styles.background}>
            <View style={styles.container}>
                <TouchableHighlight style={styles.aboutButton} onPress={() => console.log("About pressed")}>
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

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    landingPageText1: {
        color: '#ffffff',
        marginTop: -40,
        fontSize: 48,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    landingPageText2: {
        color: '#ffffff',
        marginTop: 50,
        fontSize: 30,
        textAlign: 'center'
    },
    landingPageImage: {
        flex: 1,
        alignSelf: 'stretch',
        aspectRatio: 1,
        maxWidth: '70%'
    },
    button: {
        width: 200,
        height: 50,
        backgroundColor: '#ED91C8',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginBottom: 30
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 20
    },
    aboutButton: {
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 35,
        right: 30
    },
    aboutText: {
        color: 'white',
        fontSize: 64,
        fontWeight: 'bold',
    },
});
