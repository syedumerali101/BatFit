import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

// ...
export default class WebViewArea extends React.Component {
  static navigationOptions = {
    header : null
}
  render() {
    return <WebView source={{ uri: 'https://www.youtube.com/watch?v=r2Rzaf7SaGg' }} />;
  }
}