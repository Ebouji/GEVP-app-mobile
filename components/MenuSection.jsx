import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MenuSection = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    // Ajoutez ici le code pour aller en arrière dans votre application
    // Par exemple, navigation.goBack()
    navigation.goBack();
  };

  const handleNext = () => {
    // Ajoutez ici le code pour aller vers la page suivante dans votre application
    // Par exemple, navigation.navigate('Commande')
    navigation.navigate('Commande');
  };
}
 


export default MenuSection;
