import {getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import appFirebase from '../credenciales';

const auth = getAuth(appFirebase);

export default function Login(props) {

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleLogin = async() => {
    try {
        await signInWithEmailAndPassword (auth, username, password)
        Alert.alert('Inicio de sesión exitoso');
        props.navigation.navigate('Home');
    } catch (error) {
        console.log(error);
    }
  
  };
  return (
    <View style={styles.padre}>
      <View>
        <Image source={require('../assets/chelsea.png')} style={styles.profile} />
      </View>

      <View style={styles.tarjeta}>
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          value={username}
          onChangeText={(text)=>setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={password}
          onChangeText={(text)=>setPassword(text)}
          secureTextEntry
        />
        <TouchableOpacity style={styles.botonSesion} onPress={handleLogin}>
          <Text style={styles.textoBoton}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  padre: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tarjeta: {
    margin: 20,
    padding: 100,
    backgroundColor: 'white',
    borderRadius: 20,
    width: '90%',
    height: '60%',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  profile: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
    marginBottom: 100,
    alignSelf: 'center',
    backgroundColor: 'salmon',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  botonSesion: {
    backgroundColor: 'salmon',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  textoBoton: {
    color: 'white',
  },
});
