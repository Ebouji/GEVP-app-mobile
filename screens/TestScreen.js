import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import ProfileSection from '../components/ProfileSection';
import WelcomeSection from '../components/WelcomeSection';
import NavSection from '../components/NavSection';
import MenuSection from '../components/MenuSection';

const TestScreen = ({ navigation }) => {
  // Example user data
  const user = {
    userName: 'EL MEHDI BOUJI',
    userAvatar: '../images/avatar.jpg', // Replace with the actual URL
  };

  const handleSearchPress = () => {
    // Add your logic for handling the search button press
    // For example, you can navigate to a search screen
    // navigation.navigate('SearchScreen');
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <ProfileSection userName={user.userName} userAvatar={user.userAvatar} />
        <WelcomeSection onSearchPress={handleSearchPress} />
        <MenuSection />
        {/* Add the specific content of your TestScreen here */}
      </ScrollView>
      {/* Navigation Bar */}
      <NavSection />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TestScreen;
