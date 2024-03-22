import { useEffect, useState, useRef } from 'react'
import { View, Text, ImageBackground, TouchableOpacity, Image, TouchableHighlight, TextInput, Animated } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import { useAuth } from '../hooks/useAuth'
import { useOverlayPopup } from '../hooks/useOverlayPopup';
import { PopupText, Medal, LastDrink, Bartender } from '../components';
import styles from '../style'

export default function Dash() {
    const [active, setActive] = useState(false)
    const [newDrink, setNewDrink] = useState(false);
    const { firstName, vegan } = useAuth();
    const [tasteValue, setTasteValue] = useState(null);
    const [allergenValue, setAllergenValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const { showOverlay, setShowOverlay, showPopup, setShowPopup } = useOverlayPopup();

    const handleNewDrinkPress = () => {
        setShowOverlay(true);
        setNewDrink(true);
        setShowPopup(true);
    }

    const renderLabel = () => {
        if(tasteValue || isFocus) {
            return (
                <Text>Taste Selected</Text>
            )
        }
    }

    const handleAllergenChange = (inputValue) => {
        setAllergenValue(inputValue)
    }

    const handlePopupPress = () => {
        setShowOverlay(false)
        setNewDrink(false)
        setShowPopup(false)
    }

    const Overlay = () => {
        return (
            <View style={styles.overlay} />
        );
    }

    const Popup = () => {
        if (newDrink) {
            const data = {taste: null, allergens: null, vegan: vegan}
            return (
                <View style={styles.popupBox}>
                    <TouchableOpacity style={styles.popupButton} onPress={handlePopupPress}>
                        <Text style={styles.popupButtonText}>X</Text>
                    </TouchableOpacity>
                    {renderLabel()}
                    <Dropdown style={styles.dropDown}
                        placeholderStyle={styles.input.placeholder}
                        selectedTextStyle={styles.input}
                        data={[{label: 'Sweet', value: 'sweet'}, {label: 'Sour', value: 'sour'}]}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Select taste profile' : '...'}
                        value={tasteValue}
                        onChange={item => {
                            setTasteValue(item.value);
                            setIsFocus(false);
                        }}
                    />
                    <TextInput
                        style={styles.allergenInput}
                        placeholder={"Please don't include: \nAnything not to include? (Include dietary preferences and allergies here...)"}
                        placeholderTextColor={styles.input.placeholder.color}
                        value={allergenValue}
                        onChangeText={handleAllergenChange}
                    />
                </View>
            )
        } else {
            return (
                <View style={styles.popupBox}>
                    <TouchableOpacity style={styles.popupButton} onPress={handlePopupPress}>
                        <Text style={styles.popupButtonText}>X</Text>
                    </TouchableOpacity>
                    <PopupText/>
                </View>
            )
        }
    }

    const bartenderAnimation = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(bartenderAnimation, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true
                }),
                Animated.timing(bartenderAnimation, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: true
                })
            ]),
            {
                iterations: -1
            }
        ).start();
    }, []);

    const interpolatedRotateAnimation = bartenderAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: ['-3deg', '3deg']
    });

    const transformStyle = {
        transform: [{ rotate: interpolatedRotateAnimation }]
    };


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
                <TouchableHighlight style={styles.button} underlayColor="#ED91C8" onPress={handleNewDrinkPress}>
                    <Text style={styles.buttonText}> + New Mocktail </Text>
                </TouchableHighlight>
                <Bartender/>
            </View>
        </ImageBackground>
    );
}