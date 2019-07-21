import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import AppNavigator from './src/navigation/AppNavigation';

class App extends Component {
  render() {
    console.disableYellowBox = true
    return (
      <AppNavigator  />
    );
  }
}

export default App;