import React, { Component } from 'react'
import { Text, View } from 'react-native'
import CountDown from 'react-native-countdown-component';
import PropTypes from 'prop-types';

export default class index extends Component {
    static propTypes = {
        AfterMe : PropTypes.func
    };

    static defaultProps = {
        AfterMe : undefined
    };
    
    render() {
        return (
            <View>
               <CountDown
                size={50}
                until={4}
                onFinish={this.props.AfterMe}
                digitStyle={{backgroundColor: 'red', borderRadius: 80}}
                digitTxtStyle={{color: 'white'}}
                timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
                separatorStyle={{color: '#1CC625'}}
                timeToShow={['S']}
                timeLabels={{m: null, s: null}}
                showSeparator
                />
            </View>
        )
    }
}
