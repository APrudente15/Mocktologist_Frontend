import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Landing() {
    const navigation = useNavigation();

    const handleLoginPress = () => {
        navigation.navigate('Dash');
    };

    return (
        <ImageBackground source={require("../assets/background.png")} style={styles.background}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={require("../assets/icon.png")} style={styles.landingPageImage} resizeMode="contain" />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.landingPageText}>A mocktail bar in your pocket.</Text>
                    <Text style={styles.landingPageText}>Simply choose your favourite taste and we'll do the rest.</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableHighlight style={styles.button} underlayColor="#ED91C8" onPress={handleLoginPress}>
                        <Text style={styles.buttonText}>Login</Text>
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
    landingPageText: {
        color: '#ffffff',
        marginTop: 10
    },
    landingPageImage: {
        flex: 1,
        alignSelf: 'stretch',
        aspectRatio: 1,
        maxWidth: '70%'
    },
    button: {
        width: 200,
        height: 40,
        backgroundColor: '#ED91C8',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginBottom: 10
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18
    }
});
