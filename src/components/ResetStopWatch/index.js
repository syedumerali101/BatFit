import React, { Component } from 'react'
import { Text, View, TouchableHighlight} from 'react-native'
import PropTypes from 'prop-types';

export default class index extends Component {
    static propTypes = {
        ResetMe : PropTypes.func
    };

    static defaultProps = {
        ResetMe : undefined
    };

    render() {
        return (
            <View>
            <TouchableHighlight onPress={this.props.ResetMe}>
            <Text style={{fontSize: 20, marginTop:10, color:'white'}}>RESET</Text>
            </TouchableHighlight>
            </View>
        )
    }
}
