import { StyleSheet, Dimensions } from 'react-native';

const guidelineBaseWidth = 414;
const guidelineBaseHeight = 896;

const { width, height } = Dimensions.get('window')

const horizontalScale = (size) => {
    return (width / guidelineBaseWidth) * size
}
const verticalScale = (size) => {
    return (height / guidelineBaseHeight) * size
}
const moderateScale = (size, factor = 0.5) => {
    return size + (horizontalScale(size) - size) * factor
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    landingPageText1: {
        color: '#ffffff',
        marginTop: -40,
        fontSize: 48,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    landingPageText2: {
        color: '#ffffff',
        marginTop: 50,
        fontSize: 30,
        textAlign: 'center'
    },
    landingPageImage: {
        flex: 1,
        alignSelf: 'stretch',
        aspectRatio: 1,
        maxWidth: '70%'
    },
    button: {
        width: 200,
        height: 50,
        backgroundColor: '#ED91C8',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginBottom: 30
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 'bold'
    },
    aboutButton: {
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 35,
        right: 30
    },
    aboutText: {
        color: 'white',
        fontSize: 64,
        fontWeight: 'bold',
    },
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
    separator: {
        height: 1,
        backgroundColor: 'white',
        marginVertical: 30,
        marginLeft: 20,
        marginRight: 20
    },
    newDrinkItem: {
        fontWeight: 800,
        fontSize: moderateScale(32),
        color: '#ED91C8'
    },
    drawerItemContainer: {
        marginTop: -40,
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
        fontSize: 36,
        fontWeight: 'bold'
    },
    stepsMargin: {
        marginBottom: 10,
    },
    navAboutButton: {
        backgroundColor: 'transparent',
        marginLeft: 20,
        marginTop: 420,
        marginBottom: 20
    },
    navAboutText: {
        color: 'white',
        fontSize: 26,
    },
});

module.exports = styles