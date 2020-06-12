import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';

//Tab
import HomeScreen from './src/screens/tab/HomeScreen';
import HelpScreen from './src/screens/tab/HelpScreen';
import AboutScreen from './src/screens/tab/AboutScreen';
//Stack
import CopyScreen from './src/screens/stack/CopyScreen';
import ContactScreen from './src/screens/stack/ContactScreen';
import PlayScreen from './src/screens/stack/PlayScreen';


const tabs = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Help: HelpScreen,
    About:AboutScreen,
  }
);
const stack = createStackNavigator(
  {
    Home: tabs,
    Contact:ContactScreen,
    Copy: CopyScreen,
    Play: PlayScreen,
    
  }
);

const draw = createDrawerNavigator(
  {
    Home: stack,
    Contact:ContactScreen,
    Copy: CopyScreen,
    Play: PlayScreen,
  }
);


/*
const draw = createDrawerNavigator(
  {
    Home: HomeScreen,
  }
)
tabs in stack
stack in draw
https://github.com/sankalpreddy1998 
*/
const AppContainer = createAppContainer(draw);

export default function App() {
  return (
    <View style={styles.container}>
      <AppContainer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     },
});
