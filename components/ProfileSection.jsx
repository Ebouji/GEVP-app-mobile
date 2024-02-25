import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons,MaterialIcons } from '@expo/vector-icons';

const ProfileSection = ({ userName, userAvatar }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileIconContainer}>
        <Ionicons name="person" size={40} color="green" />
      </View>
      <View style={styles.userInfoContainer}>
        <Text style={styles.welcomeText}>Bienvenue,</Text>
        <Text style={styles.userName}>{userName}</Text>
      </View>
      <View style={styles.notificationIconContainer}>
        <MaterialIcons name="notifications" size={40} color="green" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginTop:20,
    backgroundColor: '#fff',
  },
  profileIconContainer: {
    marginRight: 10,
  },
  userInfoContainer: {
    flex: 1,
    marginRight: 10,
  },
  notificationIconContainer: {
    justifyContent: 'flex-end',
    
  },
  welcomeText: {
    fontSize: 16,
    color: 'black',
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'Black',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 20,
  },
});

export default ProfileSection;
