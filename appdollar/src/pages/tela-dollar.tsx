import React, {useState} from "react";

import {View, Image, TextInput, TouchableOpacity, Text, StyleSheet, StatusBar} from 'react-native';



function TelaDollar(){
    //Criar os States
    let [dollar, setDollar] = useState(0);
    let [cotacao, setCotacao] = useState(5.34);
    let [totalReal, setTotalReal] = useState(0);
    function Calcular(){
        totalReal = (dollar * cotacao);
       // alert('US$: '+dollar.toFixed(2)+'\nR$: '+totalReal.toFixed(2));
        setTotalReal(totalReal)
    }
    return(
        <View style={styles.container}>
            <StatusBar></StatusBar>
            <Image source={require('../../assets/Dollar.png')} style={{width: 128, height:128}}/>
            <Text style={styles.title}>Conversor de Dollar</Text>
            <Text style={styles.subTitle}>O melhor aplicativo para converter Dollares</Text>
            <TextInput style={styles.TextInput} 
            placeholder="Entre com um valor em dollar"
            onChangeText={(texto:string) => setDollar(parseFloat(texto))}
            onKeyPress={({nativeEvent})=>{
                if(nativeEvent.key === 'Backspace'){
                    setDollar(Number(String(totalReal).slice(0,-1)));
                }
                else{
                    onchange=Calcular;
                }
            }}
            ></TextInput>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} onPress={Calcular}>Converter</Text>
            </TouchableOpacity>
            <Text >R$ {totalReal.toFixed(2)}</Text>
        </View>
    );
}

export default TelaDollar;

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:20,
        marginTop:20,
        fontWeight:'bold',
        color: '#808080'
    },
    TextInput:{
        width: 300,
        marginTop: 10,
        marginBottom: 10,
        padding: 5,
        fontSize: 15,
        borderBottomColor: '#9AE0FF',
        borderBottomWidth: 2,
    },
    subTitle:{
        fontSize: 16,
        marginTop: 5,
        fontWeight: "300",
        color: "#808080"
    },
    button:{
        width: 200,
        height: 50,
        backgroundColor: '#9AE0FF',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 10
    },
    buttonText:{
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
    }
})