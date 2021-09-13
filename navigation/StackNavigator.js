import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import WorkoutVideoScreen from '../screens/WorkoutVideoScreen'

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Screen name="video" component={WorkoutVideoScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;