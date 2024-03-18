import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NavigationMenu = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.menu}>
            <Button
                title="Go to Landing"
                onPress={() => navigation.navigate('Landing')}
            />
            <Button
                title="Go to Dash"
                onPress={() => navigation.navigate('Dash')}
            />
            <Button
                title="Go to Leaderboard"
                onPress={() => navigation.navigate('Leaderboard')}
            />
            <Button
                title="Go to Steps"
                onPress={() => navigation.navigate('Steps')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    menu: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 20,
    },
});

export default NavigationMenu;