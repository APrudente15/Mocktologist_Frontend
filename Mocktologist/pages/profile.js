import { View, Text, ImageBackground } from "react-native";
import styles from '../style'

export default function Profile() {
    return (
        <ImageBackground source={require("../assets/background.png")} style={styles.background}>
            <View style={styles.container}>
                <Text> Profile </Text>
            </View>
        </ImageBackground>
    );
}