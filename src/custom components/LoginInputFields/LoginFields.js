import React, { Component } from 'react'
import { Text, View, Image, TextInput } from 'react-native'


export default class LoginFields extends Component {

  
    render() {
        return (
            <View style={{paddingHorizontal: 20}}>
                <View style={{flexDirection: 'row', borderBottomWidth: 1, paddingHorizontal:0, borderBottomColor: '#999da0'}}>
                <View style={{justifyContent: 'center'}}>
                    <Image style={{height: 30, width: 30}} source={this.props.fieldIcon}/>
                </View>
                <View style={{paddingHorizontal: 5, paddingVertical: 10}}>
                    <View style={{paddingTop: 5, top: 8}}>
                   <Text style={{color: 'white'}}>
                       {this.props.label}
                    </Text>
                   </View>
                   <View style={{right:5}}>
                   <TextInput onChangeText={this.props.myValue} style={{height: 40, color: 'white'}} 
                   placeholderTextColor = 'darkgray' 
                   placeholder={this.props.labelplaceholder}
                   keyboardType = {this.props.KeyBoardType}
                   secureTextEntry = {this.props.securityText}
                   />
                   </View>
                </View>
                </View>
                </View>
        )
    }
}
