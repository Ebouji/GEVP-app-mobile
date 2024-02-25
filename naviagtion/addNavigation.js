import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SplashScreen from '../screens/SplashScreen';
import ProfileScreen from '../screens/ProfileScreen';
import TestScreen from '../screens/TestScreen';
import CommandeScreen from '../screens/CommandeScreen';
import CommandeScreentest from '../screens/CommandeScreentest';
import DetailScreen from '../screens/DetailScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
        <Stack.Screen name="Welcome" options={{ headerShown: false }} component={WelcomeScreen} />
        <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
        <Stack.Screen name="SignUp" options={{ headerShown: false }} component={SignUpScreen} />
        <Stack.Screen name="Splash" options={{ headerShown: false }} component={SplashScreen} />
        <Stack.Screen name="Profile" options={{ headerShown: false }} component={ProfileScreen} />
        <Stack.Screen name="Test" options={{ headerShown: false }} component={TestScreen} />
        <Stack.Screen name="Commande" options={{ headerShown: false }} component={CommandeScreen} />
        <Stack.Screen name="Commandet" options={{ headerShown: false }} component={CommandeScreentest} />
        <Stack.Screen name="Detail" options={{ headerShown: false }} component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}