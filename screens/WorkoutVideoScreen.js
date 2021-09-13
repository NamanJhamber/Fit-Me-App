import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';


class WorkoutVideoScreen extends Component {
  render() {
    return (
      
        <WebView source={{ uri: 'https://www.youtube.com/watch?v=IODxDxX7oi4' }} />
    )
  }
}

export default WorkoutVideoScreen