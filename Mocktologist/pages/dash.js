import { useEffect, useState } from 'react'
import { View, Text, ImageBackground, TouchableOpacity, Image, TouchableHighlight } from "react-native";
import { useAuth } from '../hooks/useAuth'
import { useOverlayPopup } from '../hooks/useOverlayPopup';
import { PopupText, Medal, LastDrink } from '../components';
import styles from '../style'

export default function Dash() {
    const [active, setActive] = useState(false)
    const { firstName } = useAuth();

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
                <PopupText/>
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
                            <Medal/>
                        </View>
                        <View style={styles.dashBox}>
                            <LastDrink/>
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
                        <Medal/>
                    </View>
                    <View style={styles.dashBox}>
                        <LastDrink/>
                    </View>
                </View>
                <Text style={styles.dashText}> Ready to make something new? </Text>
                <TouchableHighlight style={styles.button} underlayColor="#ED91C8">
                    <Text style={styles.buttonText}> + New Mocktail </Text>
                </TouchableHighlight>
                <Image
                    style={styles.bartender}
                    source={require('../assets/bartender.png')}
                />
            </View>
        </ImageBackground>
    );
}