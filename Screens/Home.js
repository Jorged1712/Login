import { Text, StyleSheet, View, Image } from 'react-native'
import React from 'react'
import Chelsea from '../assets/chelsea.png'


export default function Home() {

    return (
        <View style={styles.padre}>
           <View>
            <Image style= {styles.profile} source={Chelsea}/>
           </View>
             
        </View>
    ) 
}


const styles = StyleSheet.create({
    profile: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 20,
        backgroundColor: 'white',
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