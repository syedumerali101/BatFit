import React, { Component } from 'react'
import { Text, View, TouchableOpacity} from 'react-native'
import styles from './styles';
import PropTypes from 'prop-types';

export default class index extends Component {
    static propTypes = {
        PressMe : PropTypes.func
      };

      static defaultProps = {
        PressMe: undefined
      };
      
    render() {
        return (
            <View>
            <TouchableOpacity onPress={this.props.PressMe}
            style={styles.buttonStart}>
            <Text style={styles.buttoStartText}>
            S T A R T
            </Text>
            </TouchableOpacity>
            </View>
        )
    }
}
