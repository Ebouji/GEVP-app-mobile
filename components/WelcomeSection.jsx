import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const WelcomeSection = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Pass the searchQuery to the parent component
    onSearch(searchQuery);
  };

  return (
    <View>
      {/* Your welcome message or other content can go here */}
      <View style={styles.searchContainer}>
        {/* TextInput for entering search query */}
        <TextInput
          style={styles.searchInput}
          placeholder="Recherche ..."
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
        {/* Button to trigger the search */}
        <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
          <MaterialCommunityIcons name="magnify" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#8BCB91',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 25,
    marginTop: 20,
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    marginRight: 10,
  },
  searchButton: {
    padding: 10,
    borderRadius: 25,
    backgroundColor: '#457F53',
  },
};

export default WelcomeSection;
