import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default function SettingsScreen({ navigation }) {
  // console.log(navigation, 'navigation here');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }