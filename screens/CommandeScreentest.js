import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const CommandeScreentest = () => {
  /*const [commandes, setCommandes] = useState([]);

  useEffect(() => {
    // Utilisez la fonction fetch pour récupérer les données depuis votre API ou un fichier local
    fetch('URL_DE_VOTRE_API_OU_FICHIER_JSON')
      .then(response => response.json())
      .then(data => {
        // Mettez à jour l'état avec les données récupérées
        setCommandes(data);
      })
      .catch(error => {
        console.error('Erreur de requête :', error);
      });
  }, []); // Le tableau vide [] signifie que cette fonction sera exécutée une seule fois lors du montage du composant*/
  
  //Deuxiemme methode:
  /*try {
    const response = await fetch('votre-url-api');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Erreur de requête :', error);
  }*/
   
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Liste des commandes :</Text>
      <FlatList
        //data={commandes}
        keyExtractor={(item) => item.id.toString()} // Assurez-vous que chaque élément a une propriété unique id
        renderItem={({ item }) => (
          <View>
            <Text style={styles.text}>Commande ID: {item.id}</Text>
            <Text style={styles.text}>Description: {item.description}</Text>
            {/* Ajoutez d'autres champs que vous souhaitez afficher */}
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 2,
      backgroundColor: '#fff',
    },
    text:{
        fontSize: 16,
    color: '#333',
    textAlign: 'center',
    fontWeight: 'bold',
    },
});

export default CommandeScreentest;
