import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Stopwatch} from 'react-native-stopwatch-timer';
import PropTypes from 'prop-types';


export default class index extends Component {
  static propTypes = {
    StartMe : PropTypes.bool,
    ResetMe : PropTypes.bool
  };

  static defaultProps = {
    StartMe : {},
    ResetMe : {},
  };
  
    render() {
        return (
            <View>
            <Stopwatch laps msecs 
            start={this.props.StartMe}
            reset={this.props.ResetMe}
            options={options}
            />
            </View>
        )
    }
}

const options = {
    container: {
      backgroundColor: '#FF0000',
      padding: 5,
      borderRadius: 5,
      width: 200,
      alignItems:'center',
    },
    text: {
      fontSize: 30,
      color: '#FFF',
      marginLeft: 7,
    }
  };
