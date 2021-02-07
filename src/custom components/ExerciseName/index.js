import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { WebView } from 'react-native-webview';
import WebViewArea from '../../screens/WebViewArea';


export default class index extends Component {
    
    render() {
        return (
            <View style={{flexDirection:'row', paddingHorizontal: 10, alignItems: 'center', paddingTop: 50, justifyContent: 'space-around'}}> 
                        <View>
                            <Text style={{color:'white', fontSize: 25, fontWeight: 'bold'}}>
                                {this.props.title}
                            </Text>
                        </View>

                        <TouchableOpacity onPress={this.props.YoutubeTutorial}>
                            <Image style={{height: 60, width: 60}} source={require('../../images/Youtube.png')}/>
                        </TouchableOpacity>
                        
                    </View>
        )
    }
}
