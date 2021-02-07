import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image, FlatList, ImageBackground } from 'react-native';
import Header from '../components/Header/index';
import styles from '../containers/HomeContainer/styles';
import DateDay from '../custom components/DateDay/index';
import MotivationalQuotes from '../custom components/MotivationalQuotes/index';
import ExercisesList from '../components/ExercisesList/index';
import { BackHandler } from 'react-native';
import { NavigationEvents } from 'react-navigation';

export default class HomeScreen extends Component {
    static navigationOptions = {
        header : null,
    }

    _onBlurr = () => {
        BackHandler.removeEventListener('hardwareBackPress',
        this._handleBackButtonClick);
      }
      
      _onFocus = () => {
        BackHandler.addEventListener('hardwareBackPress', 
        this._handleBackButtonClick);
      }
      
      _handleBackButtonClick = () => true
      
    
    render() {    
        return (
            <View style={styles.completeScreenView}>
                <NavigationEvents
               onWillFocus={this._onFocus}
               onWillBlur={this._onBlurr}
             />
                {/* Header Component */}
                <Header/>

                {/* Date and Day Component */}
                <DateDay/>
                
                {/* MotivationalQuotes Component */}
                <MotivationalQuotes/>

                {/* FlatList Component of all exercises */}
               <ExercisesList Cross = {()=> this.props.navigation.navigate('DeadLift')}
               Hammer = {()=> this.props.navigation.navigate('HammerCurls')}
               Push = {()=> this.props.navigation.navigate('PushUps')}
               Chest = {()=> this.props.navigation.navigate('ChestFlies')}
               />

              
              
                
            </View>
        )
    }
}
