import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Platform, NativeModules, Button, Alert, Dimensions } from 'react-native';
import HomepageScreen from './app/screens/HomepageScreen';
import RecommendedScreen from './app/screens/RecommendedScreen';
import LogIn from './app/screens/LogIn';
import Signup from './app/screens/Signup';
import Prof from './app/screens/Prof';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FeatureScreen from './app/screens/FeatureScreen';
import GenreScreen from './app/screens/GenreScreen';
import BookmarkScreen from './app/screens/BookmarkScreen';

const { StatusBarManager } = NativeModules;
const Stack = createNativeStackNavigator();

//hello world

export default function App() {
  return (
    <SafeAreaView style={styles.container}> 
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
          name='LogIn'
          component={LogIn}></Stack.Screen>
          <Stack.Screen
          name='Signup'
          component={Signup}></Stack.Screen>
          <Stack.Screen
          name='HomepageScreen'
          component={HomepageScreen}></Stack.Screen>
          <Stack.Screen
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
