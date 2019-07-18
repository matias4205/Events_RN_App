import React from 'react';
import {createStackNavigator} from 'react-navigation';
import { StyleSheet, Text } from 'react-native';

import Home from './src/screens/Home'

const StackNavigation = createStackNavigator({
  Home: {
    screen: Home,
    path: 'home/',
    navigationOptions: {
      title: 'Home'
    }
  }
},
{
  initialRouteName: "Home",
  cardStyle:{
    backgroundColor: '#FFFFFF'
  },
}
)

export default StackNavigation;