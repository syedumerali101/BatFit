import React, { Component } from 'react'
import { Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './styles';
import Sound from 'react-native-sound';
import LoginScreen from '../../screens/LoginScreen';


export default class Splash extends React.Component{
  render(){
      
    var sound1 = new Sound(require('../../music/splash.mp3'),
  (error, sound) => {
    if (error) {
      alert('error' + error.message);
      return;
    }
    sound1.play(() => {
      sound1.release();
    });
  });


   
        return (
            <View style={styles.mainSplashView}>
                <ImageBackground style={styles.mainImageBackground} 
                source={require('../../images/SplashBackground4.jpg')}>
                <TouchableOpacity onPress={this.props.TakeMeToLogin}
                style={styles.mainSplashButton}>
                        
                        <View style={styles.splashButtonView}>
                        <View style={styles.splashButtonTextView}>
                            <Text style={styles.splashButtonText}>
                                GET STARTED
                            </Text>
                        </View>
                        </View>
                        <View style={styles.splashButtonArrowView}>
                            <View>
                               <Image style={styles.splashButtonIcon} 
                               source = {require('../../images/RightArrow.png')}/>
                            </View>
                        </View>
                        </TouchableOpacity>


                        
                </ImageBackground>
                </View>
        )
    }
  }
