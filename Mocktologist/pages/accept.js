import { View, Text, ImageBackground, TouchableOpacity, TextInput, TouchableHighlight, Switch, Image } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import { useOverlayPopup } from '../hooks/useOverlayPopup'
import styles from '../style'
import { PopupText } from "../components";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useChoices } from '../hooks/useChoices'
import { useIsFocused } from "@react-navigation/native";

export default function Accept({ navigation }) {

    const isFocused = useIsFocused()

    const { showOverlay, setShowOverlay, showPopup, setShowPopup } = useOverlayPopup()

    const { selectedTaste, setSelectedTaste, avoids, setAvoids } = useChoices()

    const { vegan, token, userId } = useAuth()

    const [name, setName] = useState("");
    const [profile, setProfile] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [steps, setSteps] = useState([]);
    const [resp, setResp] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (isFocused) {
            setLoading(true)
        }
    }, [isFocused])


    const handleAccept = () => {
        const postDrink = async () => {
            try {
                const options = {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        Authorization: token,
                    },
                    body: JSON.stringify({
                        user: userId,
                        name: name,
                        body: resp,
                        tastes: selectedTaste,
                        vegan: vegan
                    })
                }
                const response = await fetch(`https://mocktologist-backend.onrender.com/drink/accept`, options)
                if (response.ok) {
                    navigation.navigate("Steps")
                    return vegan
                }
                console.log("Failed to accept")
            } catch (error) {
                console.error(error);
            }
        }
        postDrink()
    }

    const handleDecline = () => {
        setLoading(true)
        getDrink()
    }

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
                const data = await response.json()
                setResp(data.body)
                setName(data.name)
                setProfile(data.body[0])
                const i = data.body.findIndex(e => e == "Ingredients required:") + 1
                const j = data.body.findIndex(e => e == "Instructions:")
                setIngredients(data.body.slice(i, j))
                const k = data.body.findIndex(e => e == "Nutritional Info: ")
                setSteps(data.body.slice(j + 1, k))
                setLoading(false)
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

    if (loading) {
        return (
            <ImageBackground source={require("../assets/background.png")} style={styles.background}>
                <View style={styles.container2}>
                    {showOverlay && <Overlay />}
                    {showPopup && <Popup />}
                    <View style={styles.headingContainer}>
                        <Text style={styles.heading}> Loading </Text>
                    </View >
                    <Image
                        source={{ uri: 'https://images.squarespace-cdn.com/content/v1/54aebf00e4b0b4cef10f52f5/1503888838259-WYTJ6W7DEVNVCYV7J3VS/cocktail-shaker.gif?format=500w' }}
                        style={styles.pfp2image}
                    />
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
                    <Text style={styles.heading}> How about this? </Text>
                </View >
                <View style={styles.newBox}>
                    <Text style={styles.headingDrink}> {name} </Text>
                    <Text style={styles.drinkProfile}> {profile} </Text>
                    <View>
                        <Text style={styles.drinkIng}>Ingredients:</Text>
                        {ingredients.map((ingredient, index) => (
                            <Text style={styles.drinkIngList} key={index}>{ingredient}</Text>
                        ))}
                    </View>
                </View>
                <TouchableHighlight style={styles.button} underlayColor="#ED91C8" onPress={handleAccept}>
                    <Text style={styles.buttonText}>Let's Mix!</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button} underlayColor="#ED91C8" onPress={handleDecline}>
                    <Text style={styles.buttonText}> Not feeling it</Text>
                </TouchableHighlight>
            </View>
        </ImageBackground>
    )
}
