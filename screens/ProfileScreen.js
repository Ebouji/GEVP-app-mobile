import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'

const ProfileScreen = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleLanguageChange = (language) => {
    // Mettez à jour l'état de la langue sélectionnée
    setSelectedLanguage(language);

    // Ajoutez ici le code pour changer la langue dans votre application
    // En fonction de la langue sélectionnée
  };

  const handleBack = () => {
    // Ajoutez ici le code pour aller en arrière dans votre application
    // par exemple, navigation.goBack()
  };

  const handleNext = () => {
    // Ajoutez ici le code pour aller vers la page suivante dans votre application
    // par exemple, navigation.navigate('NextPage')
  };
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Partie supérieure avec le logo */}
      <View style={styles.topSection}>
        <Image source={require('../assets/images/logo.png')} style={styles.logo} />
      </View>

      {/* Partie centrale avec le texte */}
      <View style={styles.middleSection}>
        <Text style={[styles.description,{ fontFamily: 'sans-serif-medium' }]}> Choisir la langue </Text>
        <Text style={[styles.title,{ fontFamily: 'sans-serif-medium' }]}> maintenant !</Text>
      </View>

      {/* Partie inférieure avec les boutons de sélection de langue */}
      <View style={styles.bottomSection}>
        <View style={styles.languageButtons}>
          <TouchableOpacity
            style={[styles.languageButton, selectedLanguage === 'fr' && styles.selectedButton]}
            onPress={() => handleLanguageChange('fr')}
          >
            <Text style={styles.buttonText}>Français</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.languageButton, selectedLanguage === 'ar' && styles.selectedButton]}
            onPress={() => handleLanguageChange('ar')}
          >
            <Text style={styles.buttonText}>العربية</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.languageButton, selectedLanguage === 'en' && styles.selectedButton]}
            onPress={() => handleLanguageChange('en')}
          >
            <Text style={styles.buttonText}>English</Text>
          </TouchableOpacity>
        </View>
        </View>
        {/* Deux boutons en bas (Back et Next) */}
        <View style={styles.bottomButtons}>
          <TouchableOpacity style={styles.button} onPress={handleBack}>
            <Text style={styles.buttonText} onPress={()=> navigation.goBack()}>Retour</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleNext}>
            <Text style={styles.buttonText} onPress={()=> navigation.navigate('Test')}>Suivant</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#8BCB91'
  },
  middleSection: {
    flex:2,
    padding: 20,
    margin:100,
    marginTop:-250,
    justifyContent: 'center',
    textAlign:'center',
  },
  bottomSection: {
    flex: 1,
    marginTop:-350,
  
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign:'center'
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign:'center'
  },
  languageButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  languageButton: {
    padding: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  selectedButton: {
    backgroundColor: '#8BCB91',
    borderColor: '#fff',
  },
  
  buttonText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  bottomButtons: {
    padding:10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    borderRadius:5,
  },

  button: {
    padding: 10,
    borderRadius: 25,
    borderColor: '#fff',
    backgroundColor: '#8BCB91',
  },
});

export default ProfileScreen;
