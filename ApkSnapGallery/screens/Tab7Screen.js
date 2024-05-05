import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons} from '@expo/vector-icons';

const Tab7Screen = () => {
  return (
    <View style={styles.container}>
    <View style={styles.topIconsContainer}>
      <Ionicons name="home-outline" size={30} color="black" />
      <Ionicons name="search-outline" size={30} color="black" />
      <Ionicons name="folder-outline" size={30} color="black" />
    </View>
    <Image
      source={require('../img/Conejo_astronomo1.jpg')}
      style={styles.largeImage}
      resizeMode="cover"
    />
    <Text style={styles.imageTitle}>Título de la Imagen</Text>
    <TouchableOpacity style={styles.mediumFolder}>
      <Ionicons name="folder" size={110} color="black" />
    </TouchableOpacity>
    <TouchableOpacity style={styles.mediumFolder}>
      <Ionicons name="arrow-down-sharp" size={110} color="black" />
    </TouchableOpacity>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF9999'
  },
  topIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 20,
  },
  largeImage: {
    width: '90%',
    height: 200,
    marginBottom: 20,
  },
  imageTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  mediumFolder: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default Tab7Screen;