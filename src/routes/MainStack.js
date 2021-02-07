
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import ProfileScreen from '../screens/ProfileScreen';
import NotificationsScreen from '../screens/NotificationScreen';
import SettingsScreen from '../screens/SettingsScreen';
import LoginScreen from '../screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

function MyStack() {
  return (
    // <Stack.Navigator initialRouteName='SplashScreen'>
    //   <Stack.Screen  name="Splash" component={SplashScreen} />
    //   <Stack.Screen  name="Login" component={LoginScreen} />
    //   <Stack.Screen name="Notifications" component={NotificationsScreen} />
    //   <Stack.Screen name="Profile" component={ProfileScreen} />
    //   <Stack.Screen name="Settings" component={SettingsScreen} />
    // </Stack.Navigator>
  );
}

export default function MainStack() {
    return (
      // <NavigationContainer>
      //   <MyStack />
      // </NavigationContainer>
    );
  }