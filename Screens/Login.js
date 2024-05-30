import {getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { StyleSheet, View, Image, TextInput, TouchableOpacity, Text, Alert, Keyboard , TouchableWithoutFeedback} from 'react-native';
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
        Alert.alert('Error al iniciar sesión');
    }
  
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <View style={styles.padre}>
      <View>
        <Image source={require('../assets/user.jpg')} style={styles.profile} />
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
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  input: {
      height: 40,
      width: '80%',
      margin: 12,
      borderWidth: 1,
      padding: '10px',
      borderRadius: '15px',
      paddingLeft: 10,
      

  },

  padre: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '100%',
      
  },

  profile: {
      width: 200,
      height: 200,
      borderRadius: 100,
      marginBottom: 20,
      backgroundColor: 'white',
  },

  botonSesion: {
      backgroundColor: 'skyblue', 
      padding: 10,
      borderRadius: 5,
      alignItems: 'center', 
      marginTop: 10,
},

textoBoton: {
  color: 'black',
  textAlign: 'center',
  
},
tarjeta : {
  width: '65%',
  marginBottom: 200,
  height: '40%',
  backgroundColor: 'rgb(243, 238, 234)',
  borderRadius: 10,
  alignItems: 'center',
  paddingTop: 30,
  
  shadowColor: 'rgb(82, 82, 247)',
  shadowOffset: {
    width: 5,
    height: 5,
  },
  shadowOpacity: 0.55,
  shadowRadius: 3.84,
  elevation: 5,
}

});