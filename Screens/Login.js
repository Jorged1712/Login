import { Text, StyleSheet, View, Image } from 'react-native'
import React, { useState } from 'react'

export default function Login() {

    return (
        <View style={styles.padre}>
            <View style={styles.tarjeta}>
                <Image source={require('../assets/chelsea.png')} style={styles.profile} />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    padre: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center', // Alinea el contenido al final en el eje vertical
        alignItems: 'center', // Centra el contenido en el eje horizontal


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
    }


})