// DetailScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetailScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Détail</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.detailText}>Nom: {item.nom}</Text>
        <Text style={styles.detailText}>Description: {item.description}</Text>
        <Text style={styles.detailText}>Produit: {item.idProduit}</Text>
        <Text style={styles.detailText}>Date: {item.date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8BCB91',
  },
  titleContainer: {
    backgroundColor: '#90EE90', // Couleur de fond de la bordure
    padding: 8,
    borderRadius: 30,
    marginBottom: 16,
    borderColor: '#fff', // Couleur de la bordure
    borderWidth: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF', // Couleur du texte du titre
  },
  detailsContainer: {
    width: '80%',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  detailText: {
    fontSize: 16,
    marginBottom: 15,
  },
});

export default DetailScreen;
