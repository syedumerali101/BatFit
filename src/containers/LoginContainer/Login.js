import React, { Component } from 'react'
import { Text, View, ImageBackground, Image, Linking, TouchableOpacity } from 'react-native';
import LoginFields from '../../custom components/LoginInputFields/LoginFields';
import styles from './styles';

export default class Login extends React.Component{
    render(){

    handleButton = () => {
        Linking.openURL('https://twitter.com');
    }
    
        return (
            <View style={styles.viewBeforeImageBack}>
            <ImageBackground style={styles.imageBackgroundStyle} source={require('../../images/LoginBack2.jpg')}>
                <View style={styles.viewOfLogo}>
                  <Image style={styles.stylingOfLogo} 
                  source={require('../../images/FitnessLogo.png')}/>
                  <View style={styles.viewOfBatFit}>
                      <View>
                      <Text style={styles.textBat}>
                          BAT
                      </Text>
                      </View>

                      <View>
                      <Text style={styles.textFit}>
                          FIT
                      </Text>
                      </View>
                  </View>

                </View>

                {/* CustomComponent */}
               <LoginFields
               myValue = {data => this.setState({ TextInput_Name: data })}
                label ="NAME" labelplaceholder = "Andrew" fieldIcon = {require('../../images/email.png')}/>

               <LoginFields label ="PHONE NUMBER"
               labelplaceholder = "00011100111" 
               securityText = {false} 
               KeyBoardType = "numeric"
               fieldIcon = {require('../../images/phonenumber.png')}

               />


               <View style={styles.viewOfSignInSection}>
               <TouchableOpacity style={styles.signInAndArrowSection} onPress={this.props.TakeMe}>
                 <View>
                     <Text style={{color:'white'}}> SIGN IN</Text>
                 </View>

                 <View style={{left: 80}}>
                     <Image style={{height: 20, width: 20}} source={require('../../images/RightArrow.png')}/>
                </View>
                  

               </TouchableOpacity>
               </View>

               <View style={styles.forgotYourPasswordView}>
                   <TouchableOpacity>
                       <Text style={{color:'white'}}>Forgot Password?</Text>
                   </TouchableOpacity>
               </View>

               <View style={styles.socialMediaView}>
                   <TouchableOpacity onPress = {()=> {Linking.openURL('https://facebook.com')}}>
                       <Image style={{height: 40, width: 40}} source={require('../../images/FbIcon.png')}/>
                   </TouchableOpacity>
                   <TouchableOpacity onPress ={()=> this.handleButton()}>
                       <Image style={{height: 40, width: 40}} source={require('../../images/TwitterIcon.png')}/>
                   </TouchableOpacity>
                   <TouchableOpacity onPress = {()=> {Linking.openURL('https://gmail.com')}}>
                       <Image style={{height: 40, width: 40}} source={require('../../images/GoogleIcon.png')}/>
                   </TouchableOpacity>

               </View>


                
            </ImageBackground>
            </View>
        )
    }
}
