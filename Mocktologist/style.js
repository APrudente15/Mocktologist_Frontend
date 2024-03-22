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
    container2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    imageContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: verticalScale(60)
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer2: {
        marginTop: verticalScale(20),
    },
    heading: {
        color: 'white',
        fontSize: moderateScale(32),
        fontWeight: 'bold',
    },
    landingPageText1: {
        color: '#ffffff',
        marginTop: verticalScale(-40),
        fontSize: moderateScale(32),
        textAlign: 'center',
        fontWeight: 'bold'
    },
    landingPageText2: {
        color: '#ffffff',
        marginTop: verticalScale(50),
        fontSize: moderateScale(24),
        marginHorizontal: horizontalScale(10),
        textAlign: 'center'
    },
    landingPageImage: {
        flex: 1,
        alignSelf: 'stretch',
        aspectRatio: 1,
        maxWidth: '70%'
    },
    button: {
        width: horizontalScale(200),
        height: verticalScale(50),
        backgroundColor: '#ED91C8',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: moderateScale(20),
        marginBottom: verticalScale(30),
    },
    buttonText: {
        color: '#ffffff',
        fontSize: moderateScale(20),
        fontWeight: 'bold'
    },
    aboutButton: {
        backgroundColor: 'transparent',
        position: 'absolute',
        top: verticalScale(50),
        right: horizontalScale(30),
    },
    aboutText: {
        color: 'white',
        fontSize: moderateScale(48),
        fontWeight: 'bold',
    },
    backText: {
        color: 'white',
        fontSize: moderateScale(48),
        fontWeight: 'bold',
    },
    drawerContent: {
        backgroundColor: '#353535',
        borderTopRightRadius: moderateScale(20),
        borderBottomRightRadius: moderateScale(20),
        borderRightWidth: moderateScale(5),
        borderTopWidth: moderateScale(5),
        borderBottomWidth: moderateScale(5),
        borderColor: '#ED91C8',
        flex: 1,
    },
    drawerItemLabel: {
        color: 'white',
    },
    drawerImage: {
        width: horizontalScale(120),
        height: verticalScale(120),
    },
    separator: {
        height: verticalScale(1),
        backgroundColor: 'white',
        marginVertical: verticalScale(30),
        marginLeft: verticalScale(20),
        marginRight: horizontalScale(20),
    },
    newDrinkItem: {
        fontWeight: 800,
        fontSize: moderateScale(32),
        color: '#ED91C8'
    },
    drawerItemContainer: {
        marginTop: verticalScale(-40),
    },
    separator2: {
        height: verticalScale(1),
        backgroundColor: 'white',
        marginVertical: verticalScale(0),
        marginLeft: horizontalScale(20),
        marginRight: horizontalScale(20),
        marginBottom: horizontalScale(50),
    },
    separator3: {
        height: verticalScale(1),
        backgroundColor: 'white',
        marginLeft: horizontalScale(20),
        marginRight: horizontalScale(20),
    },
    logoutButton: {
        backgroundColor: 'transparent',
        marginLeft: horizontalScale(20),
        marginTop: verticalScale(10)
    },
    logoutText: {
        color: 'white',
        fontSize: moderateScale(36),
        fontWeight: 'bold'
    },
    profileMargin: {
        marginTop: verticalScale(-1),
        marginBottom: verticalScale(-120),
    },
    diaryMargin: {
        marginTop: verticalScale(-1)
    },
    navAboutButton: {
        backgroundColor: 'transparent',
        marginLeft: horizontalScale(20),
        marginTop: verticalScale(420),
        marginBottom: verticalScale(20)
    },
    navAboutText: {
        color: 'white',
        fontSize: moderateScale(26),
    },
    inputContainer1: {
        width: '80%',
        marginTop: verticalScale(40),
        marginBottom: verticalScale(20),
    },
    inputContainer2: {
        width: '80%',
        marginTop: verticalScale(20),
        marginBottom: verticalScale(20)
    },
    input: {
        height: verticalScale(50),
        paddingHorizontal: horizontalScale(10),
        borderRadius: moderateScale(10),
        backgroundColor: '#353535',
        width: '100%',
        fontSize: moderateScale(16),
        color: 'white',
        placeholder: {
            color: 'rgba(255, 255, 255, 0.5)',
        }
    },
    inputDD: {
        paddingHorizontal: horizontalScale(10),
        borderRadius: moderateScale(10),
        backgroundColor: '#353535',
        width: '100%',
        fontSize: moderateScale(16),
        color: 'white',
        placeholder: {
            color: 'rgba(255, 255, 255, 0.5)',
        },
        height: verticalScale(200),
        marginBottom: verticalScale(30)
    },
    input2: {
        height: verticalScale(50),
        paddingHorizontal: horizontalScale(10),
        borderRadius: moderateScale(10),
        backgroundColor: '#353535',
        width: horizontalScale(310),
        fontSize: moderateScale(16),
        color: 'white',
        placeholder: {
            color: 'rgba(255, 255, 255, 0.5)',
        }
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        zIndex: 1,
    },
    popupBox: {
        position: 'absolute',
        zIndex: 5,
        backgroundColor: '#353535',
        borderColor: '#ED91C8',
        borderWidth: moderateScale(2),
        padding: moderateScale(20),
        borderRadius: moderateScale(10),
        alignItems: 'center',
        marginTop: verticalScale(120),
        width: horizontalScale(350),
        height: verticalScale(700)
    },
    popupButton: {
        position: 'absolute',
        top: verticalScale(10),
        right: horizontalScale(30)
    },
    popupButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: moderateScale(32),
    },
    errorText: {
        color: 'white'
    },
    bartender: {
        width: horizontalScale(350),
        height: verticalScale(350),
        position: 'absolute',
        bottom: 0,
        left: horizontalScale(-47)
    },
    dashText: {
        color: '#ffffff',
        fontSize: moderateScale(20),
        marginBottom: verticalScale(20)
    },
    dashBox: {
        backgroundColor: '#353535',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#ED91C8',
        borderWidth: moderateScale(2),
        borderRadius: moderateScale(10),
        width: horizontalScale(180),
        height: verticalScale(180),
        margin: moderateScale(15)
    },
    boxCont:
    {
        flexDirection: "row",
        marginTop: verticalScale(50),
        marginBottom: verticalScale(50)
    },
    row: {
        flexDirection: 'row',
    },
    row2: {
        flexDirection: 'row',
        marginBottom: verticalScale(50)
    },
    dropDown: {
        width: horizontalScale(200),
        backgroundColor: '#353535',
        borderColor: '#ED91C8',
        borderWidth: moderateScale(2),
    },
    dropDownText: {
        color: 'white',
    },
    allergenInput: {
        height: verticalScale(60),
        paddingHorizontal: horizontalScale(10),
        borderRadius: moderateScale(10),
        backgroundColor: '#353535',
        width: '100%',
        fontSize: moderateScale(16),
        color: 'white',
        placeholder: {
            color: 'rgba(255, 255, 255, 0.5)',
        },
        marginTop: verticalScale(30),
        borderColor: '#ED91C8',
        borderWidth: moderateScale(2),

    },
    medal: {
        width: horizontalScale(130),
        height: verticalScale(130),
        alignSelf: 'center'
    },
    rankText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: verticalScale(5)
    },
    toggle: {
        marginTop: verticalScale(-5),
    },
    bottomhalf: {
        position: 'absolute',
        zIndex: -1,
        bottom: 100,
        width: '100%',
    },
    hidden: {
        marginTop: verticalScale(570)
    },
    vegan: {
        marginRight: horizontalScale(20),
        fontSize: moderateScale(25),
        color: 'white'
    },
    pfpimage: {
        height: verticalScale(50),
        width: horizontalScale(50),
        borderRadius: moderateScale(500)
    },
    pfp2image: {
        height: verticalScale(200),
        width: horizontalScale(200),
        marginTop: verticalScale(10),
        marginBottom: verticalScale(20),
        borderRadius: moderateScale(500),
    },
    backButton: {
        backgroundColor: 'transparent',
        position: 'absolute',
        top: verticalScale(50),
        left: horizontalScale(30),
    },
    drinkThumbnailImage: {
        marginTop: verticalScale(5),
        height: verticalScale(100),
        width: horizontalScale(150),
        borderRadius: moderateScale(10)
    },
    ddbox: {
        flexDirection: "row",
        marginTop: verticalScale(150),
    },
    dropdownMess: {
        fontSize: moderateScale(25),
        color: 'white',
        marginRight: horizontalScale(10)
    }
});

module.exports = styles