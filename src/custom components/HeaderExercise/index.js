import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

export default class index extends Component {
    render() {
        return (
            <TouchableOpacity onPress = {this.props.TakeMeBack} style={{padding: 15, paddingTop: 30}}>
                        <Image style={{height:30, width: 30}} source={require('../../images/LeftArrow.png')}/>
            </TouchableOpacity>
        )
    }
}
