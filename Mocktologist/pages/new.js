import { View, Text, ImageBackground } from "react-native";
import styles from '../style'

export default function New() {
    return (
        <ImageBackground source={require("../assets/background.png")} style={styles.background}>
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.heading}> New </Text>
                </View>
            </View>
        </ImageBackground>
    )
}
