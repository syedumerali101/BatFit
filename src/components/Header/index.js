import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

export default class index extends Component {
    render() {
        return (
            <View style={styles.mainView}>
               <View style={styles.batFitTextView}>
                    <Text style={styles.batTextView}>
                        BAT
                    </Text>

                    <Text style={styles.fitText}>
                        FIT
                    </Text>
                </View>

                <View style={styles.logoPosition}>
                    <Image style={{height: 28, width: 28}} source = {require('../../images/FitnessLogo.png')}/>
                </View>

                <TouchableOpacity>
                    <Text style={styles.additionSignAlignment}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
