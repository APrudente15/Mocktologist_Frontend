import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, FlatList, TouchableHighlight, Image } from 'react-native';
import { useAuth } from '../hooks/useAuth';
import { useOverlayPopup } from '../hooks/useOverlayPopup';
import styles from '../style';
import { DrinkThumbnail, PopupText } from '../components';
import { useIsFocused } from '@react-navigation/native';
import QRCode from 'react-native-qrcode-svg';
import * as ImagePicker from 'expo-image-picker'

export default function Top() {
    const { showOverlay, setShowOverlay, showPopup, setShowPopup } = useOverlayPopup();
    const { userId, token } = useAuth();
    const isFocused = useIsFocused()
    const [drinks, setDrinks] = useState([]);
    const [showQR, setShowQR] = useState(false)

    const QRCodeGenerator = ({ userIdStr }) => {
        return (
            <View style={styles.qr}>
                <Text style={styles.heading2}>Share with Friends!</Text>
                <View style={styles.code}>
                    <QRCode value={userIdStr} />
                </View>
            </View>
        );
    };

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: false,
        });
        if (!result.cancelled) {
            try {

            } catch (error) {
                console.error('Error uploading image:', error);
            }
        }
    };

    useEffect(() => {
        const getTop3Drinks = async () => {
            const options = {
                method: 'GET',
                headers: {
                    Authorization: token,
                },
            };
            const response = await fetch(`https://mocktologist-backend.onrender.com/drink/top/${userId}`, options);
            if (!response.ok) {
                console.error('Cannot get drinks.');
                return;
            }
            const data = await response.json();
            setDrinks(data);
        };
        if (isFocused) {
            getTop3Drinks();
        }
    }, [isFocused]);

    const handlePopupPress = () => {
        setShowOverlay(false);
        setShowPopup(false);
        setShowQR(false)
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

    const PopupQR = () => {
        return (
            <View style={styles.popupBox}>
                <TouchableOpacity style={styles.popupButton} onPress={handlePopupPress}>
                    <Text style={styles.popupButtonText}>X</Text>
                </TouchableOpacity>
                <QRCodeGenerator userIdStr={String(userId)} />
            </View>
        );
    };

    const renderDrinkItem = ({ item, index }) => (
        <DrinkThumbnail index={index} type="ranking" body={item.body} image={item.image} name={item.name} rating={item.rating} tastes={item.tastes} vegan={item.vegan} />
    );

    return (
        <ImageBackground source={require('../assets/background.png')} style={styles.background}>
            <View style={styles.container2}>
                {showOverlay && <Overlay />}
                {showPopup && <Popup />}
                {showQR && <PopupQR />}
                <View style={styles.headingContainer}>
                    <Text style={styles.heading}> Top Mixes </Text>
                </View>
                <FlatList
                    data={drinks}
                    renderItem={renderDrinkItem}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={1}
                    contentContainerStyle={{ paddingBottom: 20 }}
                />
                <TouchableHighlight style={styles.buttonOp} underlayColor="#ED91C8" onPress={() => { setShowOverlay(true), setShowQR(true) }}>
                    <Text style={styles.buttonText}> QR code</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.buttonOp} underlayColor="#ED91C8" onPress={pickImage}>
                    <Text style={styles.buttonText}> Scan QR Code</Text>
                </TouchableHighlight>
            </View>
        </ImageBackground >
    );
}