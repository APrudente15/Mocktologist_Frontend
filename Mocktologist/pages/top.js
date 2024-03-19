import { View, Text, ImageBackground } from "react-native";
import styles from '../style'

export default function Top() {
    return (
        <ImageBackground source={require("../assets/background.png")} style={styles.background}>
            <View style={styles.container}>
                <Text> Top Mixes </Text>
            </View>
        </ImageBackground>
    );
}