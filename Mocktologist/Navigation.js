import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'; // Import DrawerContentScrollView
import { StatusBar, Image, View, TouchableHighlight, Text } from 'react-native';
import styles from './style.js'
import Login from './pages/login.js'
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
                <Drawer.Screen name="Login" component={Login} options={{ headerShown: false }} />
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
                if (route.name === 'Landing' || route.name === 'Login') {
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
            <TouchableHighlight style={styles.navAboutButton} onPress={() => console.log("About pressed")}>
                <Text style={styles.navAboutText}>About</Text>
            </TouchableHighlight>
            <View style={styles.separator3} />
            <TouchableHighlight style={styles.logoutButton} onPress={() => navigation.navigate("Landing")}>
                <Text style={styles.logoutText}>Sign Out</Text>
            </TouchableHighlight>
        </DrawerContentScrollView>
    );
};


export default Navigation;
