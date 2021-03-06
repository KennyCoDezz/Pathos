import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Platform, NativeModules, Button, Alert, Dimensions } from 'react-native';
import HomepageScreen from './app/screens/HomepageScreen';
import HomepageScreenTest from './app/screens/HomepageScreenTest';
import RecommendedScreen from './app/screens/RecommendedScreen';
import LogIn from './app/screens/LogIn';
import Signup from './app/screens/SignupTest';
import SignupTest from './app/screens/SignupTest';
import Prof from './app/screens/Prof';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FeatureScreen from './app/screens/FeatureScreen';
import GenreScreen from './app/screens/GenreScreen';
import BookmarkScreen from './app/screens/BookmarkScreen';
import Action_AdventureScreen from './app/screens/Action_AdventureScreen';
import RomanceScreen from './app/screens/RomanceScreen';
import HorrorScreen from './app/screens/HorrorScreen';
import ScienceFictionScreen from './app/screens/ScienceFictionScreen';
import FantasyScreen from './app/screens/FantasyScreen';
import NorthandSouthOverview from './app/screens/NorthandSouthOverview'

const { StatusBarManager } = NativeModules;
const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <SafeAreaView style={styles.container}> 
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {/*<Stack.Screen
          name='LogIn'
          component={LogIn}></Stack.Screen>*/}
          <Stack.Screen
          name='SignupTest'
          component={SignupTest}></Stack.Screen>
          <Stack.Screen
          name='HomepageScreenTest'
          component={HomepageScreenTest}></Stack.Screen>
          {/*<Stack.Screen
          name='RecommendedScreen'
          component={RecommendedScreen}></Stack.Screen>
          <Stack.Screen
          name='Prof'
          component={Prof}></Stack.Screen>
          <Stack.Screen
          name='FeatureScreen'
          component={FeatureScreen}></Stack.Screen>
          <Stack.Screen
          name='GenreScreen'
          component={GenreScreen}></Stack.Screen>
          <Stack.Screen
          name='BookmarkScreen'
          component={BookmarkScreen}></Stack.Screen>
          <Stack.Screen
          name='Action_AdventureScreen'
          component={Action_AdventureScreen}></Stack.Screen>
          <Stack.Screen
          name='RomanceScreen'
          component={RomanceScreen}></Stack.Screen>
          <Stack.Screen
          name='HorrorScreen'
          component={HorrorScreen}></Stack.Screen>
          <Stack.Screen
          name='ScienceFictionScreen'
          component={ScienceFictionScreen}></Stack.Screen>
          <Stack.Screen
          name='FantasyScreen'
          component={FantasyScreen}></Stack.Screen>
          <Stack.Screen
          name='NorthandSouthOverview'
          component={NorthandSouthOverview}></Stack.Screen>*/}
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBarManager.HEIGHT : 0,
  },
});
