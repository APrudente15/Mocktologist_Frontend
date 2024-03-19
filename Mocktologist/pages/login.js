import { useAuth } from '../hooks/useAuth'
import { View, Text, ImageBackground, TouchableHighlight, TextInput } from "react-native";
import styles from '../style'

export default function Login() {
    const { login, logout } = useAuth()
    return (
        <ImageBackground source={require("../assets/background.png")} style={styles.background}>
            <View style={styles.container}>
                <View style={styles.textContainer2}>
                    <Text style={styles.heading}> Existing User Login </Text>
                </View>
                <View style={styles.inputContainer1}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor={styles.input.placeholder.color}
                    />
                </View>
                <View style={styles.inputContainer2}>
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry={true}
                        placeholderTextColor={styles.input.placeholder.color}
                    />
                </View>
                <View style={styles.buttonContainer2}>
                    <TouchableHighlight style={styles.button} underlayColor="#ED91C8" onPress={() => login()}>
                        <Text style={styles.buttonText}> Login </Text>
                    </TouchableHighlight>
                </View>
            </View>
        </ImageBackground>
    );
}
