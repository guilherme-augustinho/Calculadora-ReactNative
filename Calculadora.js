import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useState, useContext} from 'react'
import { UtilsContexts } from "./context";

export function Calculadora(props) {
    const [text, setText] = useState("")
    const {utils, setUtils} = useContext(UtilsContexts)
    
    function goToHistorico(){
        setUtils({...utils, text: [text]})
        props.navigation.navigate("Historico")
    }

    return (

        <View style={styles.container}>

            <Text style={styles.textP}>CALCULADORA</Text>

            <View style={styles.vw}>
                {text}
            </View>

            <View style={styles.container2}>
                <TouchableOpacity style={styles.ops} onPress = {() => setText(text + "+")}> <Text style={styles.op}>+</Text> </TouchableOpacity>
                <TouchableOpacity style={styles.ops} onPress = {() => setText(text + "-")}> <Text style={styles.op}>-</Text> </TouchableOpacity>
                <TouchableOpacity style={styles.ops} onPress = {() => setText(text + "/")}> <Text style={styles.op}>/</Text> </TouchableOpacity>
                <TouchableOpacity style={styles.ops} onPress = {() => setText(text + "*")}> <Text style={styles.op}>x</Text> </TouchableOpacity>
                <TouchableOpacity style={styles.ops} onPress = {() => setText(eval(text))}> <Text style={styles.op}>=</Text> </TouchableOpacity>
            </View>

            <View style={styles.container2}>
                <TouchableOpacity style={styles.ops} onPress = {() => setText(text + "1")}> <Text style={styles.op}>1</Text> </TouchableOpacity>
                <TouchableOpacity style={styles.ops} onPress = {() => setText(text + "2")}> <Text style={styles.op}>2</Text> </TouchableOpacity>
                <TouchableOpacity style={styles.ops} onPress = {() => setText(text + "3")}> <Text style={styles.op}>3</Text> </TouchableOpacity>
            </View>

            <View style={styles.container2}>
                <TouchableOpacity style={styles.ops} onPress = {() => setText(text + "4")}> <Text style={styles.op}>4</Text> </TouchableOpacity>
                <TouchableOpacity style={styles.ops} onPress = {() => setText(text + "5")}> <Text style={styles.op}>5</Text> </TouchableOpacity>
                <TouchableOpacity style={styles.ops} onPress = {() => setText(text + "6")}> <Text style={styles.op}>6</Text> </TouchableOpacity>
            </View>

            <View style={styles.container2}>
                <TouchableOpacity style={styles.ops} onPress = {() => setText(text + "7")}> <Text style={styles.op}>7</Text> </TouchableOpacity>
                <TouchableOpacity style={styles.ops} onPress = {() => setText(text + "8")}> <Text style={styles.op}>8</Text> </TouchableOpacity>
                <TouchableOpacity style={styles.ops} onPress = {() => setText(text + "9")}> <Text style={styles.op}>9</Text> </TouchableOpacity>
            </View>

            <View style={styles.container2}>
                <TouchableOpacity style={styles.ops} onPress = {() => setText(text + "0")}> <Text style={styles.op}>0</Text> </TouchableOpacity>

            </View>

            <View style = {styles.container3}>
                <TouchableOpacity style = {styles.btns} onPress = {() => setText("")}> <Text style = {styles.TextB}>Limpar</Text> </TouchableOpacity>
                <TouchableOpacity style = {styles.btns} onPress = {() => goToHistorico()}> <Text style = {styles.TextB}>Hitórico</Text></TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        backgroundColor: 'grey',
        width: '500px'
    },

    textP: {
        fontSize: '50px',
        fontWeight: 'bold',
    },

    vw: {
        border: 'solid 2px grey',
        width: '500px',
        height: '50px',
        borderRadius: '5px',
        marginTop: '20px',
        backgroundColor: 'white'
    },

    container2: {
        display: 'flex',
        flexDirection: 'row'
    },

    ops: {
        backgroundColor: 'white',
        width: '30px',
        height: '30px',
        margin: '10px',
        alignItems: 'center'
    },

    op: {
        fontSize: '20px',
        fontWeight: 'bold'
    },

    container3: {
        display: 'flex',
        flexDirection: 'row'
    },

    btns: {
        backgroundColor: 'white',
        margin: '10px',
        width: '100px',
        height: '30px',
        alignItems: 'center'
    },

    TextB: {
        fontWeight: 'bold',
        marginTop: '5px'
    }

})
