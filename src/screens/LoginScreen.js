import React, { Component } from 'react'
import { Text, View } from 'react-native'

import Login from '../containers/LoginContainer/Login';

export default class LoginScreen extends React.Component{
    static navigationOptions = {
        header: null,
        };
    render(){
    
        return (
            <View style={{flex: 1}}>
                <Login TakeMe = {()=> this.props.navigation.navigate('HomeScreen')}/>
            </View>
        )
    }
}

