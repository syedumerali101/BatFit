import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    viewBeforeImageBack: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center'
    },

    imageBackgroundStyle : {
        height:'100%', 
        width: '100%', 
        top: 0, 
        left: 0
    },

    viewOfLogo : {
        padding: 30,
        alignSelf: 'center'
    },

    stylingOfLogo: {
        height: 70, 
        width: 70
    },

    viewOfBatFit: {
        flexDirection: 'row', 
        justifyContent: 'center'
    },

    textBat: {
        color: 'white', 
        fontSize: 18, 
        fontWeight: 'bold'
    },

    textFit: {
        color: '#e52420', 
        fontSize: 18, 
        fontWeight: 'bold'
    },

    viewOfSignInSection : {
        paddingHorizontal: 50, 
        paddingVertical: 30,
    },

    signInAndArrowSection : {
        flexDirection: 'row',
        borderWidth: 1, 
        borderRadius: 150, 
        backgroundColor: '#e52420', 
        padding: 10, 
        paddingVertical: 15, 
        justifyContent: 'center'
    },

    forgotYourPasswordView : {
        justifyContent: 'center', 
        alignItems: 'center', 
        bottom: 20
    },

    socialMediaView : {
        flexDirection: 'row', 
        justifyContent: 'center', 
        paddingTop: 50
    },







})