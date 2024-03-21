import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { useOverlayPopup } from '../hooks/useOverlayPopup'
import styles from '../style'

export default function Steps() {
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
                    <Text style={styles.heading}> Recipe </Text>
                </View>
            </View>
        </ImageBackground>
    );
}