import React, { Component } from 'react'
import { Text, View, Image } from 'react-native';
import styles from './styles';

export default class index extends Component {

    state = {
        quote : ' ',
    }

    componentDidMount(){
        
        var motivationalQuotes = ['The last three or four reps is what makes the muscle grow', 'Success usually comes to those who are too busy to be looking for it',
    'All progress takes place outside the comfort zone', 'If you think lifting is dangerous, try being weak. Being weak is dangerous', 'The only place where success comes before work is in the dictionary', 'The clock is ticking. Are you becoming the person you want to be?', 'Whether you think you can, or you think you can’t, you’re right'];
        var quote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];
        
        this.setState({
           
            quote : quote,
        });        
    }
    
    render() {
        return (
            <View style={styles.mainQuoteArea}>
                    <View>
                        <Image style={{height:30, width:30}} source={require('../../images/LeftQuote.png')}/>
                    </View>
                    <Text style={styles.quoteTextColor}>
                        {this.state.quote}
                    </Text>
                    <View style={styles.quoteRightLocation}>
                        <Image style={{height:30, width:30}} source={require('../../images/RightQuote.png')}/>
                    </View>
                </View>
        )
    }
}
