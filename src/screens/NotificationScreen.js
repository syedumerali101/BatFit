import React, { Component } from 'react'
import { Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import Sound from 'react-native-sound';


export default class Splash extends React.Component{

  pressMe = () => {
    var sound1 = new Sound(require('../music/sample.mp3'),
    (error, sound) => {
      if (error) {
        alert('error' + error.message);
        return;
      }
      sound1.play(() => {
        sound1.release();
      });
    });
  }

  pressMe2 = () => {
    var sound2 = new Sound(require('../music/sample.mp3'),
    (error, sound) => {
      if (error) {
        alert('error' + error.message);
        return;
      }
      sound2.play(() => {
        sound2.release();
      });
    });
  }

  finalPress = () => {
    this.pressMe()
    this.pressMe2()
  }

  

  
  render(){
        return (
            <View >
               <TouchableOpacity onPress ={this.finalPress}>
                 <Text>
                   Press me 
                 </Text>
               </TouchableOpacity>
                </View>
        )
    }
  }
