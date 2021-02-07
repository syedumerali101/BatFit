import React from 'react'
import { Text, View, Image } from 'react-native';
import styles from './styles';

export default class index extends React.Component {

    state = {
        date : ' ',
        day : ' ',
    }

    componentDidMount(){
        var monthNames = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May','Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var date = new Date().getDate();
        var month = monthNames[new Date().getMonth()];
        var year = new Date().getFullYear();
        var day = dayNames[new Date().getDay()];
        
        this.setState({
            date : date + ', ' + month + ' ' + year + ' ',
            day : day,
           
        });        
    }
    
    render() {
        return (
            
            <View style={styles.mainDateDayView}>
                    <View style={styles.distanceDayDate}>
                    <Text style={styles.dayTextColor}>
                        {this.state.day}
                    </Text>
                    </View>
                    <View>
                    <Text style={styles.dateColor}>
                        {this.state.date}
                    </Text>
                    </View>
                </View>

                
                

                
        )
    }
}
