import { useEffect, useState, useRef } from 'react'
import { View, Text, ImageBackground, TouchableOpacity, Image, TouchableHighlight, TextInput, Animated } from "react-native";
import { useAuth } from '../hooks/useAuth'
import { useChoices } from '../hooks/useChoices';
import { useOverlayPopup } from '../hooks/useOverlayPopup';
import { PopupText, Medal, LastDrink, Bartender } from '../components';
import styles from '../style'

export default function Dash({ navigation }) {
    const [active, setActive] = useState(false)
    const [newDrink, setNewDrink] = useState(false);
    const { firstName, vegan } = useAuth();

    const { showOverlay, setShowOverlay, showPopup, setShowPopup } = useOverlayPopup();

    const handleNewDrinkPress = () => {
        navigation.navigate("New")
    }

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
                <PopupText />
            </View>
        )
    }

    if (active) {
        return (
            <ImageBackground source={require("../assets/background.png")} style={styles.background}>
                <View style={styles.container2}>
                    {showOverlay && <Overlay />}
                    {showPopup && <Popup />}
                    <View style={styles.headingContainer}>
                        <Text style={styles.heading}> How's it going, {firstName}? </Text>
                    </View>
                    <View style={styles.boxCont}>
                        <View style={styles.dashBox}>
                            <Medal />
                        </View>
                        <View style={styles.dashBox}>
                            <LastDrink />
                        </View>
                    </View>
                </View>
            </ImageBackground>
        )
    }

    return (
        <ImageBackground source={require("../assets/background.png")} style={styles.background}>
            <View style={styles.container2}>
                {showOverlay && <Overlay />}
                {showPopup && <Popup />}
                <View style={styles.headingContainer}>
                    <Text style={styles.heading}> How's it going, {firstName}? </Text>
                </View>
                <View style={styles.boxCont}>
                    <View style={styles.dashBox}>
                        <Medal />
                    </View>

                    <LastDrink />
                </View>
                <Text style={styles.dashText}> Ready to make something new? </Text>
                <TouchableHighlight style={styles.button} underlayColor="#ED91C8" onPress={handleNewDrinkPress}>
                    <Text style={styles.buttonText}> + New Mocktail </Text>
                </TouchableHighlight>
                <Bartender />
            </View>
        </ImageBackground>
    );
}