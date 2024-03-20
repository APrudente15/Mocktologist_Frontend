import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons, AntDesign } from '@expo/vector-icons'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { StatusBar, Image, View, TouchableHighlight, Text } from 'react-native';
import { Login, Landing, Dash, Steps, Top, Profile, Diary } from './pages'
import styles from './style.js'

const Drawer = createDrawerNavigator();

const Navigation = () => {

    const headerOptions = ({ navigation }) => ({
        headerTitle: '',
        headerStyle: {
            backgroundColor: '#353535',
            shadowOpacity: 0,
            elevation: 0,
        },
        headerLeft: () => (
            <TouchableHighlight
                underlayColor={'transparent'}
                onPress={() => navigation.openDrawer()}
                style={{ marginLeft: 15, marginTop: 10 }}>
                <MaterialIcons
                    name="menu"
                    size={40}
                    color="white"
                />
            </TouchableHighlight>
        ),
        headerRight: () => (
            <TouchableHighlight
                underlayColor={'transparent'}
                onPress={() => navigation.navigate("Profile")}
                style={{ marginRight: 15, marginTop: 10 }}>
                <AntDesign
                    name="user"
                    size={40}
                    color="white"
                />
            </TouchableHighlight>
        ),
    });

    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="Landing"
                drawerContent={props => <ConditionalDrawerContent {...props} />}
                screenOptions={{
                    drawerStyle: { backgroundColor: 'transparent' },
                }}>
                <Drawer.Screen name="Landing" component={Landing} options={{ headerShown: false }} />
                <Drawer.Screen name="Dashboard" component={Dash} options={headerOptions} />
                <Drawer.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Drawer.Screen name="Steps" component={Steps} options={headerOptions} />
                <Drawer.Screen name="Top Mixes" component={Top} options={headerOptions} />
                <Drawer.Screen name="Mix Diary" component={Diary} options={headerOptions} />
                <Drawer.Screen name="Profile" component={Profile} options={headerOptions} />
            </Drawer.Navigator>
        </NavigationContainer >
    );
};

const ConditionalDrawerContent = ({ state, descriptors, navigation }) => {
    return (
        <DrawerContentScrollView style={styles.drawerContent} scrollEnabled={false}>
            <StatusBar translucent backgroundColor="transparent" />
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
                    <Image source={require("./assets/icon.png")} style={styles.drawerImage} resizeMode="contain" />
                </TouchableOpacity>
            </View>
            <View style={styles.separator} />
            {state.routes.map((route, index) => {
                if (route.name === 'Landing' || route.name === 'Login' || route.name === 'Dashboard') {
                    return null;
                } else {
                    const { options } = descriptors[route.key];
                    const label = options.drawerLabel !== undefined ? options.drawerLabel : route.name;
                    const itemStyle = label === '+ New Drink' ? styles.newDrinkItem : null;
                    const marginStyle1 = label === 'Profile' ? styles.profileMargin : null;
                    const marginStyle2 = label === 'Mix Diary' ? styles.diaryMargin : null;
                    return (
                        <View>
                            <View style={[styles.drawerItemContainer, marginStyle1, marginStyle2]}>
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
            <TouchableHighlight style={styles.navAboutButton} underlayColor="transparent" onPress={() => console.log("About pressed")}>
                <Text style={styles.navAboutText}>About</Text>
            </TouchableHighlight>
            <View style={styles.separator3} />
            <TouchableHighlight style={styles.logoutButton} underlayColor="transparent" onPress={() => navigation.navigate("Landing")}>
                <Text style={styles.logoutText}>Sign Out</Text>
            </TouchableHighlight>
        </DrawerContentScrollView>
    );
};


export default Navigation;
