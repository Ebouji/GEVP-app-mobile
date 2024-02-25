import React from 'react';
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';

const Splash = ({ navigation }) => {
      setTimeout(() => {
      navigation.replace('WelcomeScreen');
    }, 2000); // 3000 milliseconds = 3 seconds
  return (
    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#63C66D' }}>
      <StatusBar barStyle="light-content" hidden={false} backgroundColor="#63C66D" />
      <Image source={require('../assets/images/logo.png')} style={{ width: 50, height: 50 }} />
      <Text style={{ fontFamily: 'OpenSans-Bold', fontSize: 30, color: 'white' }}>GEVP</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
