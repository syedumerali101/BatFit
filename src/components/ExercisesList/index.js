import React, { Component } from 'react'
import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

export default class index extends Component {
    state = {
        page: 0,
        posts: [],
        
        Data : [
            {
                id : 1,
                exerciseName : 'DEAD LIFT',
                sets : '5 Sets',
                time : '10 Mins',
                image : require('../../images/ChestDay1.jpg'),
                mainPage : this.props.Hammer
                
            },

            {
                id : 2,
                exerciseName : 'SQUADS',
                sets : '5 Sets',
                time : '15 Mins',
                image : require('../../images/Squads.jpg'),
                mainPage : this.props.Hammer
            },

            {
                id : 3,
                exerciseName : 'CROSS FITS',
                sets : '3 Sets',
                time : '10 Mins',
                image : require('../../images/CrossFits.jpg'),
                mainPage : this.props.Cross
            },

            {
                id : 4,
                exerciseName : 'CHEST FLIES',
                sets : '5 Sets',
                time : '10 Mins',
                image : require('../../images/ChestFlies.jpg'),
                mainPage : this.props.Chest
            },

            {
                id : 5,
                exerciseName : 'CONCENTRATED',
                sets : '5 Sets',
                time : '15 Mins',
                image : require('../../images/ConcentralBicepCurls.jpg'),
                mainPage : this.props.Hammer
            },

            {
                id : 6,
                exerciseName : 'BARBLE PRESS',
                sets : '3 Sets',
                time : '10 Mins',
                image : require('../../images/Chest.jpg'),
                mainPage : this.props.Hammer
            },

            {
                id : 7,
                exerciseName : 'Triceps Extension',
                sets : '3 Sets',
                time : '10 Mins',
                image : require('../../images/Triceps.jpg'),
                mainPage : this.props.Hammer
            },


            {
                id : 8,
                exerciseName : 'Push Ups',
                sets : '3 Sets',
                time : '10 Mins',
                image : require('../../images/PushUps3.jpg'),
                mainPage : this.props.Push
            },

            {
                id : 9,
                exerciseName : 'Preacher Curls',
                sets : '3 Sets',
                time : '10 Mins',
                image : require('../../images/PreacherCurls4.jpg'),
                mainPage : this.props.Hammer
            },

            
            {
                id : 10,
                exerciseName : 'Hammer Curls',
                sets : '3 Sets',
                time : '10 Mins',
                image : require('../../images/HammerCurls.jpg'),
                mainPage : this.props.Hammer
            },




        ]
    };

    newLevel = (Data) => {
        var i,
        j,
        temp;
    for (i = Data.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = Data[i];
        Data[i] = Data[j];
        Data[j] = temp;
    }
    return Data;    
    }

    componentDidMount() {
        this.addNewRecords(0)
    }

    addNewRecords = (page) => {
        var newRecords = []
        for (var i = page * 5, il = i + 5; i < il && i < 
            this.state.Data.length; i++){
            newRecords.push(this.state.Data[i]);
            console.log('newRecords', newRecords)
          }
          this.setState({
              Data : [...this.state.posts, ...newRecords]
             
          });
    }

    
    
    

    _renderItem = ({item} ) => {
        
        return (
         
            <View style={styles.mainRenderItemView}>
                <TouchableOpacity onPress = {item.mainPage} style={styles.mainTouchableFrame}>
                    <Image style={styles.sizeOfImageExercise} source={item.image}/>
                    <View style={styles.exerciseTextView}>
                    <Text style={styles.exerciseName}>
                        {item.exerciseName}
                       
 
                    </Text>

                    <View style={styles.locationSetsTime}>
                        <Text style={styles.numberOfSets}>
                            {item.sets}
                        </Text>
                        

                        <Text style={styles.timeOfSet}>
                            {item.time}
                        </Text>
                    </View>
                    </View>
                </TouchableOpacity>
                </View>
        );
    };
    render() {
        var {Data, newRecords} = this.state;
        console.log('OK', Data);
        this.newLevel(Data)
        return (
           
            <FlatList
            data = {this.state.Data}
            renderItem = {this._renderItem}
            horizontal = {true}
            keyExtractor = { (item, index) => index.toString() }
            />
        )
    }
}
