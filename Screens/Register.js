import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import appFirebase from '../credenciales';  


const auth = getAuth(appFirebase);

export default function register (props)  {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            Alert.alert('Registro exitoso');
            props.navigation.navigate('Login');
        } catch (error) {
            console.error('Error al registrar al usuario:', error.message);
            Alert.alert('Error al registrar', error.message);
        }
    };

    return (
        <View style={styles.padre} >
            <TextInput
                style={styles.input}    
                placeholder="Nombre"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Correo Electrónico"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TextInput
                style={styles.input}
                placeholder="Repetir Contraseña"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
            />
            <TouchableOpacity style={styles.botonSesion} onPress={handleRegister}>
                <Text >Registrar</Text>
            </TouchableOpacity>
        </View>

    )
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
    botonSesion: {
        backgroundColor: 'skyblue', 
        padding: 10,
        borderRadius: 5,
        alignItems: 'center', 
        marginTop: 10,
  },


    padre: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',

    }



});




