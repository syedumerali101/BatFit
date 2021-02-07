import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class index extends Component {
    render() {
        return (
            <View>
                 <View style={{flexDirection: 'row', paddingHorizontal: 5, alignItems: 'center', justifyContent: 'space-around', paddingTop: 30}}>
                        <View style={{paddingRight: 70}}>
                            <Text style={{color:'white', fontSize: 20, fontWeight: 'bold'}}>
                                {this.props.term}
                            </Text>
                        </View>
                        <View>
                            <Text style={{color:'white'}}>
                                {this.props.number}
                            </Text>
                        </View>
                    </View>

                    <View style={{paddingHorizontal: 55}}>
                            <Text style={{color:'silver'}}>
                                {/* Estimated time to complete the workout */}
                                {this.props.explanation1}
                            </Text>
                            <Text style={{color:'silver'}}>
                                {/* Along with the break of 30 seconds after every set */}
                                {this.props.explanation2}
                            </Text>
                    </View>
            </View>
        )
    }
}
