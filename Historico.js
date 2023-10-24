import {View, StyleSheet, Text} from 'react-native';
import { useState, useContext } from 'react';
import { UtilsContexts } from './context';

export function Historico(props){
    const {utils, setContext} = useContext(UtilsContexts)
    console.log("util", utils)

    return(
        <View style = {styles.container}>
            <Text style = {styles.text}>Histórico</Text>
            <Text>{utils.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        alignItems: 'center',
        marginTop: '20px'
    },

    text: {
        fontSize: '50px',
        fontWeight: 'bold'
    }
})