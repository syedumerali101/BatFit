import React from 'react';
import {Text, View, Button, ImageBackground, TouchableOpacity} from 'react-native';
import Splash from '../containers/SplashContainer/Splash';

export default class SplashScreen extends React.Component{
  static navigationOptions = {
    header: null,
};
  render(){  
    return (
      <View style={{flex: 1, backgroundColor: 'black'}}>
        {/* <TouchableOpacity onPress={()=> this.props.navigation.navigate('Login')}>
          <Text>
            Hello
          </Text>
        </TouchableOpacity> */}
        <Splash TakeMeToLogin = {() => this.props.navigation.navigate("LoginScreen")}/>
       </View>
    );
  }
}