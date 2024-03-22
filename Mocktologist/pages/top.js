import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import { useAuth } from '../hooks/useAuth';
import { useOverlayPopup } from '../hooks/useOverlayPopup';
import styles from '../style';
import { DrinkThumbnail, PopupText } from '../components';

export default function Diary() {
    const { showOverlay, setShowOverlay, showPopup, setShowPopup, showThumbnailPopup, setShowThumbnailPopup } = useOverlayPopup();
    const { userId, token } = useAuth();
    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        setDrinks([])
        const getTop3Drinks = async () => {
            if(!token){
                return
            }
            try {
                const options = {
                    method: 'GET',
                    headers: {
                        Authorization: token,
                    },
                };
                const response = await fetch(`https://mocktologist-backend.onrender.com/drink/top/${userId}`, options);
                console.log(response)
                if (!response.ok) {
                    console.error('Cannot get drinks.');
                    return;
                }
                const data = await response.json();
                setDrinks(data);
            } catch (error) {
                console.error('Error fetching drinks:', error);
            }
        };
        getTop3Drinks();
    }, [token]);

    const handlePopupPress = () => {
        setShowOverlay(false);
        setShowPopup(false);
        setShowThumbnailPopup(false);
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

    const ThumbnailPopup = () => {
        return (
          <View style={styles.popupBox}>
            <TouchableOpacity style={styles.popupButton} onPress={handlePopupPress}>
              <Text style={styles.popupButtonText}>X</Text>
            </TouchableOpacity>
          </View>
        );
    };

    const renderDrinkItem = ({ item, index }) => (
        <DrinkThumbnail  index={index} type="ranking" body={item.body} image={item.image} name={item.name} rating={item.rating} tastes={item.tastes} vegan={item.vegan} />
    );

    return (
        <ImageBackground source={require('../assets/background.png')} style={styles.background}>
            <View style={styles.container2}>
                {showOverlay && <Overlay />}
                {showPopup && <Popup />}
                {showThumbnailPopup && <ThumbnailPopup />}
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
            </View>
        </ImageBackground>
    );
}