import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, MaterialIcons, FontAwesome, Entypo } from '@expo/vector-icons';

const NavSection = () => {
  const navigation = useNavigation();

  const handleAccueilPress = () => {
    // Gérer la navigation ou d'autres actions pour "Accueil"
    navigation.navigate('Test');
  };

  const handleTraitementPress = () => {
    // Gérer la navigation ou d'autres actions pour "Traitement"
  };

  const handleDetruirePress = () => {
    // Gérer la navigation ou d'autres actions pour "Detruire"
  };

  const handleProduitPress = () => {
    // Gérer la navigation ou d'autres actions pour "Produit"
    navigation.navigate('Commande');
  };

  const handleProfilePress = () => {
    // Gérer la navigation ou d'autres actions pour "Profile"
    navigation.navigate('Test');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.optionButton} onPress={handleAccueilPress}>
        <Ionicons name="home" size={24} color="#8BCB91" />
        <Text style={styles.optionText}>Accueil</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionButton} onPress={handleTraitementPress}>
        <MaterialIcons name="work" size={24} color="#8BCB91" />
        <Text style={styles.optionText}>Traitement</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.detruireButton} onPress={handleDetruirePress}>
        <View style={styles.detruireIcon}>
        <Ionicons name="arrow-up" size={24} color="#8BCB91" />
        </View>
        <Text style={styles.optionText}>Detruire</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionButton} onPress={handleProduitPress}>
        <FontAwesome name="product-hunt" size={24} color="#8BCB91" />
        <Text style={styles.optionText}>Produit</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionButton} onPress={handleProfilePress}>
        <Ionicons name="person" size={24} color="#8BCB91" />
        <Text style={styles.optionText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 0,
    paddingHorizontal: 4,
    elevation: 5, // Pour l'ombre sur Android
    position: '',
    bottom: 0,
    left: 0,
    right: 0,
  },
  optionButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#8BCB91', // Couleur de séparation
  },
  optionText: {
    color: '#8BCB91',
    fontWeight: 'bold',
    marginTop: 5,
  },
  detruireButton: {
    flex: 1,
    paddingVertical: 4,
    alignItems: 'center',
  },
  detruireIcon: {
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'green',
    borderRadius: 50,
    padding: 10,
    marginBottom: 5,
  },
});

export default NavSection;
