import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import {ArrowLeftIcon} from 'react-native-heroicons/solid'
import { FontAwesome } from '@expo/vector-icons';
import NavSection from '../components/NavSection';
import { useNavigation } from '@react-navigation/native';

const data = [
  { id: '1', nom: 'Commande 1', idProduit: 'P001', description: 'Description de la commande 1', date: '01/01/2024' },
  { id: '2', nom: 'Commande 2', idProduit: 'P002', description: 'Description de la commande 2', date: '02/01/2024' },
  { id: '3', nom: 'Commande 3', idProduit: 'P003', description: 'Description de la commande 3', date: '03/01/2024' },
  { id: '4', nom: 'Commande 4', idProduit: 'P004', description: 'Description de la commande 4', date: '04/01/2024' },
  { id: '5', nom: 'Commande 5', idProduit: 'P005', description: 'Description de la commande 5', date: '05/01/2024' },
  // Ajoutez d'autres commandes selon vos besoins
];

const CommandeScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View onPress={() => navigation.navigate('DetailScreen', { item })} >
      <View style={styles.commandeItem}>
        <FontAwesome name="shopping-cart" size={24} color="#C4B454" style={styles.icon} />
        <Text style={styles.textbold}>{item.nom}</Text>
        <Text>{item.description} | Produit: {item.idProduit}</Text>
        <Text>{item.date}</Text>
        {/* Ajoutez votre icône ici */}
        <TouchableOpacity style={styles.detailButton} onPress={() => navigation.navigate('Detail', { item })}>
          <Text style={styles.textButton}>Détails</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Commande</Text>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()} className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4">
      <ArrowLeftIcon size="20" color="black" />
      </TouchableOpacity>
      </View>
      <Text style={styles.subHeaderText}>Liste CMDS</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <NavSection />
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor:'#8BCB91',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 0,
    paddingHorizontal: 20,
    elevation: 5, // Pour l'ombre sur Android
    position: '',
    bottom: 0,
    left: 0,
    right: 0,
  },
  headerText: {
    fontSize: 24,
    top: 10,
    fontWeight: 'bold',
    marginBottom: 16,
    
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left:-16,
  },
  subHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign:'center',
    marginBottom: 10,
    
  },
  commandeItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    padding: 16,
    marginBottom: 8,
    backgroundColor:'#8BCB91'
  },
  detailButton: {
    marginTop: 8,
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 10,
    alignItems: 'center',
  },
  textbold: {
    fontWeight:'bold',
  },
  textButton:{
    color:'green'
  },
  icon: {
    marginRight: 10,
  }
});

export default CommandeScreen;
