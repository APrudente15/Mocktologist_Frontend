import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import { useAuth } from '../hooks/useAuth';
import { useOverlayPopup } from '../hooks/useOverlayPopup';
import styles from '../style';
import { PopupText } from '../components';
import { useIsFocused } from '@react-navigation/native';

export default function Scan() {
    const { showOverlay, setShowOverlay, showPopup, setShowPopup } = useOverlayPopup();
    const isFocused = useIsFocused()
    const { scannedId, token } = useAuth();

    const handlePopupPress = () => {
        setShowOverlay(false);
        setShowPopup(false);
    };

    const Overlay = () => {
        return <View style={styles.overlay} />;
    };

    const Popup = () => {
        return (
            <View style={styles.popupBox}>
                <TouchableOpacity style={styles.popupButton} onPress={handlePopupPress}>
                    <Text style={styles.popupButtonText}>X</Text>
                </TouchableOpacity>
                <PopupText />
            </View>
        );
    };

    return (
        <ImageBackground source={require('../assets/background.png')} style={styles.background}>
            <View style={styles.container2}>
                {showOverlay && <Overlay />}
                {showPopup && <Popup />}
                <View style={styles.headingContainer}>
                    <Text style={styles.heading}> Mix Diary for {scannedId} </Text>
                </View>
            </View>
        </ImageBackground>
    );
}