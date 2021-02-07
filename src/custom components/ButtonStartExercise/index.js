import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TouchableHighlight} from 'react-native';
import Modal from 'react-native-modal';
import StartButton from '../../components/StartButton/index';
import StopWatch from '../../components/StopWatch/index';
import Count from '../../components/Count/index';
import ResetStopWatch from '../../components/ResetStopWatch/index';
import styles from './styles';
import Sound from 'react-native-sound';



export default class index extends Component {
    state = {
        isModalVisible : false,
        clicks: 0,
        show: true,
        isSecondModalVisible : false,  
    }

    constructor(props) {
        super(props);
        this.state = {
          isStopwatchStart: false,
          resetStopwatch: false,
        };
        
        this.startStopStopWatch = this.startStopStopWatch.bind(this);
        this.resetStopwatch = this.resetStopwatch.bind(this);
      }
      
      startStopStopWatch() {
        this.setState({isStopwatchStart: !this.state.isStopwatchStart, resetStopwatch: false});
        this.mainMusic();
       
      }

      resetStopwatch() {
        this.setState({isStopwatchStart: false, resetStopwatch: true});
        
      }

    onButtonChage = () =>{
        this.setState({
            isModalVisible: !this.state.isModalVisible,
        }, () => this.startStopStopWatch())
       }

    onBackButton = () => {
        this.setState({
            isModalVisible: false
        });
        this.setState({
          isStopwatchStart : false
        })
    }

     onCounterButton = () => {
      this.setState({
        isSecondModalVisible : !this.state.isSecondModalVisible
      });
      this.countdownMusic();
      setTimeout(() => {
        this.setState({isSecondModalVisible: !this.state.isSecondModalVisible});
      }, 4000);
    }

    mainMusic = () => {
      var sound1 = new Sound(this.props.mainMusic,
      (error, sound) => {
        if (error) {
          alert('error' + error.message);
          return;
        }
        sound1.play(() => {
          sound1.release();
        });
      });
    }

    countdownMusic = () => {
      var sound2 = new Sound(require('../../music/Countdown.mp3'),
      (error, sound) => {
        if (error) {
          alert('error' + error.message);
          return;
        }
        sound2.play(() => {
          sound2.release();
        });
      });
    }

    

   

    

    render() {
        return (
            <View>
            <StartButton PressMe = {this.onCounterButton}/>

            <Modal isVisible={this.state.isModalVisible} onBackdropPress={this.onBackButton} backdropOpacity = {0.8}>
            <View style={styles.modalPosition}>
            <View style={styles.positionStopWatch}>
            <StopWatch StartMe = {this.state.isStopwatchStart} ResetMe = {this.state.resetStopwatch}/>
            <ResetStopWatch ResetMe={this.resetStopwatch}/>
            </View>
            </View>

            <TouchableOpacity onPress={this.startStopStopWatch}
            style={styles.stopTheStopWatch}>
            <Text style={styles.stopTheStopWatchText}>
            {!this.state.isStopwatchStart ? "S T A R T" : "S T O P"}
            </Text>
            </TouchableOpacity>
            </Modal>

            <View>
            <Modal isVisible={this.state.isSecondModalVisible}>
            <Count AfterMe = {this.onButtonChage}/>
            </Modal>
            </View>

            </View>
        )
    }
}
