import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function App() {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    //lógica de la búsqueda
    console.log('Texto de búsqueda:', searchText);
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <MaterialIcons name="home" size={32} color="white" />
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar..."
            onChangeText={setSearchText}
            value={searchText}
          />
          <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
            <MaterialIcons name="search" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <MaterialIcons name="folder" size={32} color="white" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF9999',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  iconContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginLeft: 20, 
    marginRight: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 12,
  },
  searchButton: {
    marginLeft: 10,
  },
});
