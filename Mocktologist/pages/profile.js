import { View, Text, ImageBackground, TextInput, TouchableHighlight, TouchableOpacity, Switch } from "react-native";
import { useAuth } from '../hooks/useAuth'
import { useOverlayPopup } from "../hooks/useOverlayPopup";
import styles from '../style'
import { useEffect, useState } from "react";

export default function Profile() {
    const { token, userid } = useAuth()
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [vegan, setVegan] = useState(false)
    const [systemMessage, setSystemMessage] = useState("")

    const handleFirstNameChange = (inputText) => {
        setFirstName(inputText);
    }

    const handleLastNameChange = (inputText) => {
        setLastName(inputText);
    }

    const handleEmailChange = (inputText) => {
        setEmail(inputText);
    }

    const toggleVegan = () => {
        setVegan(previousValue => !previousValue);
    };

    const updateUserDetails = async () => {
        try {
            const options = {
                method: "PATCH",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: token
                },
                body: JSON.stringify({
                    fname: firstName,
                    lname: lastName,
                    email: email,
                    vegan: vegan,
                }),
            }
            const response = await fetch(`https://mocktologist-backend.onrender.com/user/${userid}`, options)
            if (!response.ok) {
                setSystemMessage("Could not update user details.");
                setTimeout(() => {
                    setSystemMessage("");
                }, 3000);
                return;
            }
            setSystemMessage("User details updated.");
            setTimeout(() => {
                setSystemMessage("");
            }, 3000);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await fetch(`https://mocktologist-backend.onrender.com/user/${token}`)
                if (!response.ok) {
                    setErrorMessage("Failed to fetch user details. Please refresh the page.")
                }
                const data = await response.json()
                setFirstName(data.fname)
                setLastName(data.lname)
                setEmail(data.email)
                setVegan(data.vegan)
            } catch (error) {
                console.error(error);
            }
        }
        fetchUserDetails()
    }, [token])

    const { showOverlay, setShowOverlay, showPopup, setShowPopup } = useOverlayPopup();

    const handlePopupPress = () => {
        setShowOverlay(false)
        setShowPopup(false)
    }

    const Overlay = () => {
        return (
            <View style={styles.overlay} />
        );
    }

    const Popup = () => {
        return (
            <View style={styles.popupBox}>
                <TouchableOpacity style={styles.popupButton} onPress={handlePopupPress}>
                    <Text style={styles.popupButtonText}>X</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <ImageBackground source={require("../assets/background.png")} style={styles.background}>
            <View style={styles.container}>
                {showOverlay && <Overlay />}
                {showPopup && <Popup />}
                <View style={styles.textContainer}>
                    <Text style={styles.heading}> Profile </Text>
                </View>
                <View style={styles.nameContainer}>
                    <TextInput
                        style={styles.input}
                        value={firstName}
                        onChangeText={handleFirstNameChange}
                        placeholder="First Name"
                    />
                    <TextInput
                        style={styles.input}
                        value={lastName}
                        onChangeText={handleLastNameChange}
                        placeholder="Last Name"
                    />
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={handleEmailChange}
                        placeholder="Email"
                        keyboardType="email-address"
                    />
                    <View style={styles.switchRow}>
                        <Text style={styles.switchLabel}>Vegan:</Text>
                        <Switch
                            value={vegan}
                            onValueChange={toggleVegan}
                            thumbColor={vegan ? '#ffffff' : '#ffffff'}
                            trackColor={{ false: '#ff0000', true: '#ED91C8' }}
                        />
                    </View>
                </View>
                <View style={styles.buttonContainer2}>
                    <TouchableHighlight style={styles.button} underlayColor="#ED91C8" onPress={() => updateUserDetails()}>
                        <Text style={styles.buttonText}> Update Details </Text>
                    </TouchableHighlight>
                </View>
                <Text style={styles.errorText}>{systemMessage}</Text>
            </View>
        </ImageBackground>
    )
}
