import { View, Text, ImageBackground, TouchableOpacity, TextInput, TouchableHighlight, Switch } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import { useOverlayPopup } from '../hooks/useOverlayPopup'
import styles from '../style'
import { PopupText } from "../components";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useChoices } from '../hooks/useChoices'
import { useIsFocused } from "@react-navigation/native";

export default function Accept() {

    const isFocused = useIsFocused()

    const { showOverlay, setShowOverlay, showPopup, setShowPopup } = useOverlayPopup()

    const { selectedTaste, setSelectedTaste, avoids, setAvoids } = useChoices()

    const { vegan, token } = useAuth()

    const getDrink = async () => {
        try {
            const options = {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: token,
                    tastes: selectedTaste,
                    vegan: vegan,
                    allergens: avoids
                }
            }
            const response = await fetch(`https://mocktologist-backend.onrender.com/drink`, options)
            if (response.ok) {
                console.log(await response.json())
            }
        } catch (error) {
            console.error(error);
        }
    }


    useEffect(() => {
        if (isFocused) {
            getDrink()
        }
    }, [isFocused])

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

    return (
        <ImageBackground source={require("../assets/background.png")} style={styles.background}>
            <View style={styles.container2}>
                {showOverlay && <Overlay />}
                {showPopup && <Popup />}
                <View style={styles.headingContainer}>
                    <Text style={styles.heading}> How about this? </Text>
                </View >
            </View>
        </ImageBackground>
    )
}
