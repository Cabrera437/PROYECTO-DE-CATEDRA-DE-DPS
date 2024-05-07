import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Home = () => {
  const [searchText, setSearchText] = useState('');
  const [imagenes, setImagenes] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://663814fc4253a866a24cc40b.mockapi.io/api/v1/imagenes?search=${searchText}`);
      if (!response.ok) {
        throw new Error('Error al buscar imágenes');
      }
      const data = await response.json();
      setImagenes(data);
    } catch (error) {
      console.error('Error al buscar imágenes:', error);
    }
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
      <FlatList
        data={imagenes}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 10 }}>
            <Image source={{ uri: item.imagen }} style={{ width: 200, height: 200 }} />
            {/* Aquí puedes mostrar más detalles de la imagen o agregar botones para interactuar con ella */}
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

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

export default  Home;





