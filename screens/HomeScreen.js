	
import React, { Component } from 'react';
import {
  AppRegistry, 
  Image, 
  StyleSheet, 
  View, 
  TouchableOpacity,
  Text,
  ScrollView,
  Linking
} from 'react-native';
 import { WebView } from 'react-native-webview';
 import { RFValue } from "react-native-responsive-fontsize";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";


let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
}

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }
  render() {
  if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
    return (
        <ScrollView>
      <View style = {styles.MainContainer}>
 
        <TouchableOpacity activeOpacity = { .5 } onPress={()=>{
                  this.props.navigation.navigate("video")
                }}>
 
          <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf4oMk_Bc4XawpyF-ICwE8ibQSeB81-WdmWQ&usqp=CAU'}} style = {styles.ImageClass} />

          <View style={styles.videoTitle}>
        <Text style = {styles.title}>Push Ups</Text>
        </View>
        
        </TouchableOpacity>
      
        <TouchableOpacity activeOpacity = { .5 }onPress={() => Linking.openURL('https://www.youtube.com/watch?v=xn4KHZ7xi4A/')}>
 
          <Image source={{uri:'https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/01/03184820/jumping-jack.jpg'}} style = {styles.ImageClass} />
          <View style={styles.videoTitle}>
        <Text style = {styles.title}>Jumping Exercise</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity = { .5 }onPress={() => Linking.openURL('https://www.youtube.com/watch?v=ma8HndL0sYY')}>
 
          <Image source={{uri:'https://media.istockphoto.com/photos/diverse-group-of-elementary-children-jumping-rope-picture-id187124659?k=20&m=187124659&s=612x612&w=0&h=zmT-gywkYKg_gKBaTuVyu0vuCEitOmlUVnNKFureg5U='}} style = {styles.ImageClass} />
          <View style={styles.videoTitle}>
        <Text style = {styles.title}>Skipping Exercise</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity = { .5 }onPress={() => Linking.openURL('https://www.youtube.com/watch?v=I0QUL1v6Pd4&list=PL1rS90IPvLHXxeweHBb3w0Fj6CM8WxXag')}>
 
          <Image source={{uri:'https://personallevelfitness.com/wp-content/uploads/2015/04/yoga-600x450.jpg'}} style = {styles.ImageClass} />
          <View style={styles.videoTitle}>
          <Text style = {styles.title}>Streaching + Intense Ab Exercise</Text>
          </View>
        </TouchableOpacity>
        
      </View>
      </ScrollView>
    );
  }}
}
 
const styles = StyleSheet.create(
{
 
MainContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#FFF8E1',
  marginTop:0
},
  ImageClass:
  {
    width: 250,
    height: 250
  },
  title:{
    fontFamily:"Bubblegum-Sans", 
    fontSize:20,
  },
  disceiption:{
    fontFamily:"Bubblegum-Sans"
  }
});