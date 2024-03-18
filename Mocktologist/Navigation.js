import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'; // Import DrawerContentScrollView
import { Text, View, StyleSheet } from 'react-native';
import Landing from './pages/landing.js';
import Dash from './pages/dash.js';
import Steps from './pages/steps.js';
import Leaderboard from './pages/leaderboard.js';

const Drawer = createDrawerNavigator();

const Navigation = () => {

    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Landing" drawerContent={props => <ConditionalDrawerContent {...props} />}>
                <Drawer.Screen name="Landing" component={Landing} options={{ headerShown: false }} />
                <Drawer.Screen name="Dash" component={Dash} options={{ headerTitle: '' }} />
                <Drawer.Screen name="Steps" component={Steps} options={{ headerTitle: '' }} />
                <Drawer.Screen name="Leaderboard" component={Leaderboard} options={{ headerTitle: '' }} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

const ConditionalDrawerContent = ({ state, descriptors, navigation }) => {
    return (
        <DrawerContentScrollView style={styles.drawerContent}>
            {state.routes.map((route, index) => {
                if (route.name === 'Landing') {
                    return null;
                } else {
                    const { options } = descriptors[route.key];
                    const label = options.drawerLabel !== undefined ? options.drawerLabel : route.name;
                    return (
                        <DrawerItem
                            label={label}
                            key={route.key}
                            onPress={() => navigation.navigate(route.name)}
                        />
                    );
                }
            })}
        </DrawerContentScrollView>
    );
};

const styles = StyleSheet.create({
    drawerContent: {
        marginTop: 20
    }
});

export default Navigation;
