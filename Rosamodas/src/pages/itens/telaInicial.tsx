import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {Icon} from "react-native-elements"
import { Text, View, StyleSheet, TouchableOpacity, Modal, ScrollView } from 'react-native';
//Importar useNavigation da biblioteca react-navigation/native
import {useNavigation} from "@react-navigation/native";
import css from '../css/css'; 
//Importando subTelaInicial
import SubTela from './subTelaInicial';

function TelaInicial(){
    const [modal, setModal] = useState(false);
    const navigation = useNavigation();
    function render(){
        setModal(!modal);
    }
    function camisas(){
        navigation.navigate("Items", {categoria: "Camisa"});
    }
    function calça(){
        navigation.navigate("Items", {categoria: "Calça"});
    }
    return(
        <ScrollView>
        <View style={{flex:1}}>
            <View style={{backgroundColor:'#ffe8f8'}}>
            <StatusBar/>
            <TouchableOpacity
                onPress={() => render()}
                style={{marginTop: 20, width:"35%", backgroundColor:"#ffe8f8", alignItems:'baseline'}}
            >
                <Icon
                    name="bars"
                    type="ant-design"
                    color="#000"
                    size={20}
                    tvParallaxProperties={
                        {
                            enabled: true,
                            shiftDistanceX: 10,
                            shiftDistanceY: 0,
                            magnitude: 2
                        }
                    }
                    style={{paddingLeft:10, marginBottom:10}}
                />
            </TouchableOpacity>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modal}
            >
            <TouchableOpacity
                onPress={() => setModal(!modal)}
                style={{marginTop: 20, width:"35%", zIndex:1, backgroundColor:"#ffe8f8", alignItems:'baseline'}}
            >
                <Icon
                    name="close"
                    type="ant-design"
                    color="#000"
                    size={20}
                    tvParallaxProperties={
                        {
                            enabled: true,
                            intensity: 1,
                        }
                    }
                    style={{paddingLeft:10, marginBottom:10}}
                />
            </TouchableOpacity>
            <View style={{backgroundColor:'rgba(232, 232, 232, 0.4)', flexDirection:'column', height:"100%"}}>
            <View style={{backgroundColor:'rgba(255,232,248, 0.8)', height:"100%", width:"35%"}}>
            <TouchableOpacity 
            onPress={() => {camisas();setModal(!modal)}}
            style={css.menu}
            >
                <Text>Camisas</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => {calça();setModal(!modal)}}
            style={css.menu}>
                <Text>Calça</Text>
            </TouchableOpacity>
            </View>
            </View>
            </Modal>
            </View>
            <SubTela/>
        </View>
        </ScrollView>
    );
}
export default TelaInicial;