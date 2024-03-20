import { View, Text, ImageBackground, TouchableHighlight, TextInput } from "react-native";
import styles from '../style'
import { useState } from 'react';

export default function Register({ navigation }) {
    const [ firstName, setFirstName ] = useState("")
    const [ lastName, setLastName ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    const handleFirstNameChange = (inputText) => {
        setFirstName(inputText)
    }

    const handleLastNameChange = (inputText) => {
        setPassword(inputText)
    }

    const handleRegister = (firstName, lastName, email, password) => {
        try {
            if(email === "" || password === ""){
                setErrorMessage("Email or password missing.")
                setTimeout(() => {
                    setErrorMessage("")
                }, 3000)
                return
            }
        } catch (error) {
            
        }
    }

    return (
        <ImageBackground source={require("../assets/background.png")} style={styles.background}>
            <View style={styles.container}>
                <View style={styles.textContainer2}>
                    <Text style={styles.heading}> Register </Text>
                </View>
                <View style={styles.inputContainer1}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor={styles.input.placeholder.color}
                        value={email}
                        onChange={handleEmailChange}
                    />
                </View>
                <View style={styles.inputContainer2}>
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry={true}
                        placeholderTextColor={styles.input.placeholder.color}
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </View>
                <View style={styles.buttonContainer2}>
                    <TouchableHighlight style={styles.button} underlayColor="#ED91C8" onPress={() => handleRegister(email, password)}>
                        <Text style={styles.buttonText}> Login </Text>
                    </TouchableHighlight>
                </View>
                <Text style={styles.errorText}>{errorMessage}</Text>
            </View>
        </ImageBackground>
    );
}
