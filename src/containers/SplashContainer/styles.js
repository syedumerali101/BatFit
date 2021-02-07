import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    mainSplashView : {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },

    mainImageBackground : {
        height:700,
        width: 400, 
        justifyContent: 'center', 
        alignItems: 'center'
    },

    mainSplashButton : {
        flexDirection: 'row', 
        borderRadius: 150, 
        padding: 15, 
        paddingHorizontal: 50, 
        borderBottomColor: '#e52420', 
        borderColor: '#e52420', 
        borderWidth: 2, 
        marginTop: 500, 
        backgroundColor: 'black', 
        opacity: 0.8
    },

    splashButtonView : {
        justifyContent: 'center', 
        alignItems: 'center'

    },

    splashButtonTextView : {
        marginRight: 20
    },

    splashButtonText : {
        color: 'white', 
        fontSize: 18, 
        fontWeight: 'bold'
    },

    splashButtonArrowView : {
        justifyContent: 'center', 
        alignItems: 'center'
    },

    splashButtonIcon : {
        height: 20,
        width: 20
    }





});