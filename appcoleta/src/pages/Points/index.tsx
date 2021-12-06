

import React, {useState, useEffect} from "react";

import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";

//importar o icone da expo vector icon
import { Feather as Icon } from '@expo/vector-icons';

//import dos componentes do react-native-maps
import MapView, { Marker } from "react-native-maps";

//importar useNavigation da lib react-navigation/native
import { useNavigation } from '@react-navigation/native';

//Importar o axios
import axios from 'axios';

function Points() {

    const navigation = useNavigation();

    //Funcao que volta para a tela de Home
    function Voltar(){
        navigation.goBack();
    }

    //funcao que abre a tela de detalhes
    function openDetails(){
        navigation.navigate('Detail');
    }
    //Hook que executa antes de renderizar o componente
    useEffect(() => {
        alert('Ponto de coleta carregado');
        //Chamando a funcao listaCategorias
        listaCategorias();
    },[]);

    //Função que lista as categorias
    async function listaCategorias(){
        try {
            //Determinar a url
            let url = 'http://192.168.0.111/appecoleta/lista-categorias.php';
            //Fazer a requisição
            let reponse = await axios.get(url);
            //Exibir resultado
            console.log(reponse.data);
            
        } catch (error) {
            console.log(error);
        }
    }//Fechar listaCategorias

    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity onPress={Voltar}>
                    <Icon name="arrow-left" size={20} color="#34cb79" />
                </TouchableOpacity>

                <Text style={styles.title}>Bem vindo</Text>
                <Text style={styles.description}>Encontre no mapa um ponto de coleta</Text>

                <View style={styles.mapContainer}>
                    <MapView style={styles.map} initialRegion={{
                        latitude: -23.406788784755513,
                        longitude: -46.87800137299637,
                        latitudeDelta: 0.014,
                        longitudeDelta: 0.014
                    }}>

                        <Marker onPress={openDetails} coordinate={{ latitude: -23.40697005686885, longitude: -46.87813209312042 }}>
                            <View style={styles.mapMarkerContainer}>
                                <Image style={styles.mapMarkerImage} source={{uri:'https://cdn.pixabay.com/photo/2014/05/02/23/52/castle-336498_960_720.jpg'}}/>
                                <Text style={styles.mapMarkerTitle}>Fatec</Text>
                            </View>
                        </Marker>


                        <Marker onPress={() => { alert("Clicou no marcador!") }}
                            coordinate={{
                                latitude: -23.406203074306045,
                                longitude: -46.877598136653305
                            }}>
                         <View style={styles.mapMarkerContainer}>
                                <Image style={styles.mapMarkerImage} source={{uri:'https://cdn.pixabay.com/photo/2017/07/02/17/43/church-2465148_960_720.jpg'}}/>
                                <Text style={styles.mapMarkerTitle}>Mc Donalds</Text>                  
                         </View>


                        </Marker>

                    </MapView>
                </View>

                <View style={styles.itemsContainer}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity style={styles.item}>
                        <Image width={42} height={42} source={require('../../assets/icones/eletronicos.png')}/>
                        <Text style={styles.itemTitle}>Resíduos Eletrônicos</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.item}>
                        <Image width={42} height={42} source={require('../../assets/icones/lampadas.png')}/>
                        <Text style={styles.itemTitle}>Lampadas</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.item}>
                        <Image width={42} height={42} source={require('../../assets/icones/organicos.png')}/>
                        <Text style={styles.itemTitle}>Orgânicos</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.item}>
                        <Image width={42} height={42} source={require('../../assets/icones/papeis-papelao.png')}/>
                        <Text style={styles.itemTitle}>Papelão</Text>
                    </TouchableOpacity>
                 </ScrollView>
                </View>


            </View>
        </>
    )

}

export default Points;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 32
    },

    title: {
        fontSize: 20,
        fontFamily: 'Ubuntu_700Bold',
        marginTop: 24
    },

    description: {
        fontSize: 16,
        marginTop: 4,
        fontFamily: 'Roboto_400Regular',
        color: '#6C6C80'
    },

    mapContainer: {
        flex: 1,
        width: '100%',
        borderRadius: 10,
        overflow: 'hidden',
        marginTop: 16
    },

    map: {
        width: '100%',
        height: '100%'
    },

    mapMarkerContainer:{
        width:120,
        height:70,
        backgroundColor: '#34CB79',
        flexDirection: 'column',
        borderRadius:8,
        overflow:'hidden',
        alignItems:'center'
    },

    mapMarkerImage:{
        width:120,
        height:45,
        resizeMode:'cover'
    },

    mapMarkerTitle:{
        flex:1,
        fontFamily:'Roboto_400Regular',
        fontWeight: 'bold',
        color:'#FFF',
        lineHeight:23        
    },

    itemsContainer:{
        flexDirection: 'row',
        marginTop:16,
        marginBottom:32,
      
    },

    item:{
      backgroundColor:'#DCF9EA',
      width:120,
      height:120,
      borderRadius:8,
      alignItems:'center' ,
      justifyContent:'space-between' ,
      textAlign:'center',
      borderWidth:2,
      borderColor:'#EEE',
      paddingHorizontal:16,
      paddingTop:20,
      paddingBottom: 16,
      marginRight:8
    },

    itemTitle:{
        fontFamily:'Roboto_400Regular',
        textAlign:'center',
        fontSize:13
    }

});