import React from 'react';
import {View,Text, Image, TextInput, TouchableOpacity, SafeAreaView, ScrollView, Dimensions} from 'react-native';
import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import LoginScreen from './src/screens/LoginScreen';
import SplashScreen from './src/screens/SplashScreen';
import HomeScreen from './src/screens/HomeScreen';
import WebViewArea from './src/screens/WebViewArea';
import DeadLift from './src/screens/DeadLift';
import NotificationScreen from './src/screens/NotificationScreen';
import HammerCurls from './src/screens/HammerCurls';
import PushUps from './src/screens/PushUps';
import ChestFlies from './src/screens/ChestFlies';

export default class App extends React.Component{
  static navigationOptions = {
  header: null,
  };
  render(){
    return(
      <AppContainer/>
    );
  }
}



const AppStackNavigaor = createStackNavigator({
  SplashScreen : SplashScreen,
  HomeScreen : HomeScreen,
  HammerCurls : HammerCurls,
  DeadLift : DeadLift,
  PushUps : PushUps,
  ChestFlies :ChestFlies,
  LoginScreen: LoginScreen,
  NotificationScreen : NotificationScreen,
  WebViewArea : WebViewArea,

  
  
},

{
  defaultNavigationOptions:{
      headerStyle:{
          backgroundColor: '#ffffff'
      }
  }
});

const AppContainer = createAppContainer(AppStackNavigaor);