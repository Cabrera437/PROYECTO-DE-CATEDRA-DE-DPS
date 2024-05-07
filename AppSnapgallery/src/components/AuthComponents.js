import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, TouchableOpacity, TextInput, Button, StyleSheet, Text, View, Alert } from 'react-native';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react'; // Añadí useEffect
import { BlurView } from 'expo-blur';
import { getAuth, createUserWithEmailAndPassword, initializeAuth, getReactNativePersistence, signInWithEmailAndPassword} from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '../utils/firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

const uri = ''
const profilePicture = 'https://github.com/Cabrera437/PROYECTO-DE-CATEDRA-DE-DPS/blob/master/logo.png?raw=true'

// Inicializa la app de Firebase fuera de cualquier componente
const app = initializeApp(firebaseConfig);

export function LoginScreen(){
  const [email, setEmail] = React.useState(''); // Cambié settEmail a setEmail
  const [password, setPassword] = React.useState('');
  const navigation = useNavigation();
  const auth = getAuth(app);

  const handleCreateAccount =() =>{
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
      console.log('Account created!')
      const user = userCredential.user;
      console.log(user)
      
    })
    .catch(error =>{
      console.log(error)
      Alert.alert(error.message)
    })
  }

  const handleSignIn =() =>{
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
      console.log('Signed in!')
      const user = userCredential.user;
      console.log(user)
      navigation.navigate('Home');
    })
    .catch(error =>{
      console.log(error)
    })
  }

  return (
    <View style={styles.container}>
      <Image source={{uri}} style={[styles.image , StyleSheet.absoluteFill]} />
      <ScrollView contentContainerStyle= {{
        flex: 1,
        width:'100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <BlurView intensity={100}>
            <View style={styles.login}>
                <Image source={{uri: profilePicture}} style={styles.profilePicture} />
                <View>
                    <Text style={{fontSize: 20, fontWeight: '400' }}>Bienvenidos a SnapGallery</Text>
                    <Text style={{fontSize: 15, }}>Correo Electronico</Text>
                    <TextInput onChangeText={setEmail} style={styles.input} placeholder='E-mail'/>
                </View>
                <View>
                    <Text style={{fontSize: 15,}}>Contraseña</Text>
                    <TextInput onChangeText={setPassword} style={styles.input}  placeholder='Contraseña' secureTextEntry={true}/>
                </View>
                <TouchableOpacity onPress={handleSignIn} style={styles.button}>
                    <Text style={{fontSize: 17, fontWeight: '400', color: '#fff'}}>Iniciar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleCreateAccount} style={styles.button}>
                    <Text style={{fontSize: 17, fontWeight: '400', color: '#fff'}}>Crear Cuenta</Text>
                </TouchableOpacity>

            </View>
        </BlurView>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FF9999',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: '100%',
      height:'100%',
      resizeMode: 'cover',
    },
    login:{
      width: 350,
      height: 500,
      borderColor: 2,
      borderRadius: 10,
      padding: 10,
      alignItems: 'center',
       
    },
    profilePicture: {
      width: 100,
      height: 100,
      borderRadius: 50,
      borderColor: '#fff',
      borderWidth: 1,
      marginVertical: 30,
    },
    input:{
      width: 250,
      height: 40,
      borderColor: '#fff',
      borderWidth: 2,
      borderRadius: 10,
      padding: 10,
      marginVertical: 10,
      backgroundColor: '#ffffff90',
      marginBottom: 20 
    },
  
    button: {
      width: 250,
      height: 40,
      borderRadius: 10,
      backgroundColor: '#000000',
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 10,
      borderColor: '#fff',
      borderWidth: 1,
    }
  });