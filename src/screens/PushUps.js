import React, { Component } from 'react'
import { Text, View, ImageBackground } from 'react-native';
import HeaderExercise from '../custom components/HeaderExercise/index';
import ExerciseName from '../custom components/ExerciseName/index';
import ExerciseTerms from '../custom components/ExerciseTerms/index';
import ButtonStartExercise from '../custom components/ButtonStartExercise/index';
import Sound from 'react-native-sound';



export default class HammerCurls extends Component {
    static navigationOptions = {
        header : null
    }
    render() {
        return (
            <View style={{flex:1, backgroundColor: 'black'}}>
                 <ImageBackground style={{height:'100%', opacity: 0.60}} source={require('../images/PushUps5.jpg')}>

                    <HeaderExercise TakeMeBack = {()=> this.props.navigation.goBack()}/>

                    <ExerciseName title='PUSH UPS' YoutubeTutorial = {()=> this.props.navigation.navigate('WebViewArea')}/>

                    <ExerciseTerms term='Time' number='15 min' explanation1='Estimated time to complete the workout' 
                    explanation2 = 'Along with the break of 30 seconds after every set' />

                    <ExerciseTerms term='Sets' number='5 sets' explanation1='Maintain the form' 
                    explanation2 = 'Decrease the weight to complete the reps' />

                    <ExerciseTerms term='Calories' number='200' explanation1='Burn more if you want to lean' 
                    explanation2 = 'Consume more if you want to bulk' />

                    <ButtonStartExercise mainMusic= {require('../music/TheBatman.mp3')}/>

                </ImageBackground>
            </View>
        )
    }
}
