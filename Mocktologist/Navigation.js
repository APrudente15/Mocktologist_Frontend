import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'; // Import DrawerContentScrollView
import { StyleSheet, StatusBar, Image, View, TouchableHighlight, Text } from 'react-native';
import Landing from './pages/landing.js';
import Dash from './pages/dash.js';
import Steps from './pages/steps.js';
import Leaderboard from './pages/leaderboard.js';

const Drawer = createDrawerNavigator();

const Navigation = () => {

    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Landing" drawerContent={props => <ConditionalDrawerContent {...props} />} screenOptions={{ drawerStyle: { backgroundColor: 'transparent' } }}>
                <Drawer.Screen name="Landing" component={Landing} options={{ headerShown: false }} />
                <Drawer.Screen name="+ New Drink" component={Dash} options={{ headerTitle: '' }} />
                <Drawer.Screen name="Steps" component={Steps}
                    options={{
                        headerTitle: '',
                        drawerLabelStyle: { color: 'red' },
                        drawerActiveBackgroundColor: 'green',
                        drawerInactiveBackgroundColor: 'blue',
                    }}
                />
                <Drawer.Screen name="Leaderboard" component={Leaderboard} options={{ headerTitle: '' }} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

const ConditionalDrawerContent = ({ state, descriptors, navigation }) => {
    return (
        <DrawerContentScrollView style={styles.drawerContent} scrollEnabled={false}>
            <StatusBar translucent backgroundColor="transparent" />
            <View style={styles.container}>
                <Image source={require("./assets/icon.png")} style={styles.drawerImage} resizeMode="contain" />
            </View>
            <View style={styles.separator} />
            {state.routes.map((route, index) => {
                if (route.name === 'Landing') {
                    return null;
                } else {
                    const { options } = descriptors[route.key];
                    const label = options.drawerLabel !== undefined ? options.drawerLabel : route.name;
                    const itemStyle = label === '+ New Drink' ? styles.newDrinkItem : null;
                    const marginStyle = label === 'Steps' ? styles.stepsMargin : null;
                    return (
                        <View>
                            <View style={[styles.drawerItemContainer, marginStyle]}>
                                <DrawerItem
                                    label={label}
                                    key={route.key}
                                    onPress={() => navigation.navigate(route.name)}
                                    labelStyle={[styles.drawerItemLabel, itemStyle]}
                                />
                            </View>
                            {label === '+ New Drink' && <View style={styles.separator2} />}
                        </View>
                    );
                }
            })}
            <TouchableHighlight style={styles.aboutButton} onPress={() => console.log("About pressed")}>
                <Text style={styles.aboutText}>About</Text>
            </TouchableHighlight>
            <View style={styles.separator3} />
            <TouchableHighlight style={styles.logoutButton} onPress={() => console.log("Sign out pressed")}>
                <Text style={styles.logoutText}>Sign Out</Text>
            </TouchableHighlight>
        </DrawerContentScrollView>
    );
};

const styles = StyleSheet.create({
    drawerContent: {
        backgroundColor: '#353535',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        borderRightWidth: 5,
        borderTopWidth: 5,
        borderBottomWidth: 5,
        borderColor: '#ED91C8',
        flex: 1,
    },
    drawerItemLabel: {
        color: 'white',
    },
    drawerImage: {
        width: 120,
        height: 120,
    },
    container: {
        alignItems: 'center',
    },
    separator: {
        height: 1,
        backgroundColor: 'white',
        marginVertical: 30,
        marginLeft: 20,
        marginRight: 20
    },
    newDrinkItem: {
        fontWeight: 800,
        fontSize: 38,
        color: '#ED91C8'
    },
    drawerItemContainer: {
        marginTop: -40
    },
    separator2: {
        height: 1,
        backgroundColor: 'white',
        marginVertical: 0,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 50
    },
    separator3: {
        height: 1,
        backgroundColor: 'white',
        marginLeft: 20,
        marginRight: 20,
    },
    logoutButton: {
        backgroundColor: 'transparent',
        marginLeft: 20,
        marginTop: 10
    },
    logoutText: {
        color: 'white',
        fontSize: 38,
        fontWeight: 'bold'
    },
    stepsMargin: {
        marginBottom: 10,
    },
    aboutButton: {
        backgroundColor: 'transparent',
        marginLeft: 20,
        marginTop: 420,
        marginBottom: 20
    },
    aboutText: {
        color: 'white',
        fontSize: 38,
    },
});


export default Navigation;
