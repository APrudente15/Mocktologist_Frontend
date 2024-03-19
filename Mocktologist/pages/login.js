import { useAuth } from '../hooks/useAuth'
import { View, Text, ImageBackground, TouchableHighlight, TextInput } from "react-native";
import styles from '../style'

export default function Login() {
    const { login, logout } = useAuth()
    return (
        <ImageBackground source={require("../assets/background.png")} style={styles.background}>
            <View style={styles.container}>
                <TouchableHighlight style={styles.aboutButton} underlayColor="transparent" onPress={() => console.log("About pressed")}>
                    <Text style={styles.aboutText}>?</Text>
                </TouchableHighlight>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <TouchableHighlight style={styles.button} underlayColor="#ED91C8" onPress={() => login()}>
                        <Text style={styles.buttonText}> Login </Text>
                    </TouchableHighlight>
                </View>
            </View>
        </ImageBackground>
    );
}