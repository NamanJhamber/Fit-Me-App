import React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

import LoginScreen from "./screens/LoginScreen";
import LoadingScreen from "./screens/LoadingScreen";
import DashboardScreen from "./screens/DashboardScreen";

import DrawerNavigator from './navigation/DrawerNavigator'
import {NavigationContainer} from '@react-navigation/native'

import firebase from "firebase";
import { firebaseConfig } from "./config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const AppSwitchNavigator = createSwitchNavigator({
 // LoadingScreen: LoadingScreen,
 // LoginScreen: LoginScreen,
  DashboardScreen: DashboardScreen
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

export default function App() {
  return (
    <NavigationContainer>
    <DrawerNavigator />
    </NavigationContainer>
  )
 // return <AppNavigator />;

}